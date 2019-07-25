import React, {useContext} from 'react';
import {BookContext} from '../contexts/BookContext'


const BookDetails = ({book}) => {

    //const {removeBook} = useContext(BookContext);

    const {dispatch} = useContext(BookContext);

    // return (
    //     <li onClick={() => removeBook(book.id)}>
    //         <span className="title">{book.title}</span>
    //         <p className="author">{book.author}</p>
    //     </li>
    // )

    return (
        <li onClick={ () => dispatch({ type: 'REMOVE_BOOK', id: book.id}) }>
            <span className="title">{book.title}</span>
            <p className="author">{book.author}</p>
        </li>
    )

};

export default BookDetails;
