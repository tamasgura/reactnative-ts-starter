import React from 'react';
import { Provider } from 'react-redux';
import DismissKeyboardView from './src/components/Inputs/DismissKeyboardView';
// import { whyDidYouUpdate } from 'why-did-you-update';

import { setNavigator } from './src/navigation/services';
import store from './src/store/utility/configureStore';
import RootStack from './src/navigation/navigators/RootStack';

class App extends React.Component {
  // componentDidMount(): void {
  //   if (__DEV__) {
  //     whyDidYouUpdate(React, { exclude: /^YellowBox/ });
  //   }
  // }

  render() {
    return (
      <DismissKeyboardView>
        <Provider store={store}>
          <RootStack ref={navigatorRef => setNavigator('rootNavigator', navigatorRef)} />
        </Provider>
      </DismissKeyboardView>
    );
  }
}

export default App;
