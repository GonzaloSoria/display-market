const PARAM = '%2C';
const POPULAR_COINS = ['bitcoin', PARAM, 'ethereum', PARAM, 'tether', PARAM, 'binancecoin'];

export const get_data = async (setState) => {
    const api = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&ids=${POPULAR_COINS}&order=market_cap_desc`);
    try {
        const data_parsed = await api.json();
        setState(data_parsed);
        console.log(data_parsed);
    } catch (error) {
        console.log(error);
    }
};
