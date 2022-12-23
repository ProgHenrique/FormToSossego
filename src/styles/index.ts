import { createStitches } from "@stitches/react";


export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      purple: '#5357B1',
      white: '#FFFFFF',
      black: '#000000',
      success500: '#00AE63',

      gray100: '#F8FAFB',
      gray200: '#F0F2F6',
      gray400: '#8C98A9',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
    },

    lineHeights: {
      default: '155%',
    }
  }
})