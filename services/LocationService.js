const axios = require('axios');


// const sEncodedUrl = encodeURI(arguments.address);

const getAddress = async (sAddress) => {
    const sEncodedUrl = encodeURI(sAddress);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${sEncodedUrl}`,
        headers: {"X-RapidAPI-Key": '8a094d3153mshcc2f36010359a41p10bc4djsn5b42c60583e7'}
    });
    const oResponse = await instance.get();

    if (oResponse.data.Results.length === 0) {
        throw new Error(`No results on the following address ${sEncodedUrl}`);
    }
    return oResponse.data.Results;
}


module.exports = {
    getAddress
}