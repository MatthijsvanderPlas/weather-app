import './scss/main.scss'
import { getWeatherData } from './api-client'
import { Weather } from './weathercard'


const entryPointApp = document.querySelector('#app')

const modal = document.querySelector('.navbar__modal')
const modalClose = document.querySelector('.navbar__modal-close')


const addToDom = (el) => entryPointApp.append(el)

document.querySelector('.hamburger').addEventListener('click', () => {
  toggleMenu();
  fillUlList();
});

document.querySelector('.navbar__btn').addEventListener('click', (e) => {
  e.preventDefault();
  const queryParam = document.querySelector('.navbar__city')
  if (queryParam.value) {
    clearEntryPoint();
    toggleMenu();
    fetchData(queryParam.value)
  } else {
    modal.style.display = 'block';
    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    })
    window.onclick = function(e) {
      if(e.target == modal) {
        modal.style.display = 'none'
      }
    }
  }

  queryParam.value = '';
})

let locationsArray = []

const fillUlList = () => {
  const parentInput = document.querySelector('.navbar__menu-list')
  parentInput.innerHTML = ''
  locationsArray.filter(location => location !== 'undefined').forEach(location => {
    const li = document.createElement('li')
    li.classList.add('navbar__menu-item')
    li.innerHTML= `<button class="navbar__menu-btn" id="${location.id}">${location.plaats}</button>`
    parentInput.appendChild(li)
    document.getElementById(location.id).addEventListener('click', () => {
      clearEntryPoint();
      toggleMenu();
      createWeatherCard(location)
    })
  })
}

const toggleMenu = () => {
  const hamburger = document.querySelector('.hamburger')
  hamburger.classList.toggle('show')
  const menu = document.querySelector('.navbar__menu')
  menu.classList.toggle('navbar__menu-show')
}

const clearEntryPoint = () => {
  entryPointApp.innerHTML = ''
}

const geoFetchData = (position) => {
  const loc = `${position.coords.latitude},${position.coords.longitude}`
  fetchData(loc)
}

const fetchData = async (location) => {
  try {
    const res = await getWeatherData(location)
    const data = await res.json()
    const info = data.liveweer[0]
    const current = new Weather(info)
    locationsArray = [...locationsArray, current]
    localStorage.setItem('locationsArray', JSON.stringify(locationsArray))
    filterWeatherCard(current.id);
  } catch (err) {
    console.log(err)
  }
}

const filterWeatherCard = (id = 0) => {
  const filteredArray = locationsArray.filter(weatherItem => weatherItem.id === id)
  createWeatherCard(...filteredArray)
}

const createWeatherCard = (current) => {
 
  const header = current.weatherCardHeader()
  addToDom(header)

  if (current.alarm === '1') {
    const alarm = current.weatherCardAlarm()
    addToDom(alarm) 
  }

  const forecast = current.weatherCardForecast()
  addToDom(forecast)

  const extra = current.weatherCardExtra()
  addToDom(extra)
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(geoFetchData)
} else {
  entryPointApp.innerHTML = 'Geolocation not supported or blocked'
}
