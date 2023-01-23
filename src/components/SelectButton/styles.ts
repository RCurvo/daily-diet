import { View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  type: 'yes' | 'no'
}

export const ButtonContainer = styled.Pressable`
  flex-direction: row;
  width: 48.5%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-top: 8px;
  margin-bottom: 38px;
`
export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  margin-left: 12px;
`

export const AnswerType = styled(View)<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'no' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
`
