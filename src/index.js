import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './styles/bakery-styles.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import ElementsNative from './components/Elements/Elements.native';

const routing = (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/elements" element={<ElementsNative />} />
      </Routes>
    </Router>
  </>
  )

ReactDOM.render(routing, document.getElementById('root'));
reportWebVitals();
