import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const iconBox = style({
  width: '48px',
  height: '48px',
  borderRadius: '16px',
  backgroundColor: '#F2F3F5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  margin: '.5rem 0',
});

export const appSt = {
  bottomBtn,
  container,
  iconBox,
  row,
};
