const path = require('path');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

const alias = {
  '@src': getPath('src'),
  '@components': getPath('src/components'),
  '@scenes': getPath('src/scenes'),
};

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
  },
};
