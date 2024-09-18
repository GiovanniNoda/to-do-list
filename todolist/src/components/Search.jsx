import { Empty } from './Empty'
import { Task } from './Task'
import { useState } from 'react'

import plus from '../assets/plus.svg'
import styles from './Search.module.css'

export function Search() {
    const [tasks, setTasks] = useState([])

    const [newTaskInput, setNewTaskInput] = useState('')

    const [createTasksCount, setCreateTasksCount] = useState(0)

    const [concludedTasksCount, setConcludedTasksCount] = useState(0)

    //função criada para criar novas tarefas
    function handleCreateNewTask() {
        event.preventDefault()

        const newTask = event.target.inputTask.value

        setTasks([...tasks, newTask])
        setNewTaskInput('')

        setCreateTasksCount((stage) => {
            return stage + 1
        })
    }

    function handleNewTaskInput() {
        event.target.setCustomValidity('')
        setNewTaskInput(event.target.value)
    }

    function handleInvalidTask() {
        event.target.setCustomValidity('O campo de tarefas é obrigatório.')
    }

    function deleteTask(taskToDelete) {
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
                    <span className={styles.createNumber}>{createTasksCount}</span>
                </span>

                <span className={styles.concludeTasks}>
                    Concluídas
                    <span className={styles.concludedNumber}>{concludedTasksCount}</span>
                </span>
            </section>

            <div className={styles.tasksWrapper}>
                {tasks.length == 0 ? (
                    <Empty />
                    ) : (
                    tasks.map((task => {
                        return <Task 
                        content={task} 
                        key={task}
                        deleteTask={deleteTask}
                        />
                         }))
                    )
                }
            </div>
        </main>
    )
}