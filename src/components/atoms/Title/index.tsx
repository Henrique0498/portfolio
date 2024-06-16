import styles from './styles.module.scss'
interface InTitle extends React.ComponentPropsWithRef<'h1'> {}

const Title = ({ children, className = '', ...props }: InTitle) => {
  return (
    <h1 {...props} className={`${styles.container} ${className}`}>
      {children}
    </h1>
  )
}
export default Title
