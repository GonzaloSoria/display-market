import Formulario from './Formulario';

const Hero = () => {
    return (
        <>
            <section className="container-fluid main-bg py-5">
                <div className="container py-0 py-md-3 mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-8 d-flex flex-column justify-content-center">
                            <h2>Encontrá las mejores <br className='d-none d-xl-block'/>Cryptos en un solo lugar</h2>
                            <p>Contactanos para recibir las últimas noticas acerca del ecosistema</p>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Formulario />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;