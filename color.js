const path = require('path');
  const { generateTheme } = require('antd-theme-generator');
  
  const options = {
    stylesDir: path.join(__dirname, './src/changeColor/styles'),
    antDir: path.join(__dirname, './node_modules/antd'),
    varFile: path.join(__dirname, './src/changeColor/styles/vars.less'),
    mainLessFile: path.join(__dirname, './src/changeColor/styles/main.less'),
    themeVariables: [
      '@primary-color',
      '@secondary-color',
      '@text-color',
      '@text-color-secondary',
      '@heading-color',
      '@layout-body-background',
      '@btn-primary-bg',
      '@layout-header-background'
    ],
    indexFileName: 'index.html',
    outputFilePath: path.resolve(__dirname, './public/color.less'),
  }
  
  console.log(path.resolve(__dirname, './public/color.less'))

  generateTheme(options).then(less => {
    console.log('Theme generated successfully');
  })
    .catch(error => {
      console.log('Error', error);
    });