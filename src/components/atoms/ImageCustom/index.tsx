import Image, { ImageProps } from 'next/image'
import styles from './styles.module.scss'

interface InImageCustom extends ImageProps {
  src: string
  width: number
  height: number
  quality?: number
}

export default function ImageCustom({
  className = '',
  ...props
}: InImageCustom) {
  return <Image {...props} className={`${styles.container} ${className}`} />
}
