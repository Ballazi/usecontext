import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RootContextProvider from './components/context/RootContext';

ReactDOM.render(
  <RootContextProvider>
    <App />
  </RootContextProvider>,
  document.getElementById('root')
);
