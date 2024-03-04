export {};

declare global {
  type Pagination = {
    page: number;
    pageSize: number;
  };

  type OffsetPage = {
    num: number;
    offset: number;
  };
}
