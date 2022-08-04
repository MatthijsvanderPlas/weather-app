export { getWeatherData }

const getWeatherData = async (loc) => {
  const res = await fetch(`https://weerlive.nl/api/json-data-10min.php?key=6b8b287400&locatie=${loc}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    content: 'applictation/json'
  })
  return res
}
