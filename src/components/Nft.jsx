import nft_img from '../assets/nft.jpeg';

const Nft = () => {
    return (
        <>
            <div className="container-fluid nft-container py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1 mt-5 mt-md-0 text-center">
                            <img src={nft_img} alt="" className='img-fluid'/>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center">
                            <div className="d-flex justify-content-start align-items-center">
                                <h2>NFT's</h2>
                            </div>
                            <p>Ahora también podes comprar y vender en nuestra nueva sección de NFT's, encontrá las mejores colecciones del mercado. Te enviaremos a tu correo electronico todas las nuevas colecciones que entran por semana</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nft;