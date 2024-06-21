import '@emotion/react';

import { ITheme, EmotionTheme } from 'interfaces';

declare module '@emotion/react' {
  export interface Theme extends ITheme {
    theme: EmotionTheme
  }
}