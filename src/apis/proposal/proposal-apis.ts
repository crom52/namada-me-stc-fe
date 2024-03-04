import { ERequestMethod } from '@/enums/common.enum';
import { request } from '@/services/request.service';

export const proposalApis = {
  search: () => {
    return request<WarperResponse2<API.SearchProposalResponseValues>>(
      {
        url: '/stc/namada-me/proposals',
        method: ERequestMethod.GET,
      },
    );
  },
};
