import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {storeReducer} from './services';
import RouterNav from './pages/Routes';

const App = () => {
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  return (
    <Provider store={storeReducer}>
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#38bbca"
          color="#38bbca"
        />
        <RouterNav />
      </>
    </Provider>
  );
};

export default App;
