import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import authReducer from './component/state/index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { auth: authReducer }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <App />
  </Provider>

);