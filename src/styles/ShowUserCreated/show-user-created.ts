import { styled } from '..';


export const Container = styled('main', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 545,
  minHeight: 741,
  margin: '0 auto',
  border: '2px solid $gray200',
  boxShadow: '0px 4px 31px #EEF1F5',
  paddingTop: '3.75rem',
  borderRadius: 8,
  backgroundColor: '$white',

  h1: {
    fontSize: '2.25rem',
    fontWeight: 500,
    lineHeight: '$default',
    marginBottom: '2.125rem',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    '#nameAndEmailDiv': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      paddingLeft: '1.125rem'
    },

    '#nameAndEmailDiv::after': {
      content: '',
      width: '100%',
      height: 1,
      backgroundColor: '$gray200'

    },

    width: '100%',
    paddingLeft: '3.125rem',
    paddingRight: '2.5rem'
  }
})

export const UserField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  span: {
    color: '$gray400'
  },

  p: {
    fontWeight: 400,
    fontSize: '$xl'
  },

  '#formatStreetName': {
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

})

export const FieldGridStreetNumber = styled('div', {
  display: 'grid',
  gridTemplateColumns: '60% auto',
  columnGap: '2.5rem',
  paddingLeft: '1.125rem'
})

export const Button = styled('button', {
  marginTop: '7.125rem',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  borderRadius: 4,
  border: 'none',
  padding: '15px 0',
  color: '$white',
  cursor: 'pointer',
  backgroundColor: '$purple',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.3
  },
})