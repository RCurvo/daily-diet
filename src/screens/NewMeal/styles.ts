import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Header = styled.View`
  height: 132px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
  line-height: 23.4px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const MainContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  padding-top: 33px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
`

export const TwoItensContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const LabelText = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  margin-top: 40px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 56px;
`
