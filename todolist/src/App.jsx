import { Header } from './components/Header'
import { Search } from './components/Search'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
      <div>
        <Header />

        <div className={styles.searchWrapper}>
          <Search />
        </div>
      </div>
  )
}

export default App
