import Toast, { type PluginOptions, useToast, POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options: PluginOptions = {
    timeout: 2500,
    position: POSITION.TOP_RIGHT,
    maxToasts: 5,
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, options);

    return {
        provide: {
            toast: useToast(),
        },
    };
});

// https://github.com/Maronato/vue-toastification#installation
