import webpack from 'webpack'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'zonasea',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f40d32' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/vendor/element-ui.scss',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/slick', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  /*
   ** Router config
   */
  router: {
    /*
     ** Global middlware
     */
    middleware: [],
    /*
     ** Globally configure <nuxt-link> default exact active class.
     */
    linkExactActiveClass: 'active'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     * Enable thread-loader in webpack building.
     */
    parallel: true,
    /**
     * Nuxt.js use webpack-bundle-analyzer to let you visualize your bundles and how to optimize them.
     */
    analyze: false,
    /**
     * If you want to transpile specific dependencies with Babel, you can add them in here.
     */
    transpile: [
      /^element-ui/
    ],
    /**
     * Add webpack plugins
     */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    /**
     * Customize Babel configuration for JavaScript and Vue files. .babelrc is ignored by default.
     */
    babel: {
      /**
       * @param {any} x
       */
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
