const API_KEY = '52231c26044a9c4ef0dc98c0c3ada7b56836b2c5';
const COINS = ['BTC','ETH','BNB','DAI']; //Usar 4 como preferidas para no romper el layout
const SERVER_URL = `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=${COINS}&convert=ARS`;

export const get_data = async (setState) => {
    const api = await fetch(SERVER_URL, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    });
    try {
        const data_parsed = await api.json();
        setState(data_parsed);
    } catch (error) {
        console.log(error);
    }
};
