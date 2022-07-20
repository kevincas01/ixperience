import React, {useState} from 'react'
import {Book} from "./book"

export default function BookInput(props) {

    const [titleName, setTitleName] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [isbnNumber, setIsbnNumber] = useState("")


    function formSubmit(event){
        event.preventDefault();
        const book=new Book(titleName,authorName,isbnNumber);
        props.addBookLibrary(book);

        setTitleName("");
        setAuthorName("");
        setIsbnNumber("");
    }
  
    return (
    <form  onSubmit={(event)=>{formSubmit(event)}} id="form">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input value={titleName} onChange={(event)=>{setTitleName(event.target.value)}}id="title-input" type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label className="form-label">Author</label>
        <input value={authorName} onChange={(event)=>{setAuthorName(event.target.value)}}id="author-input" type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label className="form-label">#ISBN</label>
        <input value={isbnNumber} onChange={(event)=>{setIsbnNumber(event.target.value)}}id="isbn-input" type="text" className="form-control"/>
      </div>

      <div className="d-grid gap-2">
         <button onSubmit={(event)=>{formSubmit(event)}}
          className="btn btn-secondary">
            SUBMIT
         </button>
      </div>

    </form>
    )
}
