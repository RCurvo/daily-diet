import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { mealsGetAll } from '@storage/meals/mealsGetAll'
import theme from '@themes/theme'
import { healthBestSequence } from '@utils/healthBestSequence'
import { reduceToSectionListFormat } from '@utils/reduceToSectionListFormat'
import { max } from 'date-fns'
import { ArrowLeft } from 'phosphor-react-native'
import { useCallback, useState } from 'react'
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

type RouteParams = {
  dietType: 'healthy' | 'unhealthy'
}

export function Stats() {
  const navigation = useNavigation()
  const route = useRoute()
  const { dietType } = route.params as RouteParams

  const [percentage, setPercentage] = useState('')
  const [meals, setMeals] = useState([])
  const [maxCount, setMaxCount] = useState(0)
  const [parsedMeals, setParsedMeals] = useState([])
  const [healthyMeals, setHealthyMeals] = useState(0)

  function handleBackButton() {
    navigation.goBack()
  }
  async function loadMeals() {
    const meals = await mealsGetAll()
    setMeals(meals)
    const healthyMeals = meals.filter((item) => item.mealType === 'healthy')
    setHealthyMeals(healthyMeals.length)
    const percentage = ((healthyMeals.length / meals.length) * 100).toFixed(2)
    setPercentage(percentage)
    const parsedmeals = reduceToSectionListFormat(meals)
    setMaxCount(healthBestSequence(parsedmeals))

    setParsedMeals(parsedmeals)
  }

  useFocusEffect(
    useCallback(() => {
      loadMeals()
    }, []),
  )

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
        <PercentageHeading>
          {' '}
          {percentage.substring(0, 2)},{percentage.substring(3, 5)}%
        </PercentageHeading>
        <PercentageDescription>
          das refeições dentro da dieta
        </PercentageDescription>
      </PercentageContainer>
      <StatsContainer>
        <HeadingText>Estatísticas gerais</HeadingText>
        <StatsHighlight>
          <HighlightHeading>{maxCount}</HighlightHeading>
          <HighlightDescription>
            melhor sequência de pratos dentro da dieta
          </HighlightDescription>
        </StatsHighlight>
        <StatsHighlight>
          <HighlightHeading>{meals.length}</HighlightHeading>
          <HighlightDescription>refeições registradas</HighlightDescription>
        </StatsHighlight>
        <MealsContainer style={{ flexDirection: 'row' }}>
          <ColoredHighlight dietType="healthy">
            <HighlightHeading>{healthyMeals}</HighlightHeading>
            <HighlightDescription>
              refeições dentro da dieta
            </HighlightDescription>
          </ColoredHighlight>
          <ColoredHighlight dietType="unhealthy">
            <HighlightHeading>{meals.length - healthyMeals}</HighlightHeading>
            <HighlightDescription>refeições fora da dieta</HighlightDescription>
          </ColoredHighlight>
        </MealsContainer>
      </StatsContainer>
    </Container>
  )
}
