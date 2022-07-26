import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDocs,
  query,
} from "firebase/firestore";

import { firestore } from "./firebase";
import { Task } from "../task";

class TaskService {
  constructor() {
    this.collection = "tasks";
  }


  async createTask(task) {
    const collectionRef = collection(firestore, this.collection);

    const docRef = await addDoc(collectionRef, {
      name: task.task,
      complete: task.complete,
    });

    task.id = docRef.id;
    console.log()
    return task;
  }

  async readTasks() {
    const collectionReference = collection(firestore, this.collection);
    const q = query(collectionReference);

    const querySnapshot = await getDocs(q);

    const tasks = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      const task = new Task(
        data.name,
        data.complete,
        doc.id,
      );
      tasks.push(task);
    });

    return tasks;
  }


  async removeTask(task) {
      await deleteDoc(doc(firestore,this.collection,task.id));
  }
  async updateTask(task) {
    const docRef = doc(firestore, this.collection, task.id); //Get reference to the "tasks" collection and the item with the id of task.id

    await updateDoc(docRef, { name: task.task, complete: task.complete });

    return task;
  }
  
}
const service =new TaskService();
export default service;
