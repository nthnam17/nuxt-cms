import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const options = {
    timeout: 2500,
    position: POSITION.TOP_RIGHT,
    maxToasts: 5,
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Toast, options);
});
