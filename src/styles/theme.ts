import { colors, typography } from './basic';

import { ITheme } from 'interfaces';

export const theme: ITheme = {
  ...colors,
  ...typography,
  layout: {
    background: '',
    width: '100rem',
    padding: '1rem',
    borderColor: '',
    boxShadow: '',
    transition: ''
  }
};

export default theme;
