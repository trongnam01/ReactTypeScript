import './assets/css/index.css';
import "./styles/global.scss"

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Providers from './utils/provider';
import { ConfigProvider } from 'antd';
import { customTheme } from './utils/theme';
import { ToastContainer } from 'react-toastify';
import AdminPage from './containers/AdminPage/AdminPage';
import Auth from './containers/Auth';
import { PUBLIC_PATH } from './utils/constants';
import NotFoundPage from './containers/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <Providers >
        <BrowserRouter basename={PUBLIC_PATH}
        >
            <ConfigProvider theme={customTheme}>
                <Routes>
                    <Route path="/" element={<Auth><AdminPage /></Auth>}>
                        {/* Định nghĩa các route con của Admin */}
                        <Route index element={<h2>Trang chủ Admin</h2>} />
                        <Route path="dashboard" element={<div className="bg-red-500 flex flex-col h-full">Nội dung</div>} />
                        <Route path="users" element={<h2>User Management</h2>} />
                        <Route path="settings" element={<h2>Settings</h2>} />
                    </Route>

                    {/* Trang 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>


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
