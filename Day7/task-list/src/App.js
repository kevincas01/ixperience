import "bootstrap/dist/css/bootstrap.css";
import TaskInput from "./TaskInput";
import TaskTable from  './TaskTable';
import {useState} from 'react'
function App() {

  const [tasks, setTasks]=useState([]);

  function onTaskSubmit(task){
    const newTasks=[...tasks,task];
    setTasks(newTasks);
  }

  function onCompleteUpdate(task){
    const newTasks=tasks.map((t)=>{
        return task.id===t.id ? task : t;
    });

    setTasks(newTasks);
  }

  function onRemoveTask(task){
      const newTasks=tasks.filter((t)=>{
        return task.id!==t.id;
      });

      setTasks(newTasks);
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <h2>Our simple task list</h2>
        
        <TaskInput onTaskSubmit={onTaskSubmit}></TaskInput>

        <TaskTable tasks={tasks} onCompleteUpdate={onCompleteUpdate} onRemoveTask={onRemoveTask}></TaskTable>
        
      </div>
    </div>
  );
}

export default App;
