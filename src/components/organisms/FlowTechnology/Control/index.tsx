import { Controls, useReactFlow } from 'reactflow'

import styles from './styles.module.scss'
import Button from '@/components/atoms/Button'
import { useState } from 'react'

export interface InFlowTechnologyControl {
  reset(): void
}

export function FlowTechnologyControl({ reset }: InFlowTechnologyControl) {
  const reactFlow = useReactFlow()
  const [unlock, setUnlock] = useState(false)

  function handleLock() {
    setUnlock((before) => !before)
  }

  return (
    <>
      <div
        className={`${styles.lock} flex transition-all ${unlock ? 'z-10' : 'opacity-0 z-0'}`}
      >
        <div className="relative">
          <h3 className="text-2xl m-2">Mapa mental</h3>
          <p className="mb-8 text-center">
            Exemplo de como as tecnologias funcionam.
          </p>
          <Button icon="hugeicons:square-unlock-02" onClick={handleLock}>
            Desbloquear
          </Button>
        </div>
      </div>

      <Controls
        className={styles.container}
        showInteractive={false}
        position="top-left"
        showFitView={false}
        showZoom={false}
      >
        <Button
          icon="hugeicons:square-arrow-expand-01"
          content="Enquadrar"
          color="light"
          name="Enquadrar"
          onClick={() => reactFlow.fitView()}
        />
        <Button
          icon="hugeicons:zoom-in-area"
          content="Aproximar"
          color="light"
          name="Aproximar"
          onClick={() => reactFlow.zoomIn()}
        />
        <Button
          icon="hugeicons:zoom-out-area"
          content="Afastar"
          color="light"
          name="Afastar"
          onClick={() => reactFlow.zoomOut()}
        />
        <Button
          icon="hugeicons:reload"
          content="Desfazer alterações"
          color="light"
          name="Desfazer alterações"
          onClick={reset}
        />
        <Button
          icon="hugeicons:square-lock-01"
          content="Bloquear"
          color="light"
          name="Bloquear"
          onClick={handleLock}
        />
      </Controls>
    </>
  )
}
