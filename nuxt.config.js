const webpack = require('webpack')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    title: 'BPR DP Taspen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap',
        async: '',
        defer: '',
        media: 'all'
      }
    ],
    script: [
      {
        src: '/crisp.js',
        type: 'text/javascript'
      }
    ]
  },
  loading: { color: '#fff' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~assets/css/main.css', lang: 'css' },
    '@/assets/css/fontawesome/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/router',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              targets: isServer ? { node: '10' } : { ie: '11' },
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },
  server: {
    port: 3002, // default: 3000
    host: '0.0.0.0' // default: localhost
  }

  // serverMiddleware: [
  //   {
  //     path: 'api',
  //     handler: '~/serverMiddleware/api'
  //   }
  // ]
}
