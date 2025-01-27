// @flow
export { withEmotionCache, CacheProvider } from './context'
export { jsx } from './jsx'
export { Global } from './global'
export { keyframes } from './keyframes'
export { ClassNames } from './class-names'
export { ThemeContext, useTheme, ThemeProvider, withTheme } from './theming'
export { default as css } from './css'

if (process.env.NODE_ENV !== 'production') {
  const isBrowser = typeof document !== 'undefined'
  // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock
  const isJest = typeof jest !== 'undefined'

  if (isBrowser && !isJest) {
    const globalContext = isBrowser ? window : global
    const globalKey = '__EMOTION_REACT__'
    if (globalContext[globalKey]) {
      console.warn(
        'You are loading @emotion/react when it is already loaded. Running ' +
          'multiple instances may cause problems. This can happen if multiple ' +
          'versions are used, or if multiple builds of the same version are ' +
          'used.'
      )
    }
    globalContext[globalKey] = true
  }
}
