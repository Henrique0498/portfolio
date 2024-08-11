import { Tooltip as NextUiTooltip, TooltipProps } from '@nextui-org/react'

interface InTooltip extends TooltipProps {}

export default function Tooltip({
  content,
  children,
  className,
  ...props
}: InTooltip) {
  if (!content) {
    return children
  }

  return (
    <NextUiTooltip
      {...props}
      content={content}
      className={`rounded-lg ${className}`}
    >
      {children}
    </NextUiTooltip>
  )
}
