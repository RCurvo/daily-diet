import { View } from 'react-native'
import styled from 'styled-components/native'

type DietProps = {
  dietType?: 'healthy' | 'unhealthy'
}

export const Container = styled(View)<DietProps>`
  flex: 1;
  background-color: ${({ theme, dietType }) =>
    dietType === 'unhealthy'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
`

export const PercentageContainer = styled(View)<DietProps>`
  height: 200px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, dietType }) =>
    dietType === 'unhealthy'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
`
export const PercentageHeading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 32px;
  line-height: 41.6px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const PercentageDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  line-height: 18.2px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`
export const HeadingText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  line-height: 18.2px;
  margin-bottom: 24px;
`

export const StatsContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  padding-top: 33px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 20px;
`

export const StatsHighlight = styled.View`
  width: 100%;
  height: 89px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 8px;
  margin-bottom: 12px;
`
export const HighlightHeading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
export const HighlightDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 14px;
  line-height: 18.2px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  text-align: center;
`
export const ColoredHighlight = styled(View)<DietProps>`
  width: 48.5%;
  height: 89px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, dietType }) =>
    dietType === 'unhealthy'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 16px;
`
export const MealsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
