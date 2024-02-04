import { ERequestMethod } from '@/enums/common.enum';
import { request } from '@/services/request.service';

export const validatorApis = {
  search: (params?: any) => {
    return request<any>(
      {
        url: '/validators',
        method: ERequestMethod.GET,
        params,
      },
    );
  },
  search2: (params?: any) => {
    return request<any>(
      {
        url: '/block',
        method: ERequestMethod.GET,
        params,
      },
    );
  },
};
