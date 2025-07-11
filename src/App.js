
import React, { useState, useEffect, Children } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap";
import axios from "axios";
import Forecast from "./contents/Forecast.js";
import backgroundimg from './assert/Background  (1).png';

function App() {
  const [city, setcity] = useState("");
  const [subcity, setsubcity] = useState([]);
  const [forecastWeather, setforecast] = useState();
  const [location, setlocation] = useState();
 
  const weatherapi="https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-current-weather.txt";
  useEffect(() => {
    if (weatherapi!=0) {
      fetchWeatherData();
    }
   
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get( weatherapi);
      const resp = response.data;
      console.log("data1",resp);
     
      setcity(resp);
      const citydata = resp.map((data) => {   
        return `${data.place} ,${data.temperature}`;
      });
      setsubcity(citydata);
     
    }catch(err){
      console.log();
    }
  };
 
  return (
    <div>
   
      <img src={backgroundimg}class="img-fluid bg" alt="..."></img>
       <div className="container mb-5">
      {subcity &&
        subcity.map((data,index) => { 
          return (
            <div key={index}
            >
              {data.place}
            </div>
          );
         })}
        <h6 class="text">{city}</h6>


        <Forecast/>
        
      
        
     </div>
    </div>
  );
 }
export default App;

