import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './styles/bakery-styles.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import ElementsNative from './components/Elements/Elements.native';
import Header from './components/Header';
import Footer from './components/Footer/Footer.container';

const routing = (
  <>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/elements" element={<ElementsNative />} />
      </Routes>
      <Footer />
    </Router>
  </>
  )

ReactDOM.render(routing, document.getElementById('root'));
reportWebVitals();
