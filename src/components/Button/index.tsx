import { ButtonContainer, ButtonText } from './styles'
import { ReactNode } from 'react'
import { Pressable, TouchableOpacityProps } from 'react-native'

type Props = {
  title: string
  children?: ReactNode
  variant?: 'primary' | 'secondary'
} & TouchableOpacityProps

export function Button({
  children,
  title,
  variant = 'primary',
  ...rest
}: Props) {
  return (
    <Pressable>
      {({ pressed }) => (
        <ButtonContainer
          pressed={pressed}
          variant={variant}
          activeOpacity={variant === 'primary' ? 0.8 : 0.3}
          {...rest}
        >
          {children}
          <ButtonText variant={variant}>{title}</ButtonText>
        </ButtonContainer>
      )}
    </Pressable>
  )
}
