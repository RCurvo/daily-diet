import { useNavigation } from '@react-navigation/native'
import theme from '@themes/theme'
import { ArrowLeft } from 'phosphor-react-native'
import {
  BackButton,
  BackIcon,
  ColoredHighlight,
  Container,
  HeadingText,
  HighlightDescription,
  HighlightHeading,
  MealsContainer,
  PercentageContainer,
  PercentageDescription,
  PercentageHeading,
  StatsContainer,
  StatsHighlight,
} from './styles'

type DietProps = {
  dietType?: 'healthy' | 'unhealthy'
}

export function Stats({ dietType = 'healthy' }: DietProps) {
  const navigation = useNavigation()
  function handleBackButton() {
    navigation.goBack()
  }
  return (
    <Container>
      <PercentageContainer dietType={dietType}>
        <BackButton onPress={handleBackButton}>
          <ArrowLeft
            size={24}
            color={
              dietType === 'healthy'
                ? theme.COLORS.GREEN_DARK
                : theme.COLORS.RED_DARK
            }
          />
        </BackButton>
        <PercentageHeading>90,68%</PercentageHeading>
        <PercentageDescription>
          das refeições dentro da dieta
        </PercentageDescription>
      </PercentageContainer>
      <StatsContainer>
        <HeadingText>Estatísticas gerais</HeadingText>
        <StatsHighlight>
          <HighlightHeading>22</HighlightHeading>
          <HighlightDescription>
            melhor sequência de pratos dentro da dieta
          </HighlightDescription>
        </StatsHighlight>
        <StatsHighlight>
          <HighlightHeading>109</HighlightHeading>
          <HighlightDescription>refeições registradas</HighlightDescription>
        </StatsHighlight>
        <MealsContainer style={{ flexDirection: 'row' }}>
          <ColoredHighlight dietType="healthy">
            <HighlightHeading>99</HighlightHeading>
            <HighlightDescription>
              refeições dentro da dieta
            </HighlightDescription>
          </ColoredHighlight>
          <ColoredHighlight dietType="unhealthy">
            <HighlightHeading>10</HighlightHeading>
            <HighlightDescription>refeições fora da dieta</HighlightDescription>
          </ColoredHighlight>
        </MealsContainer>
      </StatsContainer>
    </Container>
  )
}
