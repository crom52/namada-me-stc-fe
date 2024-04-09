import axios from 'axios';
import type {
  AxiosRequestConfig
} from 'axios';
import { uniqueSlash } from '@/utils/url.util';

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_TEMP_URL = import.meta.env.VITE_TEMP_URL;
const VITE_STC_URL = import.meta.env.VITE_STC_URL;

const service = axios.create({
  timeout: 10000,
});

/**
 * @param config axios config
 * @param options axios option
 * @returns {string} return url + object params in string
 */
export const request = async <T>(
  config: RequestConfig,
  options: RequestOptions = {},
): Promise<T | null> => {
  const {
    successMsg,
    isShowLoading,
    getDataDirectly = true,
    isTemp,
    isStcApi
  } = options;

  const axiosConfig: AxiosRequestConfig = {
    ...config,
    data: config.body, // re-assign config 'body' to axios 'data'
  };

  //  TODO: remove this when complete destination api
  if (isTemp) {
    axiosConfig.url = uniqueSlash(`${VITE_TEMP_URL}/${config.url}`);
  }
  else if (isStcApi) {
    axiosConfig.url = uniqueSlash(`${VITE_STC_URL}/${config.url}`);
  }
  else {
    axiosConfig.url = uniqueSlash(`${VITE_BASE_URL}/${config.url}`);
  }

  // sent request
  try {
    // axiosConfig.url = config.url;
    const response = await service.request(axiosConfig);

    // show success message
    if (successMsg && isShowLoading) {
      // $message.success({ content: successMsg, key: id });
    }

    return getDataDirectly ? response.data : response;
  }
  catch (error: any) {
    // show server error message
    // $message.error({ content: serverErrorMsg, key: id });
    return null as T;
  }
  finally {
    // removeLoadingItem(id);
  }
};
