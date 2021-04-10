const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/app.ts',
   devServer: {
      open: true,
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: 'dist',
   },
   module: {
      rules: [
         {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      extensions: ['.ts', '.js'],
   },
};
