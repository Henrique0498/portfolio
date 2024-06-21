'use client'

import React, { useCallback } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  NodeTypes,
  OnConnect,
  Edge
} from 'reactflow'
import 'reactflow/dist/base.css'

import TechnologyItemMain, {
  TyTechnologyItemMainData
} from '@/components/molecules/TechnologyItemMain'
import TechnologyItem, {
  TyTechnologyItemData
} from '@/components/molecules/TechnologyItem'

import styles from './styles.module.scss'

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

  const onConnect = useCallback<OnConnect>(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <ReactFlow
      nodes={nodesState}
      edges={edgesState}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      onReset={() => setNodes(nodes)}
      fitView
      className={styles.container}
    >
      <MiniMap className={styles.map} />
      <Controls className={styles.control} />
    </ReactFlow>
  )
}
