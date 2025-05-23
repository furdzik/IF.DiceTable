import { colors, typography } from './basic';

import { ITheme } from 'interfaces';

export const theme: ITheme = {
  ...colors,
  ...typography,
  layout: {
    background: colors.colorMono.white,
    width: '180rem',
    padding: '1rem',
    modalDefaultPadding: '3rem',
    borderColor: '',
    boxShadow: '',
    transition: 'all .3s ease-in'
  }
};

export default theme;
