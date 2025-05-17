import useGlobalStore from '@/store/globalStore';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { apiGetInfoUser, apiGetToken } from './api';
import { ACCESS_TOKEN, AUTHCODE, REFRESH_TOKEN } from '@/utils/constants';
import { useNavigate } from 'react-router-dom';

function Auth(props: { children: React.ReactNode }) {

    const { children } = props;
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const updateUserInfoData = useGlobalStore((state) => state.setUserInfo);
    const checkRedirect = useCallback(() => {
        const localParams = new URL(window.location.href);
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

        if (localParams.searchParams.get('authCode') && accessToken) {
            navigate('/home');
        }
    }, [navigate]);

    const callAPI = useCallback(async (callback?: () => void) => {
        const responseInfo = await apiGetInfoUser("");
        updateUserInfoData(responseInfo);
        checkRedirect();
        if (callback) callback();
    }, [updateUserInfoData, checkRedirect]);

    const getToken = useCallback(async (code: string, callback?: () => void) => {
        // Truyền authCode trực tiếp chứ không lấy lại từ localStorage
        const res = await apiGetToken('token', { authCode: code });

        if (!res) return;

        localStorage.setItem(AUTHCODE, res.data.accessToken);
        localStorage.setItem(ACCESS_TOKEN, `Bearer ${res.data.accessToken}`);
        localStorage.setItem(REFRESH_TOKEN, res.data.refreshToken);

        await callAPI(callback);
    }, [callAPI]);

    useEffect(() => {
        const localParams = new URL(window.location.href);
        console.log('localParams', localParams);
        const isLogin = () => {
            const accessToken = localStorage.getItem(ACCESS_TOKEN);

            if (!accessToken) {
                // window.location.href = '/login';
                return;
            }
            setIsAuthenticated(true);
        };

        const token = localStorage.getItem(ACCESS_TOKEN);

        if (localParams.searchParams.get('authCode') && !token) {
            getToken(localParams.searchParams.get('authCode') || '', isLogin);
        } else {
            callAPI(isLogin);
        }
    }, [getToken, callAPI]);

    return (
        <>{isAuthenticated && children}</>
    );
}
export default memo(Auth);
