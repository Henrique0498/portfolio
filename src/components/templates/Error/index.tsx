import ImageCustom from '@/components/atoms/ImageCustom'
import styles from './styles.module.scss'
import Link from '@/components/atoms/Link'

interface InError {
  tryAgain(): void
  error?: Error
}

export default function Error({ error }: InError) {
  const [title, link] = getTextByError(error)
  const stack = error?.stack ?? 'Infelizmente algum erro inesperado aconteceu'

  return (
    <main className={styles.container}>
      <ImageCustom
        alt="Desenho de um robô no espaço"
        height={320}
        src="/images/error-warning.svg"
        width={320}
      />

      {link ? (
        <Link
          href={link}
          className="text-center text-8xl text-red-500 font-bold text-wrap"
          target="_blank"
        >
          {title}
        </Link>
      ) : (
        <h2 className="text-8xl text-red-500 font-bold text-wrap">{title}</h2>
      )}

      <div className={styles.stack}>{stack}</div>
    </main>
  )
}

function getTextByError(error?: Error) {
  if (error?.message) {
    const index = error.message.indexOf('.') + 1
    const text = error.message.slice(0, index)
    const link = error.message.slice(index)
    const linkIsValid = link.includes('https') ? link : undefined

    return [text, linkIsValid]
  }

  return ['Erro', undefined]
}
