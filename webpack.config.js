const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // "dist/asset/名前.拡張子" として出力される
    assetModuleFilename: 'asset/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 画像やフォントファイル
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        // 画像やフォントファイル
        test: /\.png$/,
        type: 'asset/resource',
      },
    ],
  },
};

// 設定を CommnJS 形式でエクスポート
module.exports = config;
