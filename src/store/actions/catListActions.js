import * as actionTypes from './actionTypes';
import axios from 'axios'

export const getCatsSuccess = ( cats ) => {
    return {
        type: actionTypes.GET_CATS_SUCCESS,
        cats: cats
    };
};

export const getCatsFail = ( error ) => {
    return {
        type: actionTypes.GET_CATS_FAIL,
        error: error
    };
};


export const getCats = () => {
    return dispatch => {
       
        axios.get( 'http://localhost:8080/cats' )
            .then( res => {
               /*  const getCats = [];
                for ( let key in res.data ) {
                    getCats.push( {
                        ...res.data[key],
                        id: key
                    } ); */
                    dispatch(getCatsSuccess(res.data));
                }
               
            )
            .catch( err => {
                dispatch(getCatsFail(err));
            } );
    };
};
