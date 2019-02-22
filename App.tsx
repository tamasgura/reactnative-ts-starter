import React from 'react'
import { Provider } from 'react-redux'
import RootStack from './src/navigation/navigators/RootStack'
import { setNavigator } from './src/navigation/services'
import store from './src/store/utility/configureStore'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack ref={navigatorRef => setNavigator('rootNavigator', navigatorRef)} />
      </Provider>
    )
  }
}

export default App

/**
 * PROJECT SETUP
 *
 * BASIC    TODO DONE
 * ESLINT   TODO DONE
 * FLOW/TS? TODO DONE
 * FONTS    TODO DONE
 * ICONS    TODO DONE
 * NAV      TODO DONE
 * REDUX    TODO DONE
 * SAGA     TODO DONE
 * RESELECT TODO DONE
 * IMMUTBLE TODO DONE
 * I18N     TODO DONE
 * VALIDATR TODO DONE
 * REFETCH  ---------
 * COMMON   TODO
 * STYLES?  TODO
 * STORAGE  TODO ?
 *
 */
