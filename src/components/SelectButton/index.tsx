import { AnswerType, ButtonContainer, ButtonText } from './styles'
import { ReactNode } from 'react'

type Props = {
  type: 'yes' | 'no'
  children?: ReactNode
}

export function SelectButton({ children, type }: Props) {
  return (
    <ButtonContainer>
      <AnswerType type={type} />
      <ButtonText>{type === 'no' ? 'Não' : 'Sim'}</ButtonText>
    </ButtonContainer>
  )
}
