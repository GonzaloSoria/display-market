const API_KEY = '52231c26044a9c4ef0dc98c0c3ada7b56836b2c5';
const COINS = ['BTC','ETH','BNB','DAI']; //Usar 4 como preferidas para no romper el layout
const SERVER_URL = `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=${COINS}&convert=ARS`;

fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=${COINS}&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1`)
  .then(response => response.json())
  .then(data => console.log(data))

export const get_data = async (setState) => {
    // const api = await fetch(SERVER_URL, {
    //     status: 200,
    //     headers: {
    //         'Acces-Control-Allow-Headers': 'Content-Type',
    //         'Acces-Control-Allow-Origin': 'https://landing-page-challenge-three.vercel.app/',
    //         'Acces-Control-Allow-Methods': 'GET',
    //     }
    // });
    // console.log(api);
    // try {
    //     const data_parsed = await api.json();
    //     setState(data_parsed);
    //     console.log(data_parsed);
    // } catch (error) {
    //     console.log(error);
    // }
};
