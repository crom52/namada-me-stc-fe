import { ERequestMethod } from '@/enums/common.enum';
import { request } from '@/services/request.service';

export const transferApis = {
  transfer: (params: API.GetTransferStatusRequestParams) => {
    const requestParams = {
      ...params,
      token: params.token ?? 'naan'
    };
    return request<any>(
      {
        url: '/stc/namada/shielded-transfer',
        params: requestParams,
        method: ERequestMethod.GET,
      },
      {
        isStcApi: true
      }
    );
  },
};
