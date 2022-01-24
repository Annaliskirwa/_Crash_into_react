const initialState = {
    page:0,
};
const reducer=(state=initialState, action)=>{
    switch(action.type){
        case "CHANGE_VALUE":
            return {...state, page:action.value};
        default: state;
    }
};

export default reducer;