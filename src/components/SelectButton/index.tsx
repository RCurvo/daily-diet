import { AnswerType, ButtonContainer, ButtonText } from './styles'
import { ReactNode } from 'react'
import { PressableProps, View } from 'react-native'

type Props = {
  type: 'yes' | 'no'
  isActive?: boolean
  children?: ReactNode
} & PressableProps

export function SelectButton({
  children,
  type,
  onPress,
  onFocus,
  isActive = false,
  ...rest
}: Props) {
  return (
    <ButtonContainer
      type={type}
      Isactive={isActive}
      onPress={onPress}
      onFocus={onFocus}
      {...rest}
    >
      <AnswerType type={type} />
      <ButtonText>{type === 'no' ? 'Não' : 'Sim'}</ButtonText>
    </ButtonContainer>
  )
}
