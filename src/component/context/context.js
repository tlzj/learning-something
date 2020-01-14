import React, { Component } from 'react';
export const themes = {
  light: {
    foreground: '#ffffff',
    background: '#222222',
  },
  dark: {
    foreground: '#000000',
    background: '#eeeeee',
  }
}
export const ThemeContext = React.createContext(themes.dark)
export const Provider = ThemeContext.Provider 
export const Consumer = ThemeContext.Consumer
// 使用高阶组件
export const withTheme = (Component) => {
  function ThemedComponent(props){
    return (
      <Consumer>
        {theme => <Component {...props} theme={theme}/>}
      </Consumer>
    )
  }
  return ThemedComponent
}

// refs 不会自动的传递给被封装的元素，解决方式：React.forwardRef
class FancyButton extends React.Component {
  focus() {
    // ...
  }

  // ...
}
export const NewReader = React.forwardRef((props, ref) => {
  return <Consumer>
    {theme => <FancyButton {...props} theme={theme} ref={ref} />}
  </Consumer>
})


