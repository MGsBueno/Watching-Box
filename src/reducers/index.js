import { combineReducers } from 'redux';
import userReducer from './userReducer';
import serieFormReducer from './serieFormReducer';
import seriesReducer from './seriesReducer';

export default combineReducers({
    //Form LogIn
    user: userReducer,
    //Form de criar serie
    createSerie: serieFormReducer,
    series: seriesReducer,
});