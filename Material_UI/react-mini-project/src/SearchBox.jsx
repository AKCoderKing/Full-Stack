import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox ({updateInfo}) {
    let [city,setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "14a1a9a36d9fc5e84cc87403f74816f7";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json(); 
            console.log(jsonResponse);
            let result = {
            city : city,
            temp: jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_Like,
            weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    };


    let handleChange =(event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) =>
    {
        try {
            event.preventDefault(); // ye joh h screen par rhe city isliye use hua h
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err)
        {
            setError(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="city Name" variant="outlined" required value={city} onChange = {handleChange}/>

                <br></br>
                <br></br>

                <Button variant="contained" type='submit'> search</Button>
                 {error && <p>No such place exist!</p>}
            </form>


        </div>
    )
}

