import type { SelectProps } from 'ant-design-vue';

export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7; // 7 days
export const UNHANDLED_SERVER_ERROR = 'error'; // 7 days
export const NAMADA_CHROME_EXTENSION_ID = 'hnebcbhjpeejiclgbohcijljcnjdofek';

export const VIEW_BY_OPTIONS: SelectProps['options'] = [
  {
    value: 10,
    label: '10 / page'
  },
  {
    value: 20,
    label: '20 / page'
  },
  {
    value: 30,
    label: '30 / page'
  },
  {
    value: 50,
    label: '50 / page'
  }
];
