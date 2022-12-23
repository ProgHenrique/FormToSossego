import { styled } from '.';


export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  width: 226,
  borderRadius: 4,
  border: 'none',
  padding: '15px 0',
  color: '$white',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.3
  },

  variants: {
    color: {
      purple: {
        backgroundColor: '$purple'
      },

      gray: {
        backgroundColor: '$gray400'
      }
    }
  }
})