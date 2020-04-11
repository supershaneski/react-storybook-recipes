module.exports = {
    module: {
        loaders: [{
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          include: path.join(__dirname, 'src')
        }, {
          test: /\.css$/,
          loader: combineLoaders([
            {
              loader: 'style-loader'
            }, {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ])
        }]
    }
};