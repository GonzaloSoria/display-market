const Coin = ({currency, price, image}) => {
    // Formatear el precio a moneda argentina
    const price_ars = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price);

    return (
        <>
            <div className="coin-box d-flex justify-content-center align-items-center px-5 my-3">
                <div>
                    <img src={image} alt={currency} />
                </div>
                <div className="ps-5 py-2 data-coin-container">
                    <p className="mb-0 price">{price_ars}</p>
                    <p className="mb-0 currency">{currency}</p>
                </div>
            </div>
            
        </>
    );
};

export default Coin;