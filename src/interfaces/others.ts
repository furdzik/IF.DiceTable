import React from 'react';

import store from 'features/store';

export type Children = React.ReactElement | React.ReactElement[] | string | null;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;