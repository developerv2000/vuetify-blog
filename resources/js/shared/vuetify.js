// Configures Vuetify globally with icons and localization

import { createVuetify } from 'vuetify'; // Vuetify main setup function
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'; // Material Design Icons (SVG)
import { en } from 'vuetify/locale'; // English language pack

export default createVuetify({
    locale: {
        locale: 'en', // Set default language to English
        fallback: 'en', // Use English if translation missing
        messages: { en }, // Translation messages
    },
    icons: {
        defaultSet: 'mdi', // Use Material Design Icons as default
        aliases, // Icon aliases (for shorthand usage like `mdiHome`)
        sets: { mdi }, // Provide the actual icon set
    },
    ssr: true, // Enable SSR compatibility
});
