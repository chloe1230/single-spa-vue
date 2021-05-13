module.exports = {
  devServer: {
    port: 9004,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`js/[name].js`)
    }
    config.externals(['vue', 'vue-router'])
  },
  filenameHashing: false,
}