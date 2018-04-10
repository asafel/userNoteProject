const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    stats: 'minimal',
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            'transform-class-properties',
          ],
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: [
      ".js",
    ],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      Config: path.resolve(__dirname, 'src/config/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
      HOC: path.resolve(__dirname, 'src/HOC'),
    }
  },
  externals: {
    moment: 'moment'
  }
};
