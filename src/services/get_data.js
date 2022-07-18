export const get_data = async (setState) => {
    const api = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&ids=bitcoin%2Cethereum%2Cbinancecoin%2Cdai&order=market_cap_desc');
    try {
        const data_parsed = await api.json();
        setState(data_parsed);
    } catch (error) {
        console.log(error);
    }
};
