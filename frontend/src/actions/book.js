import axios from 'axios';

import { GET_BOOK, DELETE_BOOK, ADD_BOOK } from './types';
//geting book.

export const getBook = () => dispatch => {
    axios
        .get('api/book')
        .then(res => {
            dispatch({
                type: GET_BOOK,
                payload: res.data
            });
        }).catch(err => console.log(err));

}

//deleting book
export const deleteBook = () => dispatch => {
    axios
        .delete(`api/book`)
        .then(res => {
            dispatch({
                type: DELETE_BOOK,
                payload: res.data
            });
        }).catch(err => console.log(err));

}

//adding book
export const addBook = book => dispatch => {
    axios
        .post("api/book", book)
        .then(res => {
            dispatch({
                type: ADD_BOOK,
                payload: res.data
            });
        }).catch(err => console.log(err));

}