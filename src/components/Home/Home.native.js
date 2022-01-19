import React from 'react';
import Footer from '../Footer/Footer.container';
import Header from '../Header';

const HomeNative = () => {
  return (
    <>
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row fullscreen d-flex justify-content-center align-items-center" style={{height: '732px'}}>
            <div className="banner-content col-lg-10 col-md-12 justify-content-center">
              <h6 className="text-uppercase">Whenever we bake, bake with our heart</h6>
              <h1>
                Encontro dos doces
              </h1>
              <p className="text-white mx-auto">
                Since Americans in the South began roasting pigs publicly, Barbecues have been a staple of North American living. For many, grilling becomes a routine mealtime activity.
              </p>
              <a href="#" className="primary-btn squire text-uppercase mt-10">Ver lista de produtos</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeNative;
