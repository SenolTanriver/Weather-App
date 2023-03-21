import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material"
import { forecastType } from "../types"
import { getHumidityValue, getPop, getSunTime, getVisibilityValue, getWindDirection } from "./helpers"
import Sunrise from "./Icons/Sunrise"
import Sunset from "./Icons/Sunset"
import Tile from "./Tile"


type Props = {
    data: forecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
    <span>
        {temp} <sup>o</sup>
    </span>
)


const Forecast = ({ data }: Props): JSX.Element => {
    const today = data.list[0];


    return (
        <div>
            <div className="forecast">

                <section className="section-1">
             
                    <h2 className="section-1-item-1">{data.name} <span>-{data.country}</span></h2>
                    <h1 className="section-1-item-2">
                        <Degree temp={Math.round(today.main.temp)} />
                    </h1>
                    <p className="section-1-item-3">{today.weather[0].main}
                        {today.weather[0].description}
                    </p>
                    <p className="section-1-item-4">
                        H: <Degree temp={Math.ceil(today.main.temp_max)} />
                        H: <Degree temp={Math.ceil(today.main.temp_min)} />
                    </p>
                </section>

                <section className="section-2">
                    {data.list.map((item, i) => (
                        <div className="section-2-item-1" key={i}>
                            <p className="section-2-item-2">{i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}</p>
                            <img className="section-2-item-3"
                                alt={`weather-icon-${item.weather[0].description}`}
                                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            />
                            <p className="section-2-item-4"><Degree temp={Math.round(item.main.temp)} /></p>


                        </div>
                    ))}
                </section>

                <section className="section-3">
                    <div className="section-3-icons">
                        <div>
                            <Sunrise /> <span>Sun time: {getSunTime(data.sunrise)}</span>
                        </div>
                        <div>
                            <Sunset /> <span>Sunset: {getSunTime(data.sunset)}</span>
                        </div>
                    </div>
                    <div className="grid-container">
                        <Tile
                            icon="wind"
                            title="Wind"
                            info={`${Math.round(today.wind.speed)} km/h`}
                            description={`${getWindDirection(
                                Math.round(today.wind.deg)
                            )}, gusts 
            ${today.wind.gust.toFixed(1)} km/h`}
                        />

                        <Tile
                            icon="feels"
                            title="Feels like"
                            info={<Degree temp={Math.round(today.main.feels_like)} />}
                            description={`Feels ${Math.round(today.main.feels_like) < Math.round(today.main.temp)
                                ? 'colder'
                                : 'warmer'
                                }`}
                        />
                        <Tile
                            icon="humidity"
                            title="Humidity"
                            info={`${today.main.humidity} %`}
                            description={getHumidityValue(today.main.humidity)}
                        />
                        <Tile
                            icon="pop"
                            title="Precipitation"
                            info={`${Math.round(today.pop * 100)}%`}
                            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
                        />
                        <Tile
                            icon="pressure"
                            title="Pressure"
                            info={`${today.main.pressure} hPa`}
                            description={` ${Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
                                } than standard`}
                        />
                        <Tile
                            icon="visibility"
                            title="Visibility"
                            info={`${(today.visibility / 1000).toFixed()} km`}
                            description={getVisibilityValue(today.visibility)}
                        />
                    </div>
                </section>
                <div className="button-div">
                        <Button color='success' variant="contained" onClick={() => window.location.reload()} size="small">Another Location</Button>
                        <div className='social'>
                        <a title='github profili' className="github" href='https://github.com/SenolTanriver'><GitHubIcon /></a>
                        <a title='linkedin profili' href='https://www.linkedin.com/in/senoltanriver/'><LinkedInIcon /></a>
                        </div>
                    </div>
            </div>

        </div>
    )
}
export default Forecast