import type { AxiosResponse } from 'axios';

import baseApi from '@/utils/baseApi';

// GET
export const apiGetInfoUser = (url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        baseApi
            .get(url)
            .then((res: AxiosResponse) => resolve(res?.data))
            .catch((err: Error) => reject(err));
    });
};
// GET
export const apiGetToken = (url: string, params?: Record<string, any>): Promise<any> => {
    return new Promise((resolve, reject) => {
        baseApi
            .get(url, { params })
            .then((res: AxiosResponse) => resolve(res?.data))
            .catch((err: Error) => reject(err));
    });
};
