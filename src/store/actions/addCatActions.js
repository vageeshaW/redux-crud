import * as actionTypes from './actionTypes';
import axios from 'axios'
export const addCatSuccess = ( cat ) => {
    return {
        type: actionTypes.ADD_CAT_SUCCESS,
        cat: cat
    };
};

export const addCatFail = ( error ) => {
    return {
        type: actionTypes.ADD_CAT_FAIL,
        error: error
    };
};

export const addCat = (obj) => {
    return dispatch => {
        axios.post('http://localhost:8080/cats/add', obj)
            .then( res => {
            
                    dispatch(addCatSuccess(res.data));
                   
                }
               
            )
            .catch( err => {
                dispatch(addCatFail(err));
            } );
    };
};


export const changeInputData = (data) => {
    console.log(data)
    return {
        type: actionTypes.CHANGE_INPUT_DATA,
        data:data
    };

};