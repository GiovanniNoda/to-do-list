import { Empty } from './Empty'
import { Task } from './Task'
import { useState } from 'react'

import plus from '../assets/plus.svg'
import styles from './Search.module.css'

export function Search() {
    const [tasks, setTasks] = useState([])

    const [pendingTasks, setPendingTasks] = useState(0)

    const [completedTasks, setCompletedTasks] = useState(0)

    const [newTaskInput, setNewTaskInput] = useState('')

    //função criada para criar novas tarefas
    function handleCreateNewTask() {
        event.preventDefault()

        const newTask = event.target.inputTask.value

        setTasks([...tasks, newTask])
        setPendingTasks(pendingTasks + 1)
        setNewTaskInput('')
    }

    //função para limpar o campo do input
    function handleNewTaskInput() {
        event.target.setCustomValidity('')
        setNewTaskInput(event.target.value)
    }

    //função para mensagem de input obrigatório
    function handleInvalidTask() {
        event.target.setCustomValidity('O campo de tarefas é obrigatório.')
    }

    //função para deleter uma tarefa
    function deleteTask(taskToDelete) {
        if(taskToDelete.isChecked) {
            setCompletedTasks(completedTasks - 1)
        } else {
            setPendingTasks(pendingTasks - 1)
        }

        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne)
    }

    return(
        <main>
            <form onSubmit={handleCreateNewTask}>
                <input 
                type="text" placeholder='Adcione uma nova tarefa' 
                className={styles.inputTasks}
                name='inputTask'
                value={newTaskInput}
                onChange={handleNewTaskInput}
                required
                onInvalid={handleInvalidTask}
                />

                <button type='submit' className={styles.createButton}>Criar <img src={plus}/> </button>
            </form>

            <section className={styles.sectionTasks}>
                <span className={styles.createdTasks}>
                    Tarefas criadas
                    <span className={styles.createNumber}>{pendingTasks}</span>
                </span>

                <span className={styles.concludeTasks}>
                    Concluídas
                    <span className={styles.concludedNumber}>{completedTasks}</span>
                </span>
            </section>

            <div className={styles.tasksWrapper}>
                {tasks.length == 0 ? (
                    <Empty />
                    ) : (
                    tasks.map((task => {
                        return(
                            <Task 
                            content={task} 
                            key={task}
                            deleteTask={deleteTask}
                            />
                        )
                         }))
                    )
                }
            </div>
        </main>
    )
}