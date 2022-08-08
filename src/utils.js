import clouds from '../assets/icons/clouds.svg'
import cloud from '../assets/icons/cloud.svg'
import sun from '../assets/icons/sun.svg'
import suncloud from '../assets/icons/sun-cloud.svg'
import rain from '../assets/icons/cloud-rain.svg'
import cloudrain from '../assets/icons/cloud-rain-single.svg'
import snow from '../assets/icons/snowflake.svg'
import hail from '../assets/icons/hail.svg'
import fog from '../assets/icons/fog.svg'

export { getWindImg }
export { getImg }
export { getDayName }

const getWindImg = windr => {
  let windimg = ''

  switch (windr) {
    case 'NW':
      windimg = 'compass-north-west.svg'
      break
    case 'N':
      windimg = 'compass-north.svg'
      break
    case 'NE':
      windimg = 'compass-north-east.svg'
      break
    case 'E':
      windimg = 'compass-east.svg'
      break
    case 'SE':
      windimg = 'compass-south-east.svg'
      break
    case 'S':
      windimg = 'compass-south.svg'
      break
    case 'SW':
      windimg = 'compass-south-west.svg'
      break
    case 'W':
      windimg = 'compass-west.svg'
      break
  }

  return windimg
}

const getImg = imgDescription => {
  let img = ''

  switch (imgDescription) {
    case 'bewolkt':
      img = cloud
      break
    case 'lichtbewolkt':
      img = suncloud
      break
    case 'halfbewolkt':
      img = suncloud
      break
    case 'geheelbewolkt':
      img = clouds
      break
    case 'zonnig':
      img = sun
      break
    case 'regen':
      img = rain
      break
    case 'buien':
      img = cloudrain
      break
    case 'hagel':
      img = hail
      break
    case 'mist':
      img = fog
      break
    case 'sneeuw':
      img = snow
      break
    case 'zwaarbewolkt':
      img = clouds
      break
  }
  return img
}

const getDayName = day => {
  let date = ''

  switch (day) {
    case 1:
      date = 'Ma'
      break
    case 2:
      date = 'Di'
      break
    case 3:
      date = 'Wo'
      break
    case 4:
      date = 'Do'
      break
    case 5:
      date = 'Vr'
      break
    case 6:
      date = 'Za'
      break
    case 7:
      date = 'Zo'
      break
  }
  return date
}
