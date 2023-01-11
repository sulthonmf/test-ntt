import * as React from 'react';
import AppRoute from './src/navigators/navigator';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <AppRoute />
    </PaperProvider>
  );
};

export default App;
