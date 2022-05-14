import { useEffect,useState } from "react"
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
            <h1><u>{!props.weatherInfo[0].place ? "" :props.weatherInfo[0].place} {props.weatherInfo[0].country}</u></h1>
            <div className="section-1">
                <div>
                    <p>Feels Like: {!toggle? !props.weatherInfo[0].feels? "" :props.weatherInfo[0].feels - 273 + "°C": !props.weatherInfo[0].feels? "": (props.weatherInfo[0].feels - 273) * (9/5) + 32 + "°F"}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/648/648198.png"/>
                </div>
                <div>
                    <p>Humidity: {!props.weatherInfo[0].humidity? "": props.weatherInfo[0].humidity}%</p>
                    <img src="https://cdn-icons.flaticon.com/png/512/3262/premium/3262966.png?token=exp=1652493026~hmac=2fda7d8b3a1bc956d0ddcdfc79d71953"/>
                </div>
                <div>
                    <p>Pressure: {!props.weatherInfo[0].pressure? "": props.weatherInfo[0].pressure}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1839/1839341.png"/>
                </div>
            </div>
            <div className="section-2">
                <div>
                    <p>Temp: {!toggle? !props.weatherInfo[0].temp? "": props.weatherInfo[0].temp - 273 + "°C":!props.weatherInfo[0].temp?"":(props.weatherInfo[0].temp - 273) * (9/5) + 32 + "°F"}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/3815/3815449.png"/>
                </div>
                <div>
                    <p>Temp Max: {!toggle?!props.weatherInfo[0].tempMax? "": props.weatherInfo[0].tempMax - 273 + "°C":!props.weatherInfo[0].tempMax? "" : (props.weatherInfo[0].tempMax - 273) * (9/5) + 32 + "°F"}</p>
                    <img src="https://cdn-icons.flaticon.com/png/512/5826/premium/5826412.png?token=exp=1652492255~hmac=eccb228ceac6a7e787b54a40ce0f5c1f"/>
                </div>
                <div>
                    <p>Temp Min: {!toggle?!props.weatherInfo[0].tempMin? "" : props.weatherInfo[0].tempMin - 273 + "°C":!props.weatherInfo[0].tempMin? "": (props.weatherInfo[0].tempMin - 273) * (9/5) + 32 + "°F"}</p>
                    <img src="https://cdn-icons.flaticon.com/png/512/5826/premium/5826433.png?token=exp=1652492255~hmac=16bac6c18b827cce220ebc17b103823e"/>
                </div>
            </div>
            <div className="section-3">
                <div>
                    <p>Cloud: {!props.weatherInfo[0].cloud?"":props.weatherInfo[0].cloud}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/414/414927.png"/>
                </div>
                <div>
                    <p>Wind: {!props.weatherInfo[0].wind?"":props.weatherInfo[0].wind}</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1506/1506761.png"/>
                </div>
            </div>
        </div>
    )
}