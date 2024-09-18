import { Trash } from '@phosphor-icons/react' 

import styles from './Tasks.module.css'

export function Tasks() {
    return(
        <div className={styles.tasksToDo}>
            <input type="checkbox" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi dolorem architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <button><Trash size={16} /></button>
        </div>
    )
}