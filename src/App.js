import React, {useEffect, useRef} from 'react';
import './App.css';
import L from "leaflet"
import "./../node_modules/leaflet/dist/leaflet.css"
import {FaAngleRight} from "react-icons/fa"

const accessToken = "pk.eyJ1IjoianVkaXRoY3ludGhpYTEiLCJhIjoiY2t5NXJjeW9kMGpvcDJwczFwbXdhcDBlaCJ9.t1hVDGZjeiyXRMyyJQ4_LA"

function App() {
  const mapRef = useRef()
  useEffect(()=>{
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/1/1/0?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: accessToken
    }).addTo(map);
  },[])
  return (
    
    <div className="App">
      <div  className="input-div">
        <h1 className="IP-Address">IP Address Tracker</h1>
        <div className="search-container">
          <input type="text" placeholder="Search for any IP address or domain" name="search"/>
          <button type="submit"><FaAngleRight /></button>
        </div>

        <div className="display-info">
          <div className="sub">
            <h4>Ip Address</h4>
            <p>192.34.34.2323.23</p>
          </div>
          <div className="sub">   
            <h4>Location</h4>
            <p>Brooklyn, NY 10001</p></div>
          <div className="sub">
            <h4>Time Zone</h4>
            <p>UTC -05:00</p>
          </div>
          <div className="sub">
            <h4>ISP</h4>
            <p>SpaceX Starlink</p>
          </div>
        </div>

      </div>


      <div ref={mapRef} id="map"></div>
    </div>
  );
}

export default App;
