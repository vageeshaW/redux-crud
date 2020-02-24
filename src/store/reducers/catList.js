import * as actionTypes from '../actions/actionTypes'
const initialState ={
 cats:[],

}


const reducer = (state= initialState,action) => {
 switch(action.type){
     case actionTypes.GET_CATS_SUCCESS:
         return{
             ...state,
             cats:action.cats
         }
     default: return state   
 }
    
   
}


export default reducer;