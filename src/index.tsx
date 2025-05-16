import './assets/css/index.css';
import "./styles/global.scss"

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Providers from './utils/provider';
import { ConfigProvider } from 'antd';
import { customTheme } from './utils/theme';
import { ToastContainer } from 'react-toastify';
import AdminPage from './containers/AdminPage/AdminPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Providers >
            <Router>
                <ConfigProvider theme={customTheme}>
                    <AdminPage />
                </ConfigProvider>
            </Router>
            <ToastContainer />
        </Providers>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
