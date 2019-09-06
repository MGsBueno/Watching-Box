import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/pages/LoginScreen';
import SubscribeScreen from './src/pages/SubscribeScreen'

/*Text Login*/
const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Welcome to Watching Box',
      headerTintColor : 'white',
      headerStyle: {
        backgroundColor: '#9400D3',
        borderBottomWidht: 1,
        borderBottomCollor: 'C5C5C5'
      },  
      headerTitleStyle: {
        color: 'white',
        fontSize: 26,
      },
    }
  },
  'Subscribe':{
    screen: SubscribeScreen,
  },
  
},
{
    defaultNavigationOptions: {
      title: "Watching Box",
      
      headerTintColor : 'white',
      headerStyle: {
        
        backgroundColor: '#9400D3',
        borderBottomWidht: 1,
        borderBottomCollor: 'C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
      },

  },
  
});

const AppContainer = createAppContainer (AppNavigator);

export default AppContainer;