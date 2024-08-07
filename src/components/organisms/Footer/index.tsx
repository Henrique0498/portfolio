import styles from './styles.module.scss'
import IconLink from '@/components/atoms/IconLink'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.container}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="order-3 md:order-1">{year} © Copyright</span>

        <nav className="order-2 md:order-2">
          <ul className="flex gap-4 flex-col sm:flex-row  text-gray-400">
            <li>
              <span className="line-through cursor-not-allowed">Projetos</span>
            </li>
            <li>
              <span className="line-through cursor-not-allowed">Currículo</span>
            </li>
          </ul>
        </nav>

        <nav className="order-1 md:order-3">
          <ul className="flex gap-4 text-2xl">
            <li>
              <IconLink
                content="LinkedIn"
                href="https://www.linkedin.com/in/henrique-ls/"
                icon="simple-icons:linkedin"
                target="_blank"
              />
            </li>
            <li>
              <IconLink
                content="GitHub"
                href="https://github.com/Henrique0498"
                icon="simple-icons:github"
                target="_blank"
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
