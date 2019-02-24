import {
    TODO_DELETE,
    TODO_FETCH,
    TODO_UPDATE
} from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODO_FETCH:
            return action.payload;
        default:
            return state;
    }
};