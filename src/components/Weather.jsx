import React from 'react';
import sunrise from '../logo/sunrise.png';
import sunset from '../logo/sunsets.png';
import windTurbine from '../logo/wind-turbine.png';
import eye from '../logo/eye.png';

function Weather({ city, weatherData }) {  
  let sunriseTime = '';
  let sunsetTime = '';
  let windSpeed = '';
  let humidity = '';
  let humidLevel = '';
  let visibility = '';
  let windDirection = '';

  if(weatherData) {
    windSpeed = weatherData.wind.speed;
    windDirection = weatherData.wind.deg;
    humidity = weatherData.main.humidity;
    visibility = weatherData.visibility;
    const sunriseTimeStamp = weatherData.sys.sunrise;
    const sunsetTimeStamp = weatherData.sys.sunset;
    

    sunriseTime = new Date(sunriseTimeStamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    sunsetTime = new Date(sunsetTimeStamp * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' });
  }

  //checks wind direction
  let degDirection = '';
  if(windDirection === 0 || windDirection === 360) {
    degDirection = 'N';
  } else if(windDirection > 0 && windDirection < 90) {
    degDirection = 'NE';
  } else if(windDirection === 90) {
    degDirection = 'E';
  } else if(windDirection > 90 && windDirection < 180) {
    degDirection = 'SE';
  } else if(windDirection === 180) {
    degDirection = 'S';
  } else if(windDirection > 180 && windDirection < 270) {
    degDirection = 'SW';
  } else if(windDirection === 270) {
    degDirection = 'W';
  } else if(windDirection > 270 && windDirection < 360) {
    degDirection = 'NW';
  }


  if(humidity > 60) {
    humidLevel = 'High 🤒';
  } else if(humidity > 30) {
    humidLevel = 'Normal 🤙🏻';
  } else {
    humidLevel = 'Dry 🌵';
  }
  
  return (
  <div className="container weather-card-container">
  <div className="row">

    {/* Humidity Card */}
    <div className="col-6 d-flex justify-content-center">
      <div className="card weather-detail-card">
        <div className="card-body weather-card-body">
          <p className="card-title">Humidity</p>
          <div className="card-content">
            <p className='value'>{humidity}%</p>
            <p>{humidLevel}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Wind Speed Card */}
    <div className="col-6 d-flex justify-content-center">
      
      <div className="card weather-detail-card">
        <div className="card-body weather-card-body wind-speed">
          <p className="card-title">Wind Speed</p>
          <div className="card-content">
            <p className='value'>{windSpeed} mph</p>
            <p className='value'>{windDirection}° {degDirection}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Sunrise & Sunset Card */}
  <div className="col-6 d-flex justify-content-center">
    <div className="card weather-detail-card">
      <div className="card-body weather-card-body">
        
        <div className="card-section sunrise">
          <p className="card-title text-primary">Sunrise</p>
          <div className="card-content">
            <p><img src={sunrise} alt='sunrise' className="me-2" style={{ width: '30px' }} /> {sunriseTime}</p>
          </div>
        </div>
        <hr />
        <div className="card-section sunset">
          <p className="card-title text-warning">Sunset</p>
          <div className="card-content">
            <p><img src={sunset} alt='sunset' className="me-2" style={{ width: '30px' }} /> {sunsetTime}</p>
          </div>
        </div>

      </div>
    </div>
  </div>


    {/* Visibility Card */}
    <div className="col-6 d-flex justify-content-center">
      <div className="card weather-detail-card">
        <div className="card-body weather-card-body">
          <p className="card-title"><img src={eye} alt='eye' style={{width:'20px'}}/>Visibility</p>
          <div className="card-content">
            <p className='value'>{(visibility / 1609.34).toFixed(2)} mi</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

  )
}

export default Weather;
