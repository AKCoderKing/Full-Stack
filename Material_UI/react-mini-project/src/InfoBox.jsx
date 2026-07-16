import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import GrainIcon from '@mui/icons-material/Grain';
import "./InfoBox.css";





export default function InfoBox({ info }){
    const INIT_URL = "https://images.unsplash.com/photo-1593076436092-6f54229aca1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className='cardContainer'>
                
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 ? RAIN_URL 
                        : info.temp > 50 ? HOT_URL 
                        : COLD_URL
                    }
                    title="weather condition"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <GrainIcon/> : (info.temp > 50 ? <SunnyIcon/> : <AcUnitIcon/>)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>humidity = {info.humidity}</p>
                        <p>Min temp = {info.tempMin}&deg;C</p>
                        <p>Max temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}