import './assets/css/index.css';
import "./styles/global.scss"

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Providers from './utils/provider';
import { ConfigProvider } from 'antd';
import { customTheme } from './utils/theme';
import { ToastContainer } from 'react-toastify';
import AdminPage from './containers/AdminPage/AdminPage';
import Auth from './containers/Auth';
import { PUBLIC_PATH } from './utils/constants';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <Providers >
        <BrowserRouter basename={process.env.PUBLIC_URL || PUBLIC_PATH}
        >
            <ConfigProvider theme={customTheme}>
                <Auth>
                    <AdminPage />
                </Auth>
            </ConfigProvider>
        </BrowserRouter>
        <ToastContainer />
    </Providers>
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
