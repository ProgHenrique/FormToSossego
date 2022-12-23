import { styled } from '.'


export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: 'transparent'
})

export const BodyColor = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
  minHeight: '100vh',
  minWidth: '50vw',
  backgroundColor: '$gray100',
  zIndex: -1
})