import * as actionTypes from './actionTypes';
import axios from 'axios'

export const getCatSuccess = ( cat ) => {
    return {
        type: actionTypes.GET_CAT_SUCCESS,
        cat: cat
    };
};

export const getCatFail = ( error ) => {
    return {
        type: actionTypes.GET_CATS_FAIL,
        error: error
    };
};

export const getCat = (catId) => {
    return dispatch => {
        axios.get( 'http://localhost:8080/cats/' + catId )
            .then( res => {
               /*  const getCats = [];
                for ( let key in res.data ) {
                    getCats.push( {
                        ...res.data[key],
                        id: key
                    } ); */
                    dispatch(getCatSuccess(res.data));
                }
               
            )
            .catch( err => {
                dispatch(getCatFail(err));
            } );
    };
};

///delet cat actions
export const deleteCatSuccess = ( ) => {
    return {
        type: actionTypes.DELETE_CAT_SUCCESS,
    };
};

export const deleteCatFail = ( error ) => {
    return {
        type: actionTypes.DELETE_CAT_FAIL,
        error: error
    };
};

export const deleteCat = (catId) => {
    return dispatch => {
        axios.get('http://localhost:8080/cats/' + catId + '/delete')
            .then( res => {
               /*  const getCats = [];
                for ( let key in res.data ) {
                    getCats.push( {
                        ...res.data[key],
                        id: key
                    } ); */
                    dispatch(deleteCatSuccess(res.data));
                }
               
            )
            .catch( err => {
                dispatch(deleteCatFail(err));
            } );

           
    };

   
};



////updating cat actions 

export const updateCatSuccess = ( cat ) => {
    return {
        type: actionTypes.UPDATE_CAT_SUCCESS,
        cat: cat
    };
};

export const updateCatFail = ( error ) => {
    return {
        type: actionTypes.UPDATE_CAT_FAIL,
        error: error
    };
};

export const updateCat = (catId,catData) => {
    return dispatch => {
        axios.post('http://localhost:8080/cats/' + catId + '/update', catData)
            .then( res => {
            
                    dispatch(updateCatSuccess(res.data));
                }
               
            )
            .catch( err => {
                dispatch(updateCatFail(err));
            } );
    };
};

//textchane
export const changeInputData = (data) => {
    console.log(data)
    return {
        type: actionTypes.CHANGE_INPUT_DATA,
        data:data
    };

};