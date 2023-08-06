import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import {AuthContextProvider} from './AuthContextProvider'
import {ConfigContextProvider } from './ConfigContext';
import { ConfigContext } from './ConfigContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
    {/* <ConfigContextProvider> */}
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
        {/* </ConfigContextProvider> */}
    </HashRouter>
  
);


