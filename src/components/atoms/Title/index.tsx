import styles from './styles.module.scss'
import '@testing-library/jest-dom'

interface InTitle extends React.ComponentPropsWithRef<'h1'> {}

const Title = ({ children, className = '', ...props }: InTitle) => {
  return (
    <h1 {...props} className={`${styles.container} ${className}`}>
      {children}
    </h1>
  )
}
export default Title
