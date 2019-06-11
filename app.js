const LocationService = require("./services/LocationService");
const WeatherService = require("../weather_api/weather");
const arguments = require('yargs').options({
    address: {
        alias: 'addr',
        desc: 'Address of the city/country'
    }
}).argv;

// LocationService.getAddress(arguments.address).then((oResponse) => {
//     let oAddress = oResponse.shift();
//     if (oAddress){
//         WeatherService.getWeather(oAddress.lat, oAddress.lon).then( (sWeather) => {
//             if (sWeather){
//                 console.log(`El Clima de ${oAddress.name} es de ${sWeather}`)
//             }else{
//                 console.log(`No se encontró clima para ${oAddress.name}`)
//             }
//         })
//     }else{
//         console.log(`No se encontró la dirección ${arguments.address}`)
//     }
// }).catch((error) => {
//     console.log(error)
// })

//METODO CON AWAIT

const getWeatherByLatLong = async () => {
    let aAddress = await LocationService.getAddress(arguments.address);
    let oAddress = aAddress.shift();
    if (oAddress) {
        let sWeather = await WeatherService.getWeather(oAddress.lat, oAddress.lon);
        if (sWeather) {
            return `El Clima de ${oAddress.name} es de ${sWeather}`;
        }
    } else {
        console.log(`No se encontró la dirección ${arguments.address}`)
    }
};

getWeatherByLatLong().then((sResponse) => {
    console.log(sResponse);
}).catch((e) => {
    console.log(e);
})

// WeatherService.getWeather(40.50000, 1.1111).then( (sWeather) => {
//     console.log(sWeather);
// }).catch( (e) => {
//     console.log(e);
// })


// const sEncodedUrl = encodeURI(arguments.address);
// console.log(sEncodedUrl);
//9526099848044eeab683f2b7b41e4070
// console.log(arguments.address)