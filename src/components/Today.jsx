import React, { useEffect, useState } from 'react'
import { fetchWeatherData } from '../services/api';
import { getDate, getDateName } from '../services/Time';
import Weather from './Weather';

export default function Today({ city }) {
    const [weatherData, setWeatherData] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentTime, setCurrentTime] = useState('');

    //to get the date
    const todayDate = getDate();
    const dayName = getDateName();

    const updateTime = () => { 
        const time = new Date();
        let hour = time.getHours();
        const minute = String(time.getMinutes()).padStart(2, '0');
        
        // Convert 24-hour time to 12-hour time
        const period = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12; // Convert 0 to 12
        
        // Format hour
        const formattedHour = String(hour).padStart(2, '0');
        
        setCurrentTime(`${formattedHour}:${minute} ${period}`);
    };
    



    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        const getWeather = async () => {
        setLoading(true);
        if(!city || city === 'undefined') {
            console.log("Stopped fetching data, city is undefined!");
            setLoading(false);
            return;
        }
            if(!city) {
                console.log('Not fetching data, City is undefined!');
            } else {
                const data = await fetchWeatherData(city);
                if(data) {
                    setWeatherData(data);
                }
            }
            setLoading(false);
                
        };

        getWeather();
    }, [city]);
  return (
    <div>
    <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">

        
        {loading ?(
            <h3>Loading...</h3>
        ) : (   
            weatherData && (
                <>
        
                    <div className="container container-card">
                        <div className="card weather-card">
                            <div className='weather-body'>
                                <div className="row top">
                                    <div className="col"><i className="fa-solid fa-location-arrow fa-2xs"></i> {city}, {weatherData.sys.country}</div>
                                    <div className="col">{todayDate}</div>
                                    <div className="col">{currentTime}</div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                <img
                                    src={require(`../logo/${weatherData.weather[0].icon}.png`)} 
                                    alt='weather icon' 
                                    className='col-3 weather-icon'
                                    />
                                    
                                </div>

                                <div className="row d-flex justify-content-center">
                                    <div className="col-7 temp">{Math.floor(weatherData.main.temp)}°</div>
                                    <div className="col-5 time">
                                        <p>{weatherData.weather[0].description}</p>
                                        <h2><b>{dayName}</b></h2>
                                        <p>H:{Math.floor(weatherData.main.temp_max)}° L:{Math.floor(weatherData.main.temp_min)}°</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                </>
            )    
        )}
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12">

        
       {city && <Weather weatherData={weatherData} city={city} />} 
       </div>
       </div>
    </div>
  )
}

