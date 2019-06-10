const LocationService = require("./services/LocationService");
const arguments = require('yargs').options({
    address: {
        alias: 'addr',
        desc: 'Address of the city/country'
    }
}).argv;

LocationService.getAddress(arguments.address).then((oResponse) => {
    console.log(oResponse);
}).catch((error) => {
    console.log(error)
})

// const sEncodedUrl = encodeURI(arguments.address);
// console.log(sEncodedUrl);
//9526099848044eeab683f2b7b41e4070
// console.log(arguments.address)