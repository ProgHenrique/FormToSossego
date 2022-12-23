import { styled } from "..";


export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  width: '100%',
  maxWidth: 1017,
  minHeight: 550,
  margin: '0 auto',
  border: '2px solid $gray200',
  padding: '3.5rem 0 1.625rem 3.75rem',
  boxShadow: '0px 4px 31px #EEF1F5',
  borderRadius: 8,
  backgroundColor: '$white',


  h1: {
    fontSize: '2.25rem',
    fontWeight: 500,
    lineHeight: '$default',
  },

  '#formSectionContainer': {
    display: 'flex',
    gap: '2rem'
  }
})

export const FormSection = styled('div', {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray200',
    borderRadius: '9999px',
    padding: 13,
    lineHeight: 0,
  },

  p: {
    fontWeight: 500,
    lineHeight: '$default'
  },

  variants: {
    state: {
      current: {
        span: {
          color: '$purple',
        }
      },

      filledIn: {
        span: {
          color: '$success500',
        }
      },

      fillOut: {
        span: {
          color: '$gray400',
        }
      }
    }
  }
})