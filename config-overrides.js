const {
  override,
  disableChunk,
  addBabelPlugins,
  removeModuleScopePlugin,
  addBabelPresets,
  addWebpackAlias,
} = require('customize-cra');

const path = require('path')
module.exports = override(
  ...addBabelPresets('@babel/preset-env', '@babel/preset-react'),
  ...addBabelPlugins(
    [
      'import',
      { libraryName: 'antd-mobile', libraryDirectory: 'lib', style: 'css' },
      'antd-mobile',
    ],
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: true },
      'antd',
    ],
  ),
  disableChunk(),
  removeModuleScopePlugin(),
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, 'src/components'),
    ['@layouts']: path.resolve(__dirname, 'src/layouts')
  })
);
