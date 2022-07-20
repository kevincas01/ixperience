import React from 'react'

export default function TaskTable(props) {

    function toggleComplete(task){
        task.complete=!task.complete;
        props.onCompleteUpdate(task);
    }

    function removeTask(task){
        props.onRemoveTask(task);
    }

    return (
        <div>
            <table className="table table-dark text-center">
                    <thead>
                        <tr>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        {props.tasks.map((task)=>
                            <tr key={task.id}>
                                <td>{task.task}</td>
                                <td>{task.complete ? "Complete" : "Not Complete"}</td>
                                <td>
                                    <button onClick={()=>toggleComplete(task)} className="btn btn-secondary btn-sm "> {task.complete? "Uncheck": "Check"}</button>
                                    <button onClick={()=>removeTask(task)} className="btn btn-secondary btn-sm ms-2">Remove Task</button>
                                </td>

                            </tr>
                            )

                        }
                    </tbody>
                </table>
        </div>
    )
}
