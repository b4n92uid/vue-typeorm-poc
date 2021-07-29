// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");

module.exports = {
  devServer: {
    disableHostCheck: true
  },

  configureWebpack: {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
        result.request = result.request.replace(/typeorm/, "typeorm/browser");
      }),
      new webpack.ProvidePlugin({
        "window.SQL": "sql.js/dist/sql-wasm.js",
        "window.localforage": "localforage/dist/localforage.min.js"
      })
    ]
  },

  transpileDependencies: ["vuetify"]
};
