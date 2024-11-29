const fs = require('fs');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve from 'public' directory
    },
    compress: false,
    port: 9000,
    host: '0.0.0.0', // allow everyone on localhost to see the server
    // https: {
    //   key: fs.readFileSync('server.key'),
    //   cert: fs.readFileSync('server.crt'),
    //   ca: fs.readFileSync('server.pem'),
    // }
  }
};
