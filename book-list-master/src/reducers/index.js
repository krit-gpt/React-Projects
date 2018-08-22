import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ActiveBook from './reducer_active_book';


//makes the application state and sends to the app component
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
