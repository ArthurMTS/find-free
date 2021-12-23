import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './features/Home';

import reportWebVitals from './reportWebVitals';

import './_assets/css/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
