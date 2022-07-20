import React from 'react'

export default function BookTable(props) {

    function removeBook(book){
        props.removeBook(book);
    }

    return (
        <div className="mt-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                    <th>Title </th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.books.map((book)=>
                        <tr key={book.isbn}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>
                                <button onClick={()=>removeBook(book)}className="btn btn-secondary btn-sm ">Remove</button>
                            </td>

                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
