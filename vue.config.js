// vue.config.js
module.exports = {
  publicPath: "/trading_app/",
  runtimeCompiler: true,
  // NOTE: set alias via `configureWebpack` or `chainWebpack`
  configureWebpack: {
    resolve: {
      alias: {
        "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
        "balm-ui-css": "balm-ui/dist/balm-ui.css",
      },
    },
  },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('balm-ui-plus', 'balm-ui/dist/balm-ui-plus.js')
  //     .set('balm-ui-css', 'balm-ui/dist/balm-ui.css');
  // }
  // process.env.NODE_ENV === "production" ? "/trading_app/" : "/",
};
