const axios = require('axios')
const fs = require('fs-extra')
const GEOJSON = require('geojson');
// const { inherits } = require('util');
// const fetchPattern =async (rt) => {
//     const pattern = await axios.get(`http://www.ctabustracker.com/bustime/api/v2/getpatterns?key=4mV3yityLKdShxUcZD4duyHnZ&rt=${rt}&tmres=s&format=json`)
//     const data = pattern.data['bustime-response'].ptr
//     if(!data) return
//     const obj = {
//         coordinates: []
//     }
//     data.forEach(ptr => {
//         obj.coordinates.push([...ptr.pt.map(pt => [pt.lon, pt.lat])])
//     })
//     return obj
// }
// const routes = []
// const rts = fs.readJSONSync('./data/route.json').data

// const setRoutes = async () => {
//     await Promise.all(rts.map(async rt => {
//         const result = await fetchPattern(rt.rt)
//         if(result)
//             routes.push(result)
//     }))
//     fs.writeJSONSync('./data/routes.json', GEOJSON.parse(routes, {MultiLineString: "coordinates"}))
// }
// setRoutes()
const express = require('express')
const cors = require('cors')
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.use(cors())
app.use(express.static('data'))
const routes = fs.readJsonSync('./data/route.json').data
console.log(routes)
const fetchArray = []
let temp = []
routes.forEach((item,index) => {
    temp.push(item.rt)
    if((index+1)%10 ===0 || index === routes.length){
        fetchArray.push(temp.join(","))
        temp = []
    }
})

const listCurrentVehicle = {

}
const init =async () => {
    const listVehicle = []
    await Promise.all(fetchArray.map(async item => {
        const result = (await axios({
            url: `http://www.ctabustracker.com/bustime/api/v2/getvehicles?key=4mV3yityLKdShxUcZD4duyHnZ&rt=${item}&tmres=s&format=json`
        })).data['bustime-response'].vehicle
        if(result)
        listVehicle.push(...result.map(vehicle => {
            listCurrentVehicle[vehicle.vid] = [vehicle.lon, vehicle.lat].join(",")
           return {
            id: vehicle.vid,
            coordinates: [vehicle.lon, vehicle.lat]
           }
        }))
    }))
    io.emit('init', listVehicle)
}

io.on('connection',async (socket) => {
   await init()
   setInterval(() => {

   })
});



http.listen(8888, () => {
  console.log('listening on *:8888');
});