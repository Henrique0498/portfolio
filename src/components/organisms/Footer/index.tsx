import NavLink from '@/components/atoms/NavLink'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink href="https://www.linkedin.com/in/henrique-ls/">
              LinkedIn
            </NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/Henrique0498">Github</NavLink>
          </li>
          <li>
            <NavLink href="/">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
