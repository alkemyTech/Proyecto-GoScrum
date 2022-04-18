import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"

import './index.css';
import { store } from "./store/store"
import { App } from './App';

render(
  <React.StrictMode>
    <BrowserRouter basename='goscrum/'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

