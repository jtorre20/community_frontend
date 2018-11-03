import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  <BrowserRouter>
  
      < App />
   
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();