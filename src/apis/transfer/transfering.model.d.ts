export {};
declare global {
  namespace API {
    type GetTransferStatusRequestParams = {
      token?: string;
      source: string;
      target: string;
      amount: number;
    }
  }
}