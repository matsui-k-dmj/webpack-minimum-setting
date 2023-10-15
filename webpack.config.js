/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

// 設定を CommnJS 形式でエクスポート
module.exports = config;
