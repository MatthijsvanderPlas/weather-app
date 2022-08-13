import './scss/main.scss'
import { getWeatherData } from './api-client'
import { Weather } from './weathercard'


const entryPointApp = document.querySelector('#app')

const addToDom = (el) => entryPointApp.append(el)

document.querySelector('.hamburger').addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger')
  hamburger.classList.toggle('show')
  const menu = document.querySelector('.navbar__menu')
  menu.classList.toggle('navbar__menu-show')
  fillUlList();
});

document.querySelector('.navbar__btn').addEventListener('click', (e) => {
  e.preventDefault();

})

let locationsArray = []

const fillUlList = () => {
  const parentInput = document.querySelector('.navbar__menu-list')
  parentInput.innerHTML = ''
  locationsArray.forEach(location => {
    const li = document.createElement('li')
    li.classList.add('navbar__menu-item')
    li.innerHTML= `<button class="navbar__menu-btn">${location.plaats}</button>`
    parentInput.appendChild(li)
  })
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
