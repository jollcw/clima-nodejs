const axios = require("axios");

const getClima = async (lat, lng) => {
  // api key openweathermap
  // f369635965b00ad16ced5da4da4b9f3b
  // result : { direccion: 'Barcelona, Spain',
  // lat: 41.3850639,
  // lng: 2.1734035 }
  // http://api.openweathermap.org/data/2.5/weather?lat=41.3850639&lon=2.1734035&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b

  const ej = {
    coord: { lon: 2.17, lat: 41.39 },
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
    ],
    base: "stations",
    main: {
      temp: 11.5,
      pressure: 1030,
      humidity: 76,
      temp_min: 11,
      temp_max: 12
    },
    visibility: 10000,
    wind: { speed: 3.6, deg: 330 },
    clouds: { all: 75 },
    dt: 1545822000,
    sys: {
      type: 1,
      id: 6398,
      message: 0.0214,
      country: "ES",
      sunrise: 1545808572,
      sunset: 1545841682
    },
    id: 6544100,
    name: "Eixample",
    cod: 200
  };

  let resp = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`
  );

  return resp.data.main;
};

module.exports = {
  getClima
};
