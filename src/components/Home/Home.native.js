import React from 'react';

const HomeNative = () => {
  return (
    <>
      <header id="header" className="">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                <div className="menu-social-icons">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-behance"></i></a>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
                <a className="btns" href="tel:+953 012 3654 896">+953 012 3654 896</a>
                <a className="btns" href="mailto:support@colorlib.com">support@colorlib.com</a>
                <a className="icons" href="tel:+953 012 3654 896">
                  <span className="lnr lnr-phone-handset"></span>
                </a>
                <a className="icons" href="mailto:support@colorlib.com">
                  <span className="lnr lnr-envelope"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <a href="index.html">
              <img
                src="https://img.freepik.com/free-vector/bakery-logo-template_441059-121.jpg?size=338&ext=jpg"
                alt=""
                title=""
                height="60"
              />
            </a>
            <nav id="nav-menu-container">
              <ul className="nav-menu sf-js-enabled sf-arrows">
                <li className="menu-active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="team.html">Team</a></li>
                <li className="menu-has-children"><a href="" className="sf-with-ul">Blog</a>
                  <ul>
                    <li><a href="blog-home.html">Blog Home</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                    <li className="menu-has-children"><a href="" className="sf-with-ul">Level 2</a>
                      <ul>
                        <li><a href="#">Item One</a></li>
                        <li><a href="#">Item Two</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="elements.html">Elements</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
              <a href="#" className="primary-btn squire text-uppercase mt-10">Check Our Menu</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeNative;
