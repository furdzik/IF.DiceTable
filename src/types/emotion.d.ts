import '@emotion/react';

import { ITheme, ThemeColors } from 'interfaces';

declare module '@emotion/react' {
  export interface Theme extends ITheme {
    colorMono: ThemeColors
  }
}