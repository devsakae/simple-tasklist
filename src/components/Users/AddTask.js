import React, { useState, useRef } from 'react'
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { ErrorModal } from '../UI/ErrorModal';
import styles from './AddTask.module.css';

export const AddTask = props => {
  const [error, setError] = useState();
  const taskInputRef = useRef();

  const addNewTask = (event) => {
    event.preventDefault();
    const task = taskInputRef.current.value;
    if (task.trim().length === 0) {
      setError({
        title: 'Invalid task',
        error: 'Please type something into the input fields'
      })
      return;
    }
    props.onAddNewTask(task);
  };

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
            ref={ taskInputRef }
            />
          <Button type="submit">Add new task</Button>
        </form>
      </Card>
    </>
    )
}
