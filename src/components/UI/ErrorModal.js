import React from 'react'
import { Card } from './Card';
import { Button } from './Button';
import styles from './ErrorModal.module.css';

export const ErrorModal = props => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.error}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClick}>Ok</Button>
        </footer>
      </Card>
    </div>
  )
}
