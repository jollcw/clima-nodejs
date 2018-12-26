const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de una ciudad para obtener el clima",
    demand: true
  }
}).argv;

// console.log('argv.direccion :', argv.direccion);

let getInfo = async direccion => {
  try {
    let lugarLatLng = await lugar.getLugarLatLng(direccion);
    let climaLugar = await clima.getClima(lugarLatLng.lat, lugarLatLng.lng);
    return `La temperatura de ${direccion} es: temp -> ${
      climaLugar.temp
    } grados C y la humedad -> ${climaLugar.humidity}%`;
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(info => {
    console.log(info);
  })
  .catch(err => {
    console.log(err);
  });

// lugar.getLugarLatLng(argv.direccion)
//     .then((result) => {
//         console.log('result :', result);
//     }).catch((err) => {
//         console.log('err :', err);
//     });

// clima.getClima(41.3850639, 2.173403)
// // clima.getClima(lat, lng)
//     .then((result) => {
//         console.log('result :', result);
//     }).catch((err) => {
//         console.log('err :', err);
//     });
