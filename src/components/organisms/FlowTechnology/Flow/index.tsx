'use client'

import React, { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  NodeTypes,
  Edge,
  useNodesState,
  useEdgesState,
  OnConnect,
  addEdge
} from 'reactflow'

import NodeMain from '@/components/organisms/FlowTechnology/Nodes/Main'
import NodeDefault from '@/components/organisms/FlowTechnology/Nodes/Default'
import { InNodeTechnologies } from '@/services/api/actions/technologies/types'

import 'reactflow/dist/base.css'
import styles from './styles.module.scss'
import { FlowTechnologyControl as Controls } from '../Control'

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
  const onConnect = useCallback<OnConnect>(
    async (params) => {
      return setEdges((eds) => addEdge(params, eds))
    },
    [setEdges]
  )

  const reset = useCallback(() => {
    setNodes([...nodes])
    setEdges([...edges])
  }, [nodes, edges, setNodes, setEdges])

  return (
    <>
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
        <MiniMap className={styles.map} />

        <Controls reset={reset} />
      </ReactFlow>
    </>
  )
}
