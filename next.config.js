module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/eth-tool' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/decode': {page: '/decode'}
    };
  }
};
