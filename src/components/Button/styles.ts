import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-top: 8px;
  margin-bottom: 38px;
`
export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  margin-left: 12px;
`
