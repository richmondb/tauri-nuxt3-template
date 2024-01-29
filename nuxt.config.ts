// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    devtools: {enabled: true},
    ssr: false,
    srcDir: 'src/',
    routeRules: {
        '/': {prerender: true}
        /* do the same for all routes used */
    },
    colorMode: {
        preference: 'system', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
    },
    app: {
        head: {
            title: 'Nuxt 3 Tauri',
            meta: [{name: 'description', content: 'Nuxt 3 Tauri'}],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},

            ],
        }
    }
})
