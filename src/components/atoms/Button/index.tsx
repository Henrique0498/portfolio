import { Button as ButtonNextUI, ButtonProps } from '@nextui-org/react'

interface InButton extends ButtonProps {}

export default function Button({ color = 'primary', ...props }: InButton) {
  return <ButtonNextUI {...props} color={color} />
}
