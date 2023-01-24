import { Button } from '@components/Button'
import { View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  mealType: 'healthy' | 'unhealthy'
}

export const Container = styled(View)<Props>`
  flex: 1;
  background-color: ${({ theme, mealType }) =>
    mealType === 'unhealthy'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
`

export const Header = styled(View)<Props>`
  height: 132px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  /* margin-top: -20px */
  justify-content: space-between;
  padding: 24px;
  padding-top: 33px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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

export const DeleteMealContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;
  align-items: center;
  justify-content: center;

  max-height: 192px;
  border-radius: 8px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: auto;
  margin-bottom: auto;
  opacity: 1;
`

export const ModalActiveView = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
  line-height: 23.4px;
  text-align: center;
`

export const StyledModal = styled.Modal`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const ModalButtonView = styled.View`
  align-content: center;
  padding: 8px;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
`
export const SmallButton = styled(Button)`
  width: 135px;
`
