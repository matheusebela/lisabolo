import React from 'react';
import {Link} from 'react-router-dom';

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
                <Link title="Home" to="/">Página Inicial</Link>
                <Link title="Fale conosco" to="/">Quem somos</Link>
                <Link title="Lista de produtos" to="/">Lista de Produtos</Link>
                <Link title="Monte sua festa" to="/monte-sua-festa">Monte sua festa</Link>
                <Link title="Fale conosco" to="/">Fale Conosco</Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNative;
