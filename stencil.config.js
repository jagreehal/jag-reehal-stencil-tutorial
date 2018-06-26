exports.config = {
  autoprefixer: [
    '> 1%',
    'last 2 versions',
    'IE 11'
  ],
  namespace: 'alert-component',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};
