import { createSwitchNavigator } from 'react-navigation'
import About from '../../scenes/About/About'
import Dashboard from '../../scenes/Dashboard/Dashboard'

const MainNavigator = createSwitchNavigator(
  {
    Dashboard: { screen: Dashboard },
    About: { screen: About },
  },
  {
    initialRouteName: 'Dashboard',
  }
)

export default MainNavigator
