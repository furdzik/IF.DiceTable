import React from 'react';
import { IntlProvider } from 'react-intl';

import { Global, ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';

import store from 'features/store';

import RoutesConfig from 'routes';

import { GlobalStyles } from 'styles/global.styles';
import theme from 'styles/theme';

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <IntlProvider locale="en">
          <RoutesConfig />
        </IntlProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
