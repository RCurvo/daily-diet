import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
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
  align-items: center;
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
