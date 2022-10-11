import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* REACT ROUTER */
import { BrowserRouter } from 'react-router-dom';

/* REACT REDUX + REDUX TOOLKIT */
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './reducers/navbar';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

