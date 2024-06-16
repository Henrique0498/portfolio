import ImageCustom from '@/components/atoms/ImageCustom'
import styles from './styles.module.scss'

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <ImageCustom
          alt="Logo"
          src={
            'https://raw.githubusercontent.com/Henrique0498/Henrique0498/e297ec588fdbf835ce51e5ef7035bde86ee3b480/img/Logo.svg'
          }
          width={40}
          height={40}
          quality={100}
          priority
        />
      </div>
      <h1 className="textBodyBold">Henrique Lopes</h1>
    </div>
  )
}
