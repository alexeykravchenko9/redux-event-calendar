
const stateInitial = ['event1', 'event2', 'event3'];

const reducer = (state = stateInitial, action) => {
    console.log(state);
    console.log(action);
    if( action.type === 'ADD_NEW_ITEM'){
        return state.concat(action.payLoad.name)
    } else {
        return state;
    }

};

export default reducer;