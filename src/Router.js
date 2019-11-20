import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/MainScreen';
import SubscribeScreen from './pages/SubscribeScreen';
import SerieDetailPage from './pages/SerieDetailScreen';
import Favorite from './pages/FavoriteScreen'
import createSerie from './pages/createSerie'

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
  'Main':{
    screen: MainScreen,
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
  
  'SerieDetail':{
    screen:SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return{
      title: serie.title,
      }
    },
  },
  'Favorite':{
    screen:Favorite,
    navigationOptions:{
      title: 'Favoritos',
    }
  },
  'createSerie':{
    screen:createSerie,
    navigationOptions:{
      title: 'Criar série',
    }
  },
},

{
    defaultNavigationOptions: {
      title: "Watching Box",
      headerTintColor : 'white',
      headerStyle: {
        backgroundColor: '#181818',
        borderBottomWidht: 1,
        borderBottomCollor: 'C5C5C5'
      },
      headerTitleStyle: {
        padding:'20%',
        color: 'white',
        fontSize: 30,
      },

  },
  
});

const AppContainer = createAppContainer (AppNavigator);

export default AppContainer;