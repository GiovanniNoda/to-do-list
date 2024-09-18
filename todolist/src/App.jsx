import { Header } from './components/Header'
import { Search } from './components/Search'
import { Empty } from './components/Empty'
import { Task } from './components/Task'
import { useState } from 'react'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
      <div>
        <Header />

        <div className={styles.searchWrapper}>
          <Search />
        </div>

        <div className={styles.tasksWrapper}>
          <Task />
        </div>
      </div>
  )
}

export default App
