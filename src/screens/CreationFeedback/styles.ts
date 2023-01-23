import { Button } from '@components/Button'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`
export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  font-size: 24px;
  line-height: 31.2px;
  margin-bottom: 8px;
`
export const SubHeading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20.8px;
  margin-bottom: 40px;
`

export const SubHeadingBold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  line-height: 20.8px;
  margin-bottom: 40px;
`

export const SmallButton = styled(Button)`
  width: 191px;
`
