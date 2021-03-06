const path = require('path');

const library = 'MDCReact';

const argv = process.argv;
let filename;
if (argv.includes('--optimize-minimize') || argv.includes('-p')) {
  filename = `${library}.min.js`;
} else {
  filename = `${library}.js`;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename,
    library,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: [
                'transform-class-properties',
                ['transform-imports', {
                  lodash: {
                    // eslint-disable-next-line no-template-curly-in-string
                    transform: 'lodash/${member}',
                    preventFullImport: true,
                  },
                }],
                'transform-object-rest-spread',
              ],
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
};

