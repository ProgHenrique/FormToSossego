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
    gap: '1.5rem',
    marginTop: '7.5rem',
    marginRight: '-3.375rem'
  }
})

export const TextArea = styled('textarea', {
  width: '100%',
  height: '14.5rem',
  border: 'none',
  borderRadius: 4,
  backgroundColor: '$gray200',
  padding: '10px 12px',
  resize: 'none',
  '&:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px #5357B1',
  },
})