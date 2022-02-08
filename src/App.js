import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
