import React from 'react';

import {AppStateContext} from './AppStateContext';

interface AppState {
  children: React.ReactNode;
}

export const AppStateProvider = ({children}: AppState) => {
  const context = {};

  return (
    <AppStateContext.Provider value={context}>
      {children}
    </AppStateContext.Provider>
  );
};
