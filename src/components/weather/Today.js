
export default function Today(props) {
    return (
        <div className="today-container">
            Today
            <p>Feels Like: {props.weatherInfo[0].feels}</p>
            <p>Humidity: {props.weatherInfo[0].humidity}</p>
            <p>Pressure: {props.weatherInfo[0].pressure}</p>
            <p>Temp: {props.weatherInfo[0].temp}</p>
            <p>Temp Max: {props.weatherInfo[0].tempMax}</p>
            <p>Temp Min: {props.weatherInfo[0].tempMin}</p>
            <p>{props.weatherInfo[0].country}</p>
            <p>{props.weatherInfo[0].weather}</p>
            <p>{props.weatherInfo[0].wind}</p>

        </div>
    )
}