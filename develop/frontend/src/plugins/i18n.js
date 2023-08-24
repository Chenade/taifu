import { createI18n } from 'vue-i18n-dev';
import tw from '@/lang/tw';
import en from '@/lang/en';

export const i18n = createI18n({
  locale: 'tw',
  messages: {
    tw,
    en,
  },
});
