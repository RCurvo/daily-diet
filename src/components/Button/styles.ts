import { Text, View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  variant: 'primary' | 'secondary'
  pressed?: boolean
}

export const ButtonContainer = styled(View)<Props>`
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: ${({ theme, variant, pressed }) =>
    variant === 'primary'
      ? pressed
        ? theme.COLORS.GRAY_1
        : theme.COLORS.GRAY_2
      : pressed
      ? theme.COLORS.GRAY_5
      : 'transparent'};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-top: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  border-width: 1px;
  border-color: ${({ theme, variant }) =>
    variant === 'primary' ? 'transparent' : theme.COLORS.GRAY_1};
`
export const ButtonText = styled(Text)<Props>`
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  margin-left: 12px;
`
