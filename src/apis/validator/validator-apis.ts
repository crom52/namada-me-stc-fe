import { ERequestMethod } from '@/enums/common.enum';
import { request } from '@/services/request.service';

export const validatorApis = {
  search: (params: API.SearchValidatorQueryParams) => {
    const mappedParams = {
      height: params.height,
      num: params.pageSize ?? 10,
      offset: params.page ?? 1
    };
    return request<WarperResponse<API.SearchValidatorResponse>>(
      {
        url: '/stc/namada-me/validators',
        method: ERequestMethod.GET,
        params: mappedParams,
      },
    );
  },
};
