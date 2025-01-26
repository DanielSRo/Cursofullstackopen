const WeatherData = ({ data }) => {
    if (data.length !== 0) {
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 

        return (
            <div>
                <h3>Wearther in {data.name}</h3>
                <p>Temperature: {data.main.temp} C°</p>
                <img src={icon} alt={data.weather[0].icon} />
                <p>Wind: {data.wind.speed} m/s</p>
            </div>
        )
    }
    return (
        <>
        </>
    )

}

export default WeatherData