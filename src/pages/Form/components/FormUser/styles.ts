import { styled } from '../../../../styles';

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.625rem',
  paddingRight: '5.125rem',
  fieldset: {
    all: 'unset',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },

  'div:last-child': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '5.375rem',
    marginRight: '-3.375rem'
  }
})

export const Input = styled('input', {
  width: '100%',
  border: 'none',
  borderRadius: 4,
  backgroundColor: '$gray200',
  padding: '10px 12px',
  '&:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px #5357B1',
  },
})

export const FormFieldsGrid = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  columnGap: '3.75rem',

  'input[type="date"]': {
    padding: '9px 12px',
  },

  label: {
    display: 'flex',
    gap: '0.75rem',
    p: {
      fontSize: '$xs',
      color: 'red',
    }
  }
})