import React from 'react';
import {Provider} from 'react-redux';

import {Navigation} from './src/navigators';
import {store} from './src/store';
import {AppStateProvider} from './src/context/AppState/AppStateProvider';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppStateProvider>
        <Navigation />
      </AppStateProvider>
    </Provider>
  );
};

export default App;
