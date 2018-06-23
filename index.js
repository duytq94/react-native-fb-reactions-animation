__DEV__ ? global.NTron = console.tron.log : global.NTron = () => { }
__DEV__ ? global.NLog = console.log : global.NLog = () => { }
__DEV__ ? global.NLoge = console.error : global.NLoge = () => { }

import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'

AppRegistry.registerComponent('FacebookReactionsAnimation', () => App)
