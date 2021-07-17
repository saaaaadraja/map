import React,{useEffect,useState} from 'react'

function Map() {
const [lat,setLat]=useState(0);
const [long,setLong]=useState(0);
    useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    })
    },[])
    return (
        <div>
           <p>Latitude:{lat}</p>
           <p>Longitude:{long}</p>
        </div>
    )
}

export default Map
