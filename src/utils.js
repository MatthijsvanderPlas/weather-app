import clouds from '../assets/icons/clouds.svg'
import cloud from '../assets/icons/cloud.svg'
import sun from '../assets/icons/sun.svg'
import suncloud from '../assets/icons/sun-cloud.svg'
import rain from '../assets/icons/cloud-rain.svg'
import cloudrain from '../assets/icons/cloud-rain-single.svg'
import snow from '../assets/icons/snowflake.svg'
import hail from '../assets/icons/hail.svg'
import fog from '../assets/icons/fog.svg'

import compasseast from '../assets/icons/compass-east.svg'
import compasswest from '../assets/icons/compass-west.svg'
import compassnorth from '../assets/icons/compass-north.svg'
import compasssouth from '../assets/icons/compass-south.svg'
import compassnortheast from '../assets/icons/compass-north-east.svg'
import compassnorthwest from '../assets/icons/compass-north-west.svg'
import compasssoutheast from '../assets/icons/compass-south-east.svg'
import compasssouthwest from '../assets/icons/compass-south-west.svg'

export { getWindImg }
export { getImg }
export { getDayName }

const getWindImg = windr => {
  let windimg = ''

  switch (windr) {
    case 'NW':
      windimg = compassnorthwest
      break
    case 'Noord':
      windimg = compassnorth
      break
    case 'NO':
      windimg = compassnortheast
      break
    case 'Oost':
      windimg = compasseast
      break
    case 'ZO':
      windimg = compasssoutheast
      break
    case 'Zuid':
      windimg = compasssouth
      break
    case 'ZW':
      windimg = compasssouthwest
      break
    case 'West':
      windimg = compasswest
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
