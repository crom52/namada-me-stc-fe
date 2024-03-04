export {};

declare global {
  type ApiResponse<T> = {
    jsonrpc: string;
    id: number;
    result: T;
  }
  type WarperResponse<T> = {
    message: string;
    code: string;
    data: T;
  }
}
