import { useState } from 'react'
import { Trash } from '@phosphor-icons/react' 

import styles from './Tasks.module.css'

export function Task({ content, deleteTask, isChecked, toggleTask }) {
      return(
        <div className={isChecked ? styles.tasksDone : styles.tasksToDo}>
            <input 
            type="checkbox"
            checked={isChecked}
            onChange={toggleTask}
            />

            <p>{content}</p>

            <button 
            className={styles.deleteButton}
            onClick={deleteTask}
            >
                <Trash size={18} />
            </button>
        </div>
    )
}