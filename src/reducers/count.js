import { INCREMENT, DECREMENT } from "../actions/actionTypes";

const _defaultState= 0

const countReducer = (state = _defaultState, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default countReducer;
