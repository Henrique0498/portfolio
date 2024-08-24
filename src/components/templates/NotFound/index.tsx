'use client'

import { useRouter } from 'next/navigation'

import ImageCustom from '@/components/atoms/ImageCustom'
import Button from '@/components/atoms/Button'

import styles from './styles.module.scss'

export default function NotFound() {
  const router = useRouter()

  return (
    <main className={styles.container}>
      <ImageCustom
        alt="Desenho de um robô no espaço"
        height={320}
        src="/images/rocket-orbiting-earth.svg"
        width={320}
      />

      <h2 className="text-8xl text-red-500 font-bold">404</h2>

      <p className="text-center">Não foi possível encontrar esta página.</p>

      <Button onClick={router.back}>Voltar</Button>
    </main>
  )
}
