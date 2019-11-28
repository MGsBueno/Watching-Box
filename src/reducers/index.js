import { combineReducers } from 'redux';
import userReducer from './userReducer';
import serieFormReducer from './serieFormReducer';
import seriesReducer from './seriesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    //Form LogIn
    user: userReducer,
    //Form de criar serie
    createSerie: serieFormReducer,
    series: seriesReducer,
    //search: searchReducer,
});