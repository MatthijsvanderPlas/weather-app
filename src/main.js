import './scss/main.scss'
import { getWeatherData } from './api-client'
import { getWindImg } from './utils'
import { getImg } from './utils'
import { getDayName } from './utils'

const date = new Date()

const entryPointApp = document.querySelector('#app')

const addToDom = (el) => entryPointApp.innerHTML = el

const fetchData = async (position) => {
  const loc = `${position.coords.latitude},${position.coords.longitude}`

  try {
    const res = await getWeatherData(loc)
    const data = await res.json()
    const info = data.liveweer[0]
    createWeatherCard(info)
  } catch (err) {
    console.log(err)
  }
}


const createWeatherCard = (info) => {
  
  let output = `
    <div class="weathercard">
      <div class="weatherheader">
        <p class="weatherheader__title">${info.plaats}</p>
        <p class="weatherheader__temp">${Math.round(info.temp)}°</p>
        <p class="weatherheader__short">${info.samenv}</p>
        <p class="weatherheader__minmax">Max:${info.d0tmax}° Min:${info.d0tmin}°</p>
      </div>
      `
  if (info.alarm === '1') {
  output += `
    <div class="alarm">
      <p class="alarm__title">Weather Alert!<button class="alarm__btn">↓</button></p>
      <p class="alarm__text">${info.alarmtxt}</p>
    </div>
      `
  }

  output += `
      <div class="today">
        <p class="today__pred">${info.verw}</p> 
        <div class="today__overview">
          <p class="today__overview-day">Vandaag:</p>
          <img class="today__overview-img" src="${getImg(info.d0weer)}" alt="${info.d0weer}">
          <p class="today__overview-temp">${info.d0tmin}°</p>
          <div class="tempbar">
          <div class="temp"></div>
          <div class="indicator"></div></div>
          <p class="today__overview-temp">${info.d0tmax}°</p>
        </div>
        <div class="today__overview">
          <p class="today__overview-day">${getDayName(date.getDay()+1)}:</p>
          <img class="today__overview-img" src="${getImg(info.d1weer)}" alt="${info.d0weer}">
          <p class="today__overview-temp">${info.d1tmin}°</p>
          <div class="tempbar1">
          <div class="temp1"></div></div>
          <p class="today__overview-temp">${info.d1tmax}°</p>
        </div>
        <div class="today__overview">
          <p class="today__overview-day">${getDayName(date.getDay()+2)}:</p>
          <img class="today__overview-img" src="${getImg(info.d2weer)}" alt="${info.d0weer}">
          <p class="today__overview-temp">${info.d2tmin}°</p>
          <div class="tempbar2">
          <div class="temp2"></div></div>
          <p class="today__overview-temp">${info.d2tmax}°</p>
        </div>
    </div>
  `

  addToDom(output)

  const tempBar =  document.querySelector('.temp')
  tempBar.style.width = `${Math.round(((info.d0tmax - info.d0tmin)/80) * 100 * 2)}%`
  tempBar.style.transform = `translateX(${Number(info.d0tmin)*2}px)`

  document.querySelector('.indicator').style.transform = `translateX(${Number(info.temp)*2}px)`

  const tempBar1 =  document.querySelector('.temp1')
  tempBar1.style.width = `${Math.round(((info.d1tmax - info.d1tmin)/80) * 100 * 2)}%`
  tempBar1.style.transform = `translateX(${Number(info.d1tmin)*2}px)`

  const tempBar2 =  document.querySelector('.temp2')
  tempBar2.style.width = `${Math.round(((info.d2tmax - info.d2tmin)/80) * 100 * 2)}%`
  tempBar2.style.transform = `translateX(${Number(info.d2tmin)*2}px)`


  if (info.alarm === '1') {
  const alarmText = document.querySelector('.alarm__text')
  document.querySelector('.alarm__btn').addEventListener('click', (e) => {
      alarmText.classList.toggle('collapsed')
      if (e.target.innerText === '↓') e.target.innerText = '↑'
      else e.target.innerText = '↓'
 })
}
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(fetchData)
} else {
  entryPointApp.innerHTML = 'Geolocation not supported or blocked'
}
