// Configures Vuetify globally with icons and localization

import { createVuetify } from 'vuetify'; // Vuetify main setup function
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'; // Material Design Icons (SVG)
import { ru } from 'vuetify/locale'; // Russian language pack

export default createVuetify({
    locale: {
        locale: 'ru', // Set default language to Russian
        fallback: 'en', // Use English if translation missing
        messages: { ru }, // Translation messages
    },
    icons: {
        defaultSet: 'mdi', // Use Material Design Icons as default
        aliases, // Icon aliases (for shorthand usage like `mdiHome`)
        sets: { mdi }, // Provide the actual icon set
    },
    ssr: true, // Enable SSR compatibility
});
