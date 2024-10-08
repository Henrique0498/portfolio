import { Skeleton as SkeletonNextUi, SkeletonProps } from '@nextui-org/react'

interface InSkeleton extends SkeletonProps {}

export default function Skeleton(props: InSkeleton) {
  return <SkeletonNextUi {...props} />
}
