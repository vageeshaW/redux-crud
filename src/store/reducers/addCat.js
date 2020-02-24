import * as actionTypes from "../actions/actionTypes";
const initialState = {
  name: "",
  description: "",
};

const reducer = (state= initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_CAT_SUCCESS:
            return{
                ...state,
               ...action.cats
            }
        default: return state   
    }
       
      
   }

   export default reducer;
