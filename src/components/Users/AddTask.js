import React, { useState } from 'react'
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { ErrorModal } from '../UI/ErrorModal';
import styles from './AddTask.module.css';

export const AddTask = props => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState();

  const addNewTask = (event) => {
    event.preventDefault();
    if (task.trim().length === 0 || deadline.trim().length === 0) {
      setError({
        title: 'Invalid task',
        error: 'Please type something into the input fields'
      })
      return;
    }
    props.onAddNewTask(task, deadline);
    setTask('');
    setDeadline('');
  };

  const taskHandler = ({ target }) => {
    setTask(target.value);
  }

  const deadlineHandler = ({ target }) => {
    setDeadline(target.value);
  }

  const clearError = () => {
    setError(null);
  }

  return (
    <>
    { error && <ErrorModal title={ error.title } error={ error.error } onClick={clearError} /> }
      <Card className={styles.input}>
        <form onSubmit={ addNewTask }>
          <label htmlFor="task">Task</label>
          <input
            id="task"
            type="text"
            onChange={taskHandler}
            value={task}
            />
          <label htmlFor="duedate">Deadline</label>
          <input
            id="deadline"
            type="date"
            onChange={deadlineHandler}
            value={deadline}  
            />
          <Button type="submit">Add new task</Button>
        </form>
      </Card>
    </>
    )
}
