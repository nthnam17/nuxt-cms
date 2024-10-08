import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
    // import styles
    css: ['@/assets/style.scss', 'vue3-perfect-scrollbar/style.css'],

    ssr: false,
    spaLoadingTemplate: false,
    devtools: { enabled: true },

    // enable takeover mode
    typescript: { shim: false },
    //...
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        '@pinia/nuxt',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
        //...
    ],
    vite: {
        ssr: {
            noExternal: ['vuetify', 'toast'],
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        define: {
            'process.env.APP_API_URL': JSON.stringify(process.env.APP_API_URL),
            'process.env.APP_CMS_URL': JSON.stringify(process.env.APP_CMS_URL),
            'process.env.APP_TIMEOUT': JSON.stringify(process.env.APP_TIMEOUT),
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/_breakpoint.scss" as *;',
                },
            },
        },
    },

    devServer: {
        port: Number(process.env.APP_PORT) || 3001,
    },

    app: {
        head: {
            title: '',
            titleTemplate: 'ChillAndFreeCMS - %s',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
                },
                { rel: 'icon', type: 'image/x-icon', href: '/logo-mini.svg' },
                {
                    rel: 'canonical',
                    href: 'url',
                },
            ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'description',
                },
                { property: 'og:site_name', content: 'NextADS CMS' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: 'url',
                },
                {
                    hid: 'og:image:secure_url',
                    property: 'og:image:secure_url',
                    content: 'image',
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'JHL Group',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'JHL Group',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://lms.xteldev.com/image/amico.png',
                },
                //Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                {
                    hid: 'twitter:url',
                    name: 'twitter:url',
                    content: 'url',
                },
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: 'title',
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: 'description',
                },
                {
                    hid: 'twitter:image',
                    name: 'twitter:image',
                    content: 'image',
                },
            ],
            script: [
                {
                    src: `${process.env.APP_CMS_URL}/ckeditor/ckeditor.js`,
                },
                {
                    src: `${process.env.APP_CMS_URL}/ckfinder/ckfinder.js`,
                },
            ],
        },
    },

    compatibilityDate: '2024-04-03',
});
