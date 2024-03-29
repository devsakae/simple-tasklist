import React, { useEffect, useState } from 'react';
import { AddTask } from './components/Users/AddTask';
import { TasksList } from './components/Users/TasksList';

function App() {
const [tasksList, setTasksList] = useState([]);
document.title = 'My simple tasklist';

const addTaskHandler = (newTask) => {
  setTasksList((prev) => {
    return [
      ...prev,
      { task: newTask, created: new Date().toLocaleDateString() }
    ];
  });
}

  return (
    <div>
      <AddTask onAddNewTask={addTaskHandler} />
      <TasksList tasks={tasksList} />
    </div>
  );
}

export default App;
