import { Alert } from 'react-native';
import privateConfig from '../components/config-private';

const { apiKey } = privateConfig;

export function searchTermChange(search) {
  return {
    type: 'SEARCH_TERM_CHANGE',
    value: search,
  };
}

export function search(search) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_REQUEST' });
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}&ype=movie`;
    console.log('URL', url);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (json.Response === 'False') {
          throw json.Error;
        }
        const results = json.Search;
        dispatch({ type: 'SEARCH_REQUEST_SUCCESS', results });
      })
      .catch(err => {
        const errorMessage = (err instanceof Error ? err.message : String(err));
        dispatch({ type: 'SEARCH_REQUEST_FAILURE', errorMessage });
        Alert.alert('erro: tente Novamente');
      });
  };
}