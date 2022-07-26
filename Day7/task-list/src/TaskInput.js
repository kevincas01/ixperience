import React,{useState} from 'react';
import {Task} from './task';

export default function TaskInput(props) {

    const [taskName,setTaskName]=useState("");
    function submitTask(event){
        event.preventDefault();
        const task= new Task(taskName, false, 0);
        props.onTaskSubmit(task);

        setTaskName("");
    }

    return (
        <div>
            <form onSubmit={(event)=>{submitTask(event)}}>
            <div className="input-group mb-3">
                <input value={taskName} onChange={(event)=>setTaskName(event.target.value)} type="text" className="form-control" placeholder="Task" id="task-input"/>
                <button onClick={(event)=>{submitTask(event)}}className="btn btn-outline-secondary" type="button" id="button-add">+</button>
            </div>
            </form>
        </div>
    )
}

