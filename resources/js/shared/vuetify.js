import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { ru } from 'vuetify/locale';

export default createVuetify({
    locale: {
        locale: 'ru',
        fallback: 'en',
        messages: { ru },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
    ssr: true,
});
