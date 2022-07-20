import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import BookInput from './BookInput';
import BookTable from './BookTable';
import React, {useState} from 'react'
function App() {

  const [books,setBooks]=useState([]);

  function addBookLibrary(book){
    const newBooks=[...books,book];
    // for (let bo in books){
    //   newBooks.push(bo);
    // }
    // newBooks.push(book);
    // setBooks(newBooks);
    setBooks(newBooks);
    
  }

  function removeBook(book){
    const updatedBooks= books.filter((b)=>{
      return b.isbn !== book.isbn;
    })
    setBooks(updatedBooks);
  };

  return (
    
      <div className="container mt-5">
        <div className="card card-body ">
          <h1 className="display-1 ">Add Book:</h1>
          
          <BookInput addBookLibrary={addBookLibrary}></BookInput>
          <BookTable books={books} removeBook={removeBook}></BookTable>

        </div>

      </div>

  );
}

export default App;
