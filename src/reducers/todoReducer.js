import {
    TODO_DELETE,
    TODO_FETCH,
    TODO_UPDATE
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case TODO_FETCH:
            return action.payload;
        default:
            return state;
    }
};