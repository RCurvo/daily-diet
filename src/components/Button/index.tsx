import { ButtonContainer, ButtonText } from './styles'
import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

type Props = {
  title: string
  children?: ReactNode
} & TouchableOpacityProps

export function Button({ children, title, ...rest }: Props) {
  return (
    <ButtonContainer activeOpacity={0.9} {...rest}>
      {children}
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}
