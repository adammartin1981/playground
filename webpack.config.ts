import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}
