import { globalCss } from ".";


export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  focus: {
    outline: 0,
    boxShadow: '0 0 0 2px $purple',
  },

  body: {
    backgroundColor: '$white',
    color: '$black',
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
    fontSize: '$md',
    lineHeight: '$default'
  }
})