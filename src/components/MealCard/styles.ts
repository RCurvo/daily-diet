import { View } from 'react-native'
import styled from 'styled-components/native'

type MealTypeProps = {
  mealType?: 'healthy' | 'unhealthy'
}

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  width: 100%;
  height: 50px;
  padding: 14px 16px 14px 12px;
  margin-bottom: 12px;
`
export const Divider = styled.View`
  margin-right: 12px;
  margin-left: 12px;
  align-items: center;
  width: 0px;
  height: 14px;
  border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_4};
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const MealType = styled(View)<MealTypeProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ theme, mealType }) =>
    mealType === 'unhealthy' ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID};
`

export const Hour = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const Meal = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 21px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`
