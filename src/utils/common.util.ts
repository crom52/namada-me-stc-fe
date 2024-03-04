/** sleep for n milliseconds */
export const sleep = async (millisecond: number = 0) => {
  return new Promise((resolve: (value: unknown) => void) => {
    setTimeout(() => {
      resolve(null);
    }, millisecond);
  });
};

export function pageToOffset(pageInfo: Partial<Pagination>): OffsetPage {
  const num = pageInfo?.pageSize || 10;
  let offset = 0;
  if (pageInfo.page && pageInfo.page !== 1) {
    offset = pageInfo.page * num - 1;
  }
  return { offset, num };
}