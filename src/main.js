import './scss/main.scss'
import { getWeatherData } from './api-client'
import { Weather } from './weathercard'


const entryPointApp = document.querySelector('#app')

const addToDom = (el) => entryPointApp.append(el)

// document.querySelector('.navbar__btn').addEventListener('click', () => {
//   const cityToAdd = document.querySelector('.navbar__city').value;
//   fetchData(cityToAdd)
// });



let locationsArray = []

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
    document.querySelector('.alarm__btn').addEventListener('click', (e)  => {
      document.getElementById('alarm__text').classList.toggle('collapsed')
      document.getElementById('alarm__title').classList.toggle('rounded')
    })
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
