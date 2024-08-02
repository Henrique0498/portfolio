'use client'

import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  NodeTypes,
  Edge,
  useNodesState,
  useEdgesState,
  OnConnect,
  addEdge
} from 'reactflow'
import { HiArrowPath, HiLockClosed, HiLockOpen } from 'react-icons/hi2'

import Button from '@/components/atoms/Button'
import NodeMain from '@/components/organisms/FlowTechnology/Nodes/Main'
import NodeDefault from '@/components/organisms/FlowTechnology/Nodes/Default'
import Loading from '@/components/atoms/Loading'

import { InNodeTechnologies } from '@/services/api/actions/technologies/types'

import 'reactflow/dist/base.css'
import styles from './styles.module.scss'

export interface InFlowTechnologyDisplay {
  nodes: InNodeTechnologies[]
  edges: Edge[]
}

const nodeTypes: NodeTypes = {
  default: NodeDefault,
  main: NodeMain
}

export function FlowTechnologyDisplay({
  edges,
  nodes
}: InFlowTechnologyDisplay) {
  const [nodesState, setNodes, onNodesChange] = useNodesState(nodes)
  const [edgesState, setEdges, onEdgesChange] = useEdgesState(edges)

  const [unlock, setUnlock] = useState(true)
  const [loading, setLoading] = useState(true)

  const onConnect = useCallback<OnConnect>(
    async (params) => {
      return setEdges((eds) => addEdge(params, eds))
    },
    [setEdges]
  )

  useEffect(() => {
    setLoading(false)
  }, [])

  function handleLock() {
    setUnlock((before) => !before)
  }

  function handleReset() {
    setNodes([...nodes])
    setEdges([...edges])
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
    </>
  )
}
