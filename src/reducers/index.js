import { combineReducers } from 'redux';
import serieReducer from './serieFormReducer'
import userReducer from './userReducer';
import serieFormReducer from './serieFormReducer';

export default combineReducers({
    //Form LogIn
    user: userReducer,
    //Search
    SerieSearch: serieReducer,
    //Form de criar serie
    createSerie: serieFormReducer,
});