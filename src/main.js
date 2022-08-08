import './scss/main.scss'
import { getWeatherData } from './api-client'
import { getWindImg } from './utils'
import { Weather } from './weathercard'

const entryPointApp = document.querySelector('#app')

const addToDom = (el) => entryPointApp.append(el)

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
    const current = new Weather(info, locationsArray)
    locationsArray = [current]
  } catch (err) {
    console.log(err)
  }
}

const createWeatherCard = (current) => {
 
  const header = current.weatherCardHeader()
  addToDom(header)

  const forecast = current.weatherCardForecast()
  addToDom(forecast)

  current.setTempBars();
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(geoFetchData)
} else {
  entryPointApp.innerHTML = 'Geolocation not supported or blocked'
}


setTimeout(() => createWeatherCard(locationsArray[0]), 300);