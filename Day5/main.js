class Task{
    constructor(task,completed){
        this.task=task;
        this.completed=completed;
    }
}

class UserInterface {
    constructor() {
      this.taskInput = document.getElementById('task-input');
      this.btnInput = document.getElementById('button-add');
      this.tableBody = document.getElementById('table-body');
  
      this.tasks = [];
    }
  
    bindEventListeners() {
      this.btnInput.addEventListener('click', (event) => this.addTasks(event));
    }
  
    addTasks(event) {
      if(this.taskInput.value){

      event.preventDefault();

      const task = new Task(
        this.taskInput.value,
        "Not Completed"
      );
  
      this.tasks.push(task);
      this.populateTable();
  
      this.taskInput.value = '';
      }
    }
  
    populateTable() {
  
      this.tableBody.innerHTML = '';
  
      for (const task of this.tasks) {
        const row = document.createElement('tr');
  
        const taskCell = document.createElement('td');
        const completedCell = document.createElement('td');
        const actionBtnCell = document.createElement('td');
  
        const checkButton = document.createElement('button');
        checkButton.classList.add("btn");
        checkButton.classList.add("btn-secondary");
  
        taskCell.innerHTML = task.task;
        completedCell.innerHTML = task.completed;
        checkButton.innerHTML = 'Complete task';
  
        checkButton.addEventListener('click', (e) => this.onCheckButtonClick(task));
        actionBtnCell.append(checkButton);
  
        row.append(taskCell);
        row.append(completedCell);
        row.append(actionBtnCell);
        this.tableBody.append(row);
      }
  
    }
  
    onCheckButtonClick(task) {

      task.completed="Completed"


      this.populateTable();
    }
  }

const ui = new UserInterface();
ui.bindEventListeners();