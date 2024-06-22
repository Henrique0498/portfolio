'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  NodeTypes,
  OnConnect,
  Edge,
  ReactFlowRefType
} from 'reactflow'
import 'reactflow/dist/base.css'

import TechnologyItemMain, {
  TyTechnologyItemMainData
} from '@/components/molecules/TechnologyItemMain'
import TechnologyItem, {
  TyTechnologyItemData
} from '@/components/molecules/TechnologyItem'

import styles from './styles.module.scss'
import Button from '@/components/atoms/Button'
import { HiArrowPath, HiLockClosed, HiLockOpen } from 'react-icons/hi2'
import Loading from '@/components/atoms/Loading'

const nodeTypes: NodeTypes = {
  item: TechnologyItem,
  main: TechnologyItemMain
}

interface InFlowTechnology {
  nodes: InTechnologyNodes[]
  edges: Edge[]
}

export interface InTechnologyNodes {
  data: TyTechnologyItemData | TyTechnologyItemMainData
  id: string
  type: 'item' | 'main'
  position: { x: number; y: number }
}

export default function FlowTechnology({ edges, nodes }: InFlowTechnology) {
  const [nodesState, setNodes, onNodesChange] = useNodesState(nodes)
  const [edgesState, setEdges, onEdgesChange] = useEdgesState(edges)
  const refFlow = useRef<ReactFlowRefType>(null)
  const [unlock, setUnlock] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const onConnect = useCallback<OnConnect>(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  function handleLock() {
    setUnlock((before) => !before)
  }

  function handleReset() {
    setNodes([...nodes])
    setEdges([...edges])
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.lock} flex transition-all ${unlock ? 'z-10' : 'opacity-0 z-0'}`}
      >
        <div className="relative">
          <h3 className="text-2xl m-2">Mapa mental</h3>
          <p className="mb-8 text-center">
            Exemplo de como as tecnologias funcionam.
          </p>
          <Button startContent={<HiLockOpen />} onClick={handleLock}>
            Desbloquear
          </Button>

          {loading && <Loading title="Carregando..." />}
        </div>
      </div>

      <ReactFlow
        nodes={nodesState}
        edges={edgesState}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        ref={refFlow}
        aria-disabled
        className={styles.flow}
      >
        <div className={'absolute p-4 z-10 gap-2 flex'}>
          <Button startContent={<HiLockClosed />} onClick={handleLock}>
            Bloquear
          </Button>

          <Button
            startContent={<HiArrowPath />}
            onClick={handleReset}
            color="default"
          >
            Restaurar
          </Button>
        </div>

        <MiniMap className={styles.map} />
        <Controls className={styles.control} />
      </ReactFlow>
    </div>
  )
}
