  
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { useState} from "react";

function App() {

  var objToday = new Date(),
	weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayOfWeek = weekday[objToday.getDay()],
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate()  : objToday.getDate() ,
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	curMonth = months[objToday.getMonth()];
  var today =  dayOfWeek + ", " + dayOfMonth + " " + curMonth;


  const [location,setLocation]=useState("")
  const [locationData,setLocationData]=useState('')
  const [error,setError]=useState("Enter a Location")
  

  async function fetchData() {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=dd80f56a143b4d7388275739213107&q=${location}`
    );
    const data = await res.json();
    try{
    console.log(data.location.name);
    setLocationData(data);
    setError("");
    }
    catch(error){
      console.log(data.error.message);
      setLocationData("");
      setError(data.error.message);
    }

  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 location-form">
            <input type="text" placeholder="Location" value={location} onChange={(e)=>{setLocation(e.target.value)}}></input>
            <button className="btn btn-outline-info" onClick={()=>{fetchData();}}>Search</button>
          </div>

          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {(locationData.location)?
              <div>
                  <div className="location-name">
                    <span className="icon">
                    <i className="fa fa-map-marker"></i>
                    </span>
                    <span className="title">
                      {locationData.location.name}
                    </span>   
                  </div>

                  <img src={locationData.current.condition.icon} alt="" />
                  <div className="temp-c">
                    <span className="title">{locationData.current.temp_c}</span>
                    <span className="degree">°</span>
                  </div>
                  <div className="condition">
                    {locationData.current.condition.text}
                  </div>
                  
                  <div className="date">
                    {today}
                  </div>

                  <div className="line">

                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="wind">
                            <div className="icon">
                                <img src="wind-solid.svg" alt="" />
                            </div>
                            <div className="value">
                                {locationData.current.wind_kph}km/h
                            </div>
                            <div className="text">
                                Wind
                            </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="humidity">
                          <div className="icon">
                                <img src="tint-solid.svg" alt="" />
                            </div>
                            <div className="value">
                                {locationData.current.humidity}%
                            </div>
                            <div className="text">
                                Humidity
                            </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="precipitation">
                            <div className="icon">
                                <img src="cloud-showers-heavy-solid.svg" alt="" />
                            </div>
                            <div className="value">
                                {locationData.current.precip_mm}mm
                            </div>
                            <div className="text">
                                Precipitation
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div> :
              <>
                  {error}
              </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
