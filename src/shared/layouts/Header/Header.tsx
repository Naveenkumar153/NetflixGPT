
import netflixLogo from '../../assets/images/netflix.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src={netflixLogo} alt='netflix-logo'/>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
              <button className={styles.btn}>Sign in</button>
            </li>
        </ul>
    </header>
  )
}
