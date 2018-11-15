module.exports = {
  outputDir:
    process.env.VUE_APP_PLATFORM === 'app' ? 'acapp/widget/dist' : 'dist',
  baseUrl: './'
}
