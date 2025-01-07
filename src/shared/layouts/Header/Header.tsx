
import netflixLogo from '@/assets/images/netflix.png';
import styles from './Header.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {

  const { pathname } = useLocation();

  return (
    <header className={`${styles.header} bg-gradient-to-b from-black sm:px-12 md:px-16 lg:px-22 `}>
        <div className={styles.logo}>
          <NavLink to={'/'}>
            <img src={netflixLogo} alt='netflix-logo' />
          </NavLink>
        </div>
        <ul className={styles.links}>
          {
            pathname === '/login' ? null : 
            <li className={styles.link}>
              <NavLink to='/login' className={`${styles.btn} bg-red-600 text-white px-4 py-2 rounded`}>Sign up</NavLink>
            </li>
          }
        </ul>
    </header>
  )
}
