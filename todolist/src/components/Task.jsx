import { useState } from 'react'
import { Trash } from '@phosphor-icons/react' 

import styles from './Tasks.module.css'

export function Task({ content, onDeleteTasks }) {
    //useState para alterar o className
    const [isChecked, setIsChecked] = useState(false)

    //function para inverter o valor do checkbox
    function handleCheckboxChange() {
        setIsChecked(!isChecked)
    }
    return(
        <div className={isChecked ? styles.tasksDone : styles.tasksToDo}>
            <input 
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi dolorem architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <button className={styles.deleteButton}><Trash size={16} /></button>
        </div>
    )
}