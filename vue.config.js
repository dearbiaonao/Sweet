module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.11.56.88:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
