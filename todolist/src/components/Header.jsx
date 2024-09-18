import styles from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={rocket} alt="Logo" />
            <h1>
                <span className={styles.blueSpan}>to</span><span className={styles.purpleSpan}>do</span>
            </h1>
        </header>
    )
}