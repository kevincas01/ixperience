import React from 'react'

export default function BookInput() {
    return (
    <form id="form">

      <div className="mb-3">
        <label className="form-label">Title</label>
        <input id="title-input" type="text" class="form-control"/>
      </div>

      <div className="mb-3">
        <label className="form-label">Author</label>
        <input id="author-input" type="text" class="form-control"/>
      </div>

      <div className="mb-3">
        <label className="form-label">#ISBN</label>
        <input id="isbn-input" type="text" class="form-control"/>
      </div>

      <div className="d-grid gap-2">
         <button className="btn btn-secondary">
            SUBMIT
         </button>
      </div>

    </form>
    )
}
