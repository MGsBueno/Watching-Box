import firebase  from 'firebase';

export  const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
    type: SET_WHOLE_SERIE,
    serie
})

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) =>{
    return{
            type: SET_FIELD,
            field: SET_FIELD,
            field,
            value
        }
    }

 export const SERIE_SAVED_SUCESS = 'SERIE_SAVED_SUCESS'
 const serieSavedSucess = () => ({
    type: SERIE_SAVED_SUCESS
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
})

export const saveSerie = serie => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        const db = firebase.database();
        if (serie.id){
            await db.ref(`/users/${currentUser.uid}/series/${serie.id}`)
            .set(serie);
        }else{
            await db.ref(`/users/${currentUser.uid}/series`)
                .push(serie);
            dispatch(serieSavedSucess())
    }
    }
}

export const SET_SERIES = 'SET_SERIES';
const setSeries = series => ({
    type: SET_SERIES,
    series,
})

export const watchSeries = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/series`)
            .on('value', snapshot => {
                const series = snapshot.val();
                const action = setSeries(series);
                dispatch( action )
                
            })
    }
    
}