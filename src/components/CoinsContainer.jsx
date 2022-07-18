import { useEffect, useState } from "react";
import { get_data } from "../helpers/get_data";
import PuffLoader from "react-spinners/PuffLoader";
import CoinsList from "./CoinsList";

const CoinsContainer = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get_data(setCoins);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    return (
        <>
            <section className="container-fluid py-5 mt-0 mt-md-5 coins-container">
                <div className="container">
                    <div className="d-flex justify-content-start justify-content-md-center align-items-center">
                        <h2 className="text-start text-md-center">Las preferidas de <br className="d-block d-md-none"/>nuestros usuarios</h2>
                    </div>
                    <p className="text-start text-md-center">Nuestros usuarios prefieren <br className="d-block d-md-none"/>operar con estas Cryptos</p>
                    {
                        loading ? 
                        <PuffLoader color={'#D3AB66'} loading={loading} cssOverride={{margin: '0 auto'}} size={80}/> 
                        : 
                        <CoinsList coins={coins}/>
                    }
                </div>
            </section>
        </>
    );
};

export default CoinsContainer;