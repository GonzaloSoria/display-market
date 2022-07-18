const Coin = ({currency, price, image, price_change_24hs}) => {
    // Formatear el precio a moneda argentina
    const price_ars = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price);
    const price_ars_changed = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price_change_24hs);

    return (
        <>
            <div className="coin-box d-flex justify-content-start align-items-center px-5 my-3">
                <div>
                    <img src={image} alt={currency} />
                </div>
                <div className="w-70 ps-5 py-2 data-coin-container">
                    <p className="mb-0 price">{price_ars}</p>
                    <p className="mb-0 currency">{currency}</p>
                    <p className={price_change_24hs > 0 ? 'text-green' : 'text-red'}>{price_ars_changed}%</p>
                </div>
            </div>
            
        </>
    );
};

export default Coin;