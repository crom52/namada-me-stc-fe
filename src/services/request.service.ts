import axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { uniqueSlash } from '@/utils/url.util';
import { ECacheKey, EResponseCode } from '@/enums/common.enum';
import { BrowserStorage } from '@/utils/browser-storage.util';
import { UNHANDLED_SERVER_ERROR } from '@/constants/common.constant';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const service = axios.create({
  timeout: 10000, // 10s
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = BrowserStorage.get(ECacheKey.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<{ message: string[] }>) => {
    const status = error?.response?.status ?? EResponseCode.UNKNOWN;
    if (status === EResponseCode.UNAUTHORIZED) {
      BrowserStorage.clear();
      window.location.reload();
    }

    return Promise.reject(error);
  },
);

/**
 * @param config axios config
 * @param options axios option
 * @returns {string} return url + object params in string
 */
export const request = async <T>(
  config: RequestConfig,
  options: RequestOptions = {},
): Promise<T | null> => {
  // const userStore = useUserStore();
  // convert request params with 'include' queries
  if (config?.params?.includes && config.params.includes.length > 0) {
    config.params.includes = config.params.includes.toString(); // convert [a,b] to "a,b"
  }

  const axiosConfig: AxiosRequestConfig = { ...config, data: config.body }; // re-assign config 'body' to axios 'data'

  const {
    id,
    errorMsg,
    // permitRoles,
    successMsg,
    isShowLoading,
    loadingMessage = 'Đang thực hiện...',
    getDataDirectly = true,
    isAuth = false,
  } = options;

  // current role has no accessible to execute api request
  // if (permitRoles && !permitRoles.includes('TODO')) {
  //   return null as T;
  // }

  // show loading
  // isShowLoading && $message.loading({ content: loadingMessage, duration: 0, key: id });

  // set application loading
  // addLoadingItem(id);

  // sent request
  try {
    // const targetURL = isAuth ? AUTH_PATH_PREFIX : SIGNATURE_PATH_PREFIX;
    axiosConfig.url = uniqueSlash(`${VITE_BASE_URL + config.url}`);
    const response = await service.request(axiosConfig);

    // show success message
    if (successMsg && isShowLoading) {
      // $message.success({ content: successMsg, key: id });
    }

    // get axiosReponse.data directly or use raw axios response
    return getDataDirectly ? response.data : response;
  }
  catch (error: any) {
    // show injected error message in config
    if (errorMsg) {
      // $message.error({ content: errorMsg, key: id });
    }

    // show server error message
    const serverErrorMsg: string = error?.response?.data?.message?.toString() ?? UNHANDLED_SERVER_ERROR;
    // $message.error({ content: serverErrorMsg, key: id });

    return null as T;
  }
  finally {
    // if (!successMsg && !errorMsg) {
    //   $message.destroy(id);
    // }
    // removeLoadingItem(id);
  }
};
