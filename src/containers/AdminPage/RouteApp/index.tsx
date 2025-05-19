import React from 'react';
import Auth from '@/containers/Auth';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../AdminPage';
import NotFoundPage from '@/containers/NotFoundPage';
import Products from '@/containers/Products';


function RouteApp() {
    return (
        <>
            <Auth>
                <Routes>
                    <Route path="/" element={<AdminPage />}>
                        {/* Định nghĩa các route con của Admin */}
                        <Route index element={<h2>Trang chủ Admin</h2>} />
                        <Route path="ds" element={<Products />} />
                        <Route path="users" element={<h2>User Management</h2>} />
                        <Route path="settings" element={<h2>Settings</h2>} />
                    </Route>

                    {/* Trang 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Auth>
        </>
    )
}

export default RouteApp;
