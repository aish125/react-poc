const initialState = {
    age: 21
}

const reducer = (state= initialState, action)=>{
    console.log("reducer", state)
    const newState = {...state}
    switch(action.type){
        case 'Add':
            newState.age+= 1;
            console.log("newState", newState)
            break;
    }
    return newState;

}
export default reducer;