import type { ERequestMethod } from '@/enums/common.enum';

export {};

declare global {
  type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };

  type OrNull<T> = T | null;

  type OrUndefine<T> = T | undefined;

  type OrNullish<T> = T | undefined | null;

  type RequestConfig = {
    url: string;
    method: ERequestMethod;
    body?: any;
    params?: any;
    timeout?: number;
  }

  type RequestOptions = {
    isTemp?: boolean;
    isStcApi?: boolean;
    id?: string;
    isAuth?: boolean;
    successMsg?: string;
    errorMsg?: string;
    isShowLoading?: boolean;
    loadingMessage?: string;
    getDataDirectly?: boolean;
  }
}
