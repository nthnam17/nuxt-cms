// @ts-ignore
import { createVuetify } from 'vuetify';
import { vi, en } from 'vuetify/locale';

import { aliases, custom } from '@/helpers/customIcons';
import { MAIN_THEME, mainTheme, MAIN_DARK_THEME, mainDarkTheme } from '@/helpers/themes';
import { defaults } from '~~/helpers/defaults';

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: true,
        defaults,
        locale: {
            locale: 'vi',
            fallback: 'en',
            messages: { vi, en },
        },
        // add theme
        theme: {
            defaultTheme: MAIN_THEME,
            themes: {
                mainTheme,
                mainDarkTheme,
            },
            // add color variations
            variations: {
                colors: ['primary', 'secondary'],
                lighten: 3,
                darken: 3,
            },
        },
        // Add the custom iconset
        icons: {
            defaultSet: 'custom',
            aliases,
            sets: {
                custom,
            },
        },
    });

    app.vueApp.use(vuetify);
});
