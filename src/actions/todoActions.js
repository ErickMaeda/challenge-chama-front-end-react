import {
  getToDosCollection
} from "../configs/firebase";
import {
  TODO_FETCH
} from "./types";

export const add = (todo) => async dispatch => {
  getToDosCollection().set(todo);
};

export const updateCompleted = (id, completed) => async dispatch => {  
  getToDosCollection().doc(id).set({
    completed
  }, {
    merge: true
  });
};

export const fetch = () => async dispatch => {
  getToDosCollection().onSnapshot((querySnapshot) => {
    const todos = [];
    querySnapshot.forEach(function (doc) {
      todos.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    dispatch({
      type: TODO_FETCH,
      payload: todos
    });
  });
};