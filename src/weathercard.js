import { getImg, getDayName } from './utils'

export { Weather }

let idx = 0;
const date = new Date()

class Weather {
  constructor (info) {
    this.id = idx
    this.plaats = info.plaats // location
    this.temp = info.temp // current temperature
    this.samenv = info.samenv // one word description
    this.d0tmax = info.d0tmax // max temp for the day
    this.d0tmin = info.d0tmin // min temp for the day
    this.verw = info.verw // short weather description
    this.d0weer = info.d0weer // weather icon
    this.d1weer = info.d1weer // weather icon tomorrow
    this.d2weer = info.d2weer // weather icon day after tomorrow
    this.d1tmin = info.d1tmin // min temp tomorrow
    this.d1tmax = info.d1tmax // max temp tomorrow
    this.d2tmin = info.d2tmin // min temp tomorrow
    this.d2tmax = info.d2tmax // max temp tomorrow
    this.alarm = info.alarm // alarm semi boolean 0 or 1
    this.alarmtxt = info.alarmtxt // alarmtext
    idx++
  }

  weatherCardHeader () {
    const header = document.createElement('div')
    header.classList.add('weathercard')
    header.innerHTML = `
      <p class="weatherheader__title">${this.plaats}</p>
      <p class="weatherheader__temp">${Math.round(this.temp)}°</p>
      <p class="weatherheader__short">${this.samenv}</p>
      <p class="weatherheader__minmax">Max:${this.d0tmax}° Min:${this.d0tmin}°</p>
      `
    return header
  }

  weatherCardForecast () {
    const forecast = document.createElement('div')
    forecast.classList.add('today')
    forecast.innerHTML = `
      <p class="today__pred">${this.verw}</p> 
      <div class="today__overview">
      <p class="today__overview-day">Vandaag:</p>
      <img class="today__overview-img" src="${getImg(this.d0weer)}" alt="${this.d0weer}">
      <p class="today__overview-temp">${this.d0tmin}°</p>
      <div class="tempbar">
      <div class="temp" style="
      width: ${((this.d0tmax - this.d0tmin) / 80) * 100 * 2}%;
      transform: translateX(${Number(this.d0tmin) * 2}px)
      "></div>
      <div class="indicator" style="transform: translateX(${Number(this.temp) * 2}px)"></div></div>
      <p class="today__overview-temp">${this.d0tmax}°</p>
      </div>
      <div class="today__overview">
      <p class="today__overview-day">${getDayName(date.getDay() + 1 <= 7 ? date.getDay() + 1 : 1)}:</p>
      <img class="today__overview-img" src="${getImg(this.d1weer)}" alt="${this.d1weer}">
      <p class="today__overview-temp">${this.d1tmin}°</p>
      <div class="tempbar1">
      <div class="temp1" style="
      width: ${((this.d1tmax - this.d1tmin) / 80) * 100 * 2}%;
      transform: translateX(${Number(this.d1tmin) * 2}px);
      "></div></div>
      <p class="today__overview-temp">${this.d1tmax}°</p>
      </div>
      <div class="today__overview">
      <p class="today__overview-day">${getDayName(date.getDay() + 2 > 7 ? date.getDay() + 2 === 9 ? 2 : 1 : date.getDay() + 2)}:</p>
      <img class="today__overview-img" src="${getImg(this.d2weer)}" alt="${this.d2weer}">
      <p class="today__overview-temp">${this.d2tmin}°</p>
      <div class="tempbar2">
      <div class="temp2" style="
      width: ${((this.d2tmax - this.d2tmin) / 80) * 100 * 2}%;
      transform: translateX(${Number(this.d2tmin) * 2}px)
      "></div></div>
      <p class="today__overview-temp">${this.d2tmax}°</p>
      </div>
    `
    return forecast
  }

  weatherCardAlarm () {
    const alarm = document.createElement('div')
    alarm.classList.add('alarm')
    alarm.innerHTML = `
          <p class="alarm__title rounded"  id="alarm__title">Weather Alert!<button class="alarm__btn">+</button> </p>
          <p class="alarm__text collapsed" id="alarm__text">${this.alarmtxt}</p>
          `
    return alarm
  }
}
