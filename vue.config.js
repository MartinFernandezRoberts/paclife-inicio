module.exports = {
  assetsDir: 'assets',

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'assets/locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/paclife-inicio/'
    : '/'

}
