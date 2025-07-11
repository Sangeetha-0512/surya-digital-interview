import React,{useState,useEffect} from "react";
import axios from "axios";
function Forecast() {
    const [city, setcity] = useState("");
    const [subcity, setsubcity] = useState([]);
    const finalData = [];
    const forecastapi="https://raw.githubusercontent.com/Surya-Digital-Interviews/weather-api-public/main/get-forecast.txt";
    useEffect(() => {
    if (forecastapi!=0) {
      fetchWeatherData();
    }
  }, []);
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get( forecastapi);
      const resp = response.data;
     
      setcity(resp);
      finalData.push(resp);
      setcity(finalData);
       console.log("forecast",resp);
      const citydata = resp.map((data) => {   
        return `${data.place} ,${data.temperature}`;
      });
      setsubcity(citydata);
     
    }catch(err){
      console.log();
    }
  };
 
  return (
    <>
      <div>
        {((data, index) => {  
          return ( 
            <div key={index}>
              <h2>     
                  {/* <div >  
                    <div class="p-2">
                         <img
                        src={city.day.condition.icon}  
                      />
                        {city.date.time}</div>
                    <div class="p-2">
                      <img
                        src={city.day.condition.icon}  
                      />
                      {data.day.condition.temperature}
                    </div> 
                  </div> */}
               
              </h2>
            </div>
          );
        })}
         
            
            <div className="container">
                 {city}
                </div> 
      </div>
    </>
  );
}

export default Forecast;


