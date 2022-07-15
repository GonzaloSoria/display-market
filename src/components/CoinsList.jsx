import Coin from "./Coin";

const CoinsList = ({coins}) => {
    return (
        <>
            <div className="d-flex flex-column flex-lg-row justify-content-lg-around mt-5">
                {
                    coins.map((coin) => {
                        return(
                            <Coin 
                                currency={coin.currency}
                                price={coin.price}
                                image={coin.logo_url}
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
