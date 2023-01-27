import { TextInput, View } from 'react-native'
import styled from 'styled-components/native'

type StyledInputProps = {
  variant?: 'small' | 'large' | 'regular'
}

export const Container = styled(View)<StyledInputProps>`
  width: ${({ variant }) => (variant === 'small' ? 97.5 : 100)}%;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: transparent;
`
// figure out how to style focus input
export const StyledInput = styled(TextInput)<StyledInputProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  padding: 14px;
  height: ${({ variant }) => (variant === 'large' ? 142 : 48)}px;
  margin-bottom: 24px;
`

export const TextLabel = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  line-height: 18.2px;
  margin-bottom: 4px;
`
