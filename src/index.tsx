import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './features/Home';
import { Game } from './features/Game';

import reportWebVitals from './reportWebVitals';

import './_assets/css/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          index 
          element={<Home />}
        />
        <Route
          path='game/:id'
          element={<Game />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
