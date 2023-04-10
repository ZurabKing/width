const searchInput = document.querySelector('.input__search')
const API_KEY = '92c3f395b6ab27d28e4e0ae569754e29'
let form = document.querySelector('form')

const fetchWeatherByCity = async (city) => {
   try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    const result = await fetch(url);
    const data = await result.json(); 
    console.log(data);
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temperature').innerHTML = Math.trunc(data.main.temp)+' &deg;'+'C';
    document.querySelector('.wetness').textContent = 'Humidity: '+(data.main.humidity)+'%';
    document.querySelector('.speed').innerHTML = 'Speed: '+(data.wind.speed)+' km/h';
    
    return data
   } catch (err) {
    console.log(err)
   }
}

fetchWeatherByCity('назрань');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.reset()
})

searchInput.addEventListener('keydown', (e) => {
    let city = document.querySelector('.input__search').value
    if(e.keyCode == 13) {
        fetchWeatherByCity(city);
    }
})
    