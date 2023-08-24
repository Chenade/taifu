import { defineStore } from 'pinia';

export const useParamStore = defineStore({
  id: 'param',
  state: () => ({
    splitSymbol: '$?',
  }),
});
