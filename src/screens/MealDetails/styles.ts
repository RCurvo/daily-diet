import { View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  mealType: 'healthy' | 'unhealthy'
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Header = styled(View)<Props>`
  height: 132px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, mealType }) =>
    mealType === 'unhealthy'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
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
  justify-content: space-between;
  padding: 24px;
  padding-top: 33px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
`

export const DateTimeLabel = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  line-height: 18.2px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-top: 24px;
`

export const DateTimeText = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const MealDescription = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20.8px;
  margin-top: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const MealTitle = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const MealTypeDisplay = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 34px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 1000px;
  margin-top: 24px;
`
export const MealType = styled(View)<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 8px;
  background-color: ${({ theme, mealType }) =>
    mealType === 'unhealthy' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK};
`
export const MealTypeText = styled.Text`
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  line-height: 18.2px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
