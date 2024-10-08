import { Icon } from '@iconify/react'
import { ComponentProps } from 'react'

interface InIconTech extends ComponentProps<'div'> {
  icon: string
}

export default function IconTech({
  icon,
  className = '',
  ...props
}: InIconTech) {
  return (
    <div
      {...props}
      className={`border border-gray-300 bg-white rounded w-10 h-10 flex justify-center items-center shadow-md ${className}`}
    >
      <Icon icon={icon} className="text-xl" />
    </div>
  )
}
