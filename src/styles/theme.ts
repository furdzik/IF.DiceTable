import { colors, typography } from './basic';

import { ITheme } from 'interfaces';

export const theme: ITheme = {
  ...colors,
  ...typography,
  layout: {
    background: colors.colorMono.white,
    width: '130rem',
    padding: '1rem',
    modalDefaultPadding: '3rem',
    borderColor: '',
    boxShadow: '',
    transition: ''
  }
};

export default theme;
