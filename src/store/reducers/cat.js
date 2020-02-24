import * as actionTypes from "../actions/actionTypes";
const initialState = {
  name: "",
  description: "",
  color: "red",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_CAT_SUCCESS:
      return {
        ...state,
        ...action.cat
      };

    case actionTypes.DELETE_CAT_SUCCESS:
      return {
        ...state
        //check
      };

    case actionTypes.UPDATE_CAT_SUCCESS:
      return {
        ...state
        //check
      };

    case actionTypes.CHANGE_INPUT_DATA:
      return {
        ...state,
        ...action.data,
         
      };
      
    case actionTypes.UPDATE_CAT_SUCCESS:
      return {
        ...state
        //check
      };

    default:
      return state;
  }
};

export default reducer;
