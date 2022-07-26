import "bootstrap/dist/css/bootstrap.css";
import TaskInput from "./TaskInput";
import TaskTable from  './TaskTable';

import {useEffect, useState} from 'react'

import service from "./firebase/task.service"
function App() {

  const [tasks, setTasks]=useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const tasks = await service.readTasks();
      setTasks(tasks);
    } catch(err) {
      console.log(err);
    }
  }

  async function onTaskSubmit(task){
    try{
      task=await service.createTask(task)
      const newTasks=[...tasks,task];
    setTasks(newTasks);
    }
    catch(err){
      console.log(err);
    }
    
  }

  async function onCompleteUpdate(task){

    try {
      task = await service.updateTask(task);

      console.log(tasks)
      const newTasks = tasks.map((t) => {
        return t.id === task.id ? task : t;
      });
      setTasks(newTasks);
    } catch(err) {
      console.log(err);
    }
    
  }

  async function onRemoveTask(task){

    try{
      await service.removeTask(task);

      const newTasks=tasks.filter((t)=>{
        return task.id!==t.id;
      });

      setTasks(newTasks);
    }
    catch(err){
      console.log(err);
    }
      
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
