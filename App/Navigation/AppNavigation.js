import { StackNavigator } from 'react-navigation'
import MainScreen from '../Containers/Main/Main.Screen'
import AnimationScreen from '../Containers/Animation/Animation.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MainScreen: {screen: MainScreen},
  AnimationScreen: {screen: AnimationScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
