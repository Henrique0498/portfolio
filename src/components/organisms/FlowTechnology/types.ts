import { InNodeTechnologiesData } from '@/services/api/actions/technologies/types'
import { NodeProps } from 'reactflow'

export interface InNodeTechnologiesProps extends NodeProps {
  data: InNodeTechnologiesData
}
