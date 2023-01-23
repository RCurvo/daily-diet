import { BasicInput } from '@components/Input'
import {
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

export function Stats() {
  return (
    <Container>
      <PercentageContainer dietType="unhealthy">
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
