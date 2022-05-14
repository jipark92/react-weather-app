import React, {useState, useEffect} from 'react'
import Today from './weather/Today'

export default function Home() {

    const [showToday, setShowToday] = useState([{}])

    useEffect(()=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=texas&appid=88cfbde6ec14cc6b1ea870b1a0aaa9b5')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setShowToday([{
                feels: res.main.feels_like,
                humidity: res.main.humidity,
                pressure: res.main.pressure,
                temp: res.main.temp, 
                tempMax: res.main.temp_max,
                tempMin: res.main.temp_min,
                country: res.sys.country,
                weather: res.weather[0].description,
                wind: res.wind.speed
            }])
            console.log(showToday)
        })
    },[])

    return (
        <div className='home-container'>
            <Today
                weatherInfo={showToday}
            />
        </div>
    )
}