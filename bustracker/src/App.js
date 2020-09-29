import React from 'react';
import Map from './Map'
import io from 'socket.io-client';
 import layer from './layers'
const socket = io('http://localhost:8888');
const obj = {

}
socket.on("init", list => {
  list.forEach(item => {
    console.log(item)
    const marker = new window.google.maps.Marker({
      position: { lat: parseFloat(item.coordinates[1]), lng: parseFloat(item.coordinates[0]) },
      icon:{
        url: "http://localhost:3000/bus.png",
        size:10
      },
      
      map:  window.map,
    });
    obj[item.id] = marker
  })
})

socket.on('change', listChange => {
  listChange.forEach(item => {
    if(obj[item.id]){
      obj[item.id].setPosition({
        lat: parseInt(item.coordinates[1]),
        lng: parseInt(item.coordinates[0])
      })
      return
    }
    const marker = new window.google.maps.Marker({
      position: { lat: parseFloat(item.coordinates[1]), lng: parseFloat(item.coordinates[0]) },
      icon:{
        url: "/bus.png",
        size:10
      },
      map:  window.map,
    });
    obj[item.id] = marker
  })
})

function App() {
  return  <Map
  id="myMap"
  options={{
    center: { lat: 42.05515, lng: -87.76637 },
    zoom: 8
  }}
  onMapLoad={map => {
    window.map = map
    layer(map)
    var marker = new window.google.maps.Marker({
      position: { lat: 41.0082, lng: 28.9784 },
      map: map,
      title: 'Hello Istanbul!'
    });
  }}
/>
}

export default App;
