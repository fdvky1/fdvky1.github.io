import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig().public;
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: config.RECAPTCHA_SITE_KEY!,
        loaderOptions: {
            autoHideBadge: true,
            explicitRenderParameters: {
                badge: 'bottomleft',
            },
        },
    });
});