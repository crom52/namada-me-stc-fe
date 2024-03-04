export {};

declare global {
  namespace API {
    type SearchValidatorQueryParams = {
      height?: string;
      page?: number;
      pageSize?: number;
    };

    type SearchValidatorResponse = ApiResponse<{
      block_height: string;
      validators: API.ValidatorItem[];
      count: string;
      total: string;
    }>;

    type SearchValidatorQueryParams2 = {
      height: number;
      offset: number;
      num: number;
    };

    type SearchValidatorResponse2 = {
      block_height: string;
      validators: API.ValidatorItem[];
      count: string;
      total: string;
    };
  }
}
