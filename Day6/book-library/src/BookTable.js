import React from 'react'

export default function BookTable() {
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
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
