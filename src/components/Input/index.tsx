import { Container, StyledInput, TextLabel } from './styles'
import { TextInputProps } from 'react-native'

type BasicInputProps = {
  label: string
  variant?: 'small' | 'large' | 'regular'
} & TextInputProps

export function BasicInput({
  onFocus,
  label,
  variant = 'regular',
  style,
  textAlignVertical,
  ...rest
}: BasicInputProps) {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <StyledInput textAlignVertical="top" {...rest} variant={variant} />
    </Container>
  )
}
