import * as firebase from "firebase";

import {
    FirebaseConfig
} from "../keys/keys";

firebase.initializeApp(FirebaseConfig);

export const getDatabase = () => firebase
    .firestore();

export const getToDosCollection = () => getDatabase().collection("todos");