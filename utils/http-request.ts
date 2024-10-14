import type { IResponse } from '~/types/response';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useToast } from 'vue-toastification';

import { config } from '~~/utils/config';

let stopNotify = false;

const request = axios.create({
    baseURL: config.APP_API_URL,
    headers: {
        // channel: config.CHANNEL,
    },
});
request.defaults.timeout = config.APP_TIMEOUT as any;

const toast = useToast();
const router = useRouter();
const removeCookies = () => {
    Object.keys(Cookies.get()).forEach(function (cookieName) {
        const neededAttributes = {};
        Cookies.remove(cookieName, neededAttributes);
    });
};
//xu ly data truoc khi gui server
request.interceptors.request.use(
    async (config: any) => {
        const url: string = config.url || '';

        //k can kiem tra token neu la dang nhap
        if (url.indexOf('/dang-nhap') >= 0) {
            return config;
        }

        config.headers.Authorization = Cookies.get(TOKEN) != (null || undefined) ? `Bearer ${Cookies.get(TOKEN)}` : '';

        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

request.interceptors.response.use(
    (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        }

        return Promise.reject(response);
    },
    (error) => {
        if (error.code === 'ECONNABORTED') {
            toast.error('Lỗi kết nối đến server');
        } else if (error.response) {
            if (error.response.status === 403) {
                if (!stopNotify) toast.warning('Phiên đăng nhập hết hạn');
                stopNotify = true;
                void removeCookies();
                setTimeout(() => {
                    navigateTo('/dang-nhap');
                }, 1000);
            } else if (error.response.status > 400 && error.response.status < 500) {
                return error.response.data;
            } else {
                toast.error('Lỗi kết nối đến server');
            }
        } else {
            toast.error('Lỗi kết nối đến server');
        }

        return Promise.reject(error);
    },
);

export const get = async <T = any>(path: string, req: any = { params: {} }) => {
    const response = await request.get<T, IResponse<T>>(path, req);
    return response;
};

export const post = async <T = any>(path: string, req: any = {}) => {
    const response = await request.post<T, IResponse<T>>(path, req);
    return response;
};

export const put = async <T = any>(path: string, req?: any) => {
    const response = await request.put<T, IResponse<T>>(path, req);
    return response;
};

export const patch = async <T = any>(path: string, req?: any) => {
    const response = await request.patch<T, IResponse<T>>(path, req);
    return response;
};

export const del = async <T = any>(path: string, req?: any) => {
    const response = await request.delete<T, IResponse<T>>(path, req);
    return response;
};

export default request;
