import React from 'react'
import { Card } from '../UI/Card'
import styles from './TasksList.module.css';

export const TasksList = props => {
  return (
    <Card className={ styles.tasks }>
      <ul>
        { props.tasks?.map((task, index) => (
          <li key={ index }>
            <div>
              { task.task } 
            </div>
            <div className={ styles.details }>
              <span>
                Created on { task.created }
              </span>
              <span>
                Due date: { task.deadline }
              </span>
            </div>
          </li>
        )) }
      </ul>
    </Card>
  )
}
