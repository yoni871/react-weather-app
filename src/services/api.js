const apiKey = 'bb3c3d693f970cbab806d73f420843cf';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

//async allows the rest of the pragram to keep running by
//returning a promise(which is something that will eventually
//return a result) but it might take some time.

//await tells the program for that promise to finish without
//stopping everything else
export const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`${URL}?q=${city}&appid=${apiKey}&units=imperial`);
        if(!response.ok) {
            throw new Error('Failed to fetch weather data!');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}




