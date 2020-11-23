import {GET_BOOK, DELETE_BOOK, ADD_BOOK} from '../actions/types.js';

const initialState = {
    book: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_BOOK:
            return{
                ...state,
                book: action.payload
            };
            case DELETE_BOOK:
                return{
                    ...state,
                    book:state.book.filter(book=> book !== action.payload)
                };
                case ADD_BOOK:
                    return{
                        ...state,
                        book:[...state.book, action.payload]
                    };



            default:
                return state;
        

    }
}