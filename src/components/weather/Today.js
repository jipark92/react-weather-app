import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';

export default function Today(props) {

    const [toggle,setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(prevToggle => prevToggle = !prevToggle)
    }

    return (
        <div className="today-container">
            <Button 
                variant="outline-light" 
                size="lg" 
                onClick={handleToggle}
                >
                °C / °F
            </Button>
            <h1 style={{textTransform: 'capitalize', color:'yellow'}}>{!props.weatherInfo[0].place ? "" :props.weatherInfo[0].place + ","} {props.weatherInfo[0].country}</h1>
            <div className="section-1">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/648/648198.png" alt="icon"/>
                    <p>Feels Like: <b style={{color:'yellow'}}>{!toggle? !props.weatherInfo[0].feels? "" :parseInt(props.weatherInfo[0].feels - 273) + "°C": !props.weatherInfo[0].feels? "":parseInt( (props.weatherInfo[0].feels - 273) * (9/5) + 32) + "°F"}</b></p>
                </div>
                <div>
                    <img src="https://cdn-icons.flaticon.com/png/512/3262/premium/3262966.png?token=exp=1652493026~hmac=2fda7d8b3a1bc956d0ddcdfc79d71953" alt="icon"/>
                    <p>Humidity: <b style={{color:'yellow'}}>{!props.weatherInfo[0].humidity? "": props.weatherInfo[0].humidity + "%"}</b></p>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1839/1839341.png" alt="icon"/>
                    <p>Pressure: <b style={{color:'yellow'}}> {!props.weatherInfo[0].pressure? "": props.weatherInfo[0].pressure + "MB"}</b></p>
                </div>
            </div>
            <div className="section-2">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3815/3815449.png" alt="icon"/>
                    <p>Temp: <b style={{color:'yellow'}}>{!toggle? !props.weatherInfo[0].temp? "": parseInt(props.weatherInfo[0].temp - 273) + "°C":!props.weatherInfo[0].temp?"":parseInt((props.weatherInfo[0].temp - 273) * (9/5) + 32) + "°F"}</b></p>
                </div>
                <div>
                    <img src="https://cdn-icons.flaticon.com/png/512/5826/premium/5826412.png?token=exp=1652492255~hmac=eccb228ceac6a7e787b54a40ce0f5c1f" alt="icon"/>
                    <p>Temp Max: <b style={{color:'yellow'}}> {!toggle?!props.weatherInfo[0].tempMax? "": parseInt(props.weatherInfo[0].tempMax - 273) + "°C":!props.weatherInfo[0].tempMax? "" :parseInt( (props.weatherInfo[0].tempMax - 273) * (9/5) + 32) + "°F"}</b></p>
                </div>
                <div>
                    <img src="https://cdn-icons.flaticon.com/png/512/5826/premium/5826433.png?token=exp=1652492255~hmac=16bac6c18b827cce220ebc17b103823e" alt="icon"/>
                    <p>Temp Min: <b style={{color:'yellow'}}>{!toggle?!props.weatherInfo[0].tempMin? "" :parseInt( props.weatherInfo[0].tempMin - 273) + "°C":!props.weatherInfo[0].tempMin? "":parseInt( (props.weatherInfo[0].tempMin - 273) * (9/5) + 32) + "°F"}</b></p>
                </div>
            </div>
            <div className="section-3">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png" alt="icon"/>
                    <p style={{textTransform: 'capitalize'}}>Cloud: <b style={{color:'yellow'}}>{!props.weatherInfo[0].cloud?"":props.weatherInfo[0].cloud}</b></p>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/1506/1506761.png" alt="icon"/>
                    <p>Wind: <b style={{color:'yellow'}}>{!props.weatherInfo[0].wind?"":props.weatherInfo[0].wind + "MPH"}</b></p>
                </div>
            </div>
        </div>
    )
}