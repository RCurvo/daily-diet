import { ButtonContainer, ButtonText } from './styles'
import { ReactNode } from 'react'

type Props = {
  title: string
  children?: ReactNode
}

export function Button({ children, title }: Props) {
  return (
    <ButtonContainer activeOpacity={0.9}>
      {children}
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}
