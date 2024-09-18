import { Header } from './components/Header'
import { Search } from './components/Search'
import { Empty } from './components/Empty'
import { Tasks } from './components/Tasks'

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
          <Tasks />
        </div>
      </div>
  )
}

export default App
