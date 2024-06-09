import axios from 'axios';
import { makeStore } from  '../lib/store';



axios.interceptors.request.use(
    function (config: any) {

        config.headers.Authorization = `Bearer ${
            makeStore?.getState()?.Login.loginInfos.token
        }`;
        config.baseURL = process.env.REACT_APP_GATEWAY_API_KEY;
        config.decompress = true;
        config.data = {
            ...config.data,
            folder: makeStore?.getState()?.Login?.loginInfos.currentFolder?.code,
            s_t:
            makeStore?.getState()?.Login?.loginInfos.currentFolder
                    ?.softwareType || 2,
            s_c: makeStore?.getState()?.Login?.loginInfos?.connectionSessionSyncId,
            s_v: `${process.env.REACT_APP_VERSION}`,
        };
        config.cancelToken =
        makeStore?.getState()?.Login.loginInfos.token == null &&
            config.url !==
                process.env.REACT_APP_GATEWAY_API_KEY + '/auth/login';
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => {
        if (response.status === 401) {

        }
        return response;
    },
    (error) => {
        if (error.status === 503) {

        } else {
            if (!JSON.parse(error.config.data).disableNotif) {
         
            }
        }
        if (error.response && error.response.data) {
            return error.response.data;
        }
        return error.message;
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
};
