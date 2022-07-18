import Coin from "./Coin";

const CoinsList = ({coins}) => {
    return (
        <>
            <div className="d-flex flex-column flex-lg-row justify-content-lg-around mt-5">
                {
                    coins.map((coin) => {
                        return(
                            <Coin 
                                currency={coin.symbol}
                                price={coin.current_price}
                                image={coin.image}
                                price_change_24hs={coin.price_change_percentage_24h}
                                key={coin.id}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};

export default CoinsList;
