import React, {createContext, useState, useReducer, useEffect} from 'react';
import {bookReducer} from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {

    // const [books, setBooks] = useState([
    //     {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //     {title: 'the final empire', author: 'brandon sanderson', id: 2}
    // ]);
    //
    // const addBook = (title, author) => {
    //   setBooks( [...books, { title, author, id: uuid() }] )
    // };
    //
    // const removeBook = (id) => {
    //   setBooks( books.filter( book => book.id !== id ) );
    // };
    //
    // return (
    //     <BookContext.Provider value={ {books, addBook, removeBook} }>
    //         {props.children}
    //     </BookContext.Provider>
    // )

    //
    // Using 'useReducer' instead of 'use State'
    //

    // takes reducer and state
    // 3 parameter func, call data from localStorage
    const [books, dispatch] = useReducer(bookReducer, [], () => {

        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    } );

    useEffect( () => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books] );

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )

};

export default BookContextProvider;
