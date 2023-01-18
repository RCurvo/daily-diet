import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'
import { View } from 'react-native'

type DietTypeProps = {
  dietType?: 'healthy' | 'unhealthy'
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const PercentageDisplay = styled(View)<DietTypeProps>`
  width: 100%;
  height: 102px;
  background-color: ${({ theme, dietType }) =>
    dietType === 'unhealthy'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const PercentageHeading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 32px;
  line-height: 41.6px;
`

export const PercentageDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  line-height: 18.2px;
`

export const MealsText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  margin-top: 40px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const NewMealText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  margin-left: 12px;
`

export const DateHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
  line-height: 23.4px;
  margin-bottom: 8px;
  margin-top: 20px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`
export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`
export const StatsButton = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const NewMealButton = styled.TouchableOpacity`
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

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.RED_DARK,
}))``
