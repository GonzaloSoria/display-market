import React from 'react';
import Banner from './components/Banner';
import CoinsContainer from './components/CoinsContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Nft from './components/Nft';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <CoinsContainer />
      <Nft />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
