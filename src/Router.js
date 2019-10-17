import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/LoginScreen';
import SubscribeScreen from './pages/SubscribeScreen'


/*Text Login*/
const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem vindo a Watching Box',
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
    navigationOptions: {
      title: 'cadastro',
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
  'Main':{
    screen: MainScreen,
  }
  
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