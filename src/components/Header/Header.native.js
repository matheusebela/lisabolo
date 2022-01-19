import React from 'react';

const HeaderNative = () => {
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
                <li className="menu-active"><a href="index.html">Página Inicial</a></li>
                <li><a href="about.html">Quem somos</a></li>
                <li><a href="menu.html">Lista de Produtos</a></li>
                <li><a href="team.html">Monte sua festa</a></li>
                <li><a href="contact.html">Fale Conosco</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNative;
