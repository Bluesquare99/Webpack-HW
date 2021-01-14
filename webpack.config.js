// module.exports = {
//     // 1 - It tells Webpack to begin bundle here
//     entry: './src/index.js',
//     // 2 -- This is what it results in
//     output: {
//       path: '/dist',
//       filename: 'bundle.js'
//     },
//     // 3 - This will serve our application to the browswer
//     devServer: {
//       contentBase: './dist'
//     }
//   };

const path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};