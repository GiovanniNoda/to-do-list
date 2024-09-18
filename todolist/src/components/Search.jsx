import plus from '../assets/plus.svg'
import styles from './Search.module.css'

export function Search() {
    return(
        <main>
            <form>
                <input type="text" placeholder='Adcione uma nova tarefa' className={styles.inputTasks} />

                <button className={styles.createButton}>Criar <img src={plus}/> </button>
            </form>

            <section className={styles.sectionTasks}>
                <span className={styles.createdTasks}>
                    Tarefas criadas
                    <span className={styles.createNumber}>0</span>
                </span>

                <span className={styles.concludeTasks}>
                    Concluídas
                    <span className={styles.concludedNumber}>0</span>
                </span>
            </section>
        </main>
    )
}