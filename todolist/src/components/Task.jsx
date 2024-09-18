import { useState } from 'react'
import { Trash } from '@phosphor-icons/react' 

import styles from './Tasks.module.css'

export function Task({ content, deleteTask }) {
    //useState para alterar o className
    const [isChecked, setIsChecked] = useState(false)

    //function para inverter o valor do checkbox
    function handleCheckboxChange() {
        setIsChecked(!isChecked)
    }

    function handleDeleteTask() {
        deleteTask(content)
    }

    return(
        <div className={isChecked ? styles.tasksDone : styles.tasksToDo}>
            <input 
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            />

            <p>{content}</p>

            <button 
            className={styles.deleteButton}
            onClick={handleDeleteTask}
            >
                <Trash size={16} />
            </button>
        </div>
    )
}