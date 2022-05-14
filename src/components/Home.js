import React, {useState} from 'react'
import Today from './weather/Today'
import { Form, Button } from 'react-bootstrap';

export default function Home() {

    const [showToday, setShowToday] = useState([{}])
    const [location, setLocation] = useState()

    const changeLocation = (e) =>{
        setLocation(e.target.value)
    }

    const submitLocation = () => {
        if(location === undefined || location === "" || location === null){
            alert('Invalid Location')
        } else {
            weatherData(location)
        }
    }

    const weatherData = (location) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88cfbde6ec14cc6b1ea870b1a0aaa9b5`)
        .then(res=>res.json())
        .then(res=>{
            setShowToday([{
                feels: res.main.feels_like,
                humidity: res.main.humidity,
                pressure: res.main.pressure,
                temp: res.main.temp, 
                tempMax: res.main.temp_max,
                tempMin: res.main.temp_min,
                country: res.sys.country,
                cloud: res.weather[0].description,
                wind: res.wind.speed,
                place: location
            }])
        })
    }

    return (
        <div className='home-container bg-dark text-light'>
            <div className="search-container">
                <h1 style={{color:'yellow'}}>Better Weather</h1>
                    <div className='search-btn-container'>
                        <div>
                            <Form.Control size="lg" type="text" placeholder="Type a city here" onChange={changeLocation}/>
                            <Button variant="light"><img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="icon"onClick={submitLocation}/></Button>
                        </div>
                        <div>
                            <p>Format: city / city,state / city,country</p>
                        </div>
                        <h3 className='mb-auto'>{Date()}</h3>
                    </div>
            </div>
            
            <Today
                weatherInfo={showToday}
            />
        </div>
    )
}