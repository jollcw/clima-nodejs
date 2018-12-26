const axios = require('axios');

// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM

const getLugarLatLng = async (direccion) => {

    // funcion js para construir una url válida
    let encodedUrl = encodeURI(direccion);

    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=barcelona españa+View,+CA&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    
    if(resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para esta dirección: ${direccion}`)
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    // console.log('location.formatted_address :', location.formatted_address);
    // console.log('location.geometry.location :', location.geometry.location);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }

}

module.exports = {
    getLugarLatLng
}