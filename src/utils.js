export { getWindImg };
export { getImg };
export { getDayName };

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
    let img = '../assets/icons/'

    switch(imgDescription) {

        case 'bewolkt':
            img += 'clouds.svg'
            break
        case 'lichtbewolkt':
            img += 'cloud.svg'
            break
        case 'halfbewolkt':
            img += 'sun-cloud.svg'
            break
        case 'geheelbewolkt':
            img += 'clouds.svg'
            break
        case 'bewolkt':
            img += 'clouds.svg'
            break
        case 'bewolkt':
            img += 'clouds.svg'
            break
        case 'bewolkt':
            img += 'clouds.svg'
            break
        case 'bewolkt':
            img += 'clouds.svg'
            break
        case 'bewolkt':
            img += 'clouds.svg'
            break
        case 'bewolkt':
            img += 'clouds.svg'
            break
        case 'bewolkt':
            img += 'clouds.svg'
            break
    }
    return img
}

const getDayName = day => {
  let date = ''

  switch(day) {
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