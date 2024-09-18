import listImg from '../assets/Clipboard.svg'
import styles from './Empty.module.css'

export function Empty() {
    return(
        <div className={styles.container}>
            <img src={listImg} />

            <p className={styles.firstP}>Você ainda não tem tarefas cadastradas</p>
            
            <p className={styles.secondP}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}