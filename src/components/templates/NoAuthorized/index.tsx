import ImageCustom from '@/components/atoms/ImageCustom'

import styles from './styles.module.scss'

export default function NoAuthorized() {
  return (
    <main className={`${styles.container} container`}>
      <h2 className="text-8xl text-red-500 font-bold">403</h2>

      <p className="text-center">
        Você não tem permissão para visualizar esta página.
      </p>

      <ImageCustom
        alt="Desenho de um robô no espaço"
        height={320}
        src="/images/robot-space.svg"
        width={320}
      />
    </main>
  )
}
