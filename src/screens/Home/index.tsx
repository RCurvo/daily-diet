import React, { useCallback, useState } from 'react'
import { SectionList } from 'react-native'
import { Plus } from 'phosphor-react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import {
  Avatar,
  Container,
  DateHeader,
  Header,
  Icon,
  Logo,
  MealsText,
  PercentageDescription,
  PercentageDisplay,
  PercentageHeading,
  StatsButton,
} from './styles'
import LogoImage from '@assets/Logo.png'
import { MealCard } from '@components/MealCard'
import { Button } from '@components/Button'
import { mealsGetAll } from '@storage/meals/mealsGetAll'
import { reduceToSectionListFormat } from '../../utils/reduceToSectionListFormat'
import { MealsByDayDTO } from '@dtos/MealsByDayDTO'

export function Home() {
  const [meals, setMeals] = useState<MealsByDayDTO[]>([] as MealsByDayDTO[])
  const [stats, setStats] = useState('')
  const navigation = useNavigation()

  function handleNewMeal() {
    navigation.navigate('newmeal')
  }

  function handleStats() {
    const dietType = Number(stats) > 60 ? 'healthy' : 'unhealthy'
    navigation.navigate('stats', { dietType })
  }

  function handleMealDetails(mealId: string) {
    navigation.navigate('mealdetails', { mealId })
  }

  async function loadMeals() {
    const meals = await mealsGetAll()
    const healthyMeals = meals.filter((item) => item.mealType === 'healthy')
    const percentage =
      meals.length !== 0
        ? ((healthyMeals.length / meals.length) * 100).toFixed(2)
        : '0'
    setStats(percentage)
    const parsedmeals = reduceToSectionListFormat(meals)

    setMeals(parsedmeals)
  }

  useFocusEffect(
    useCallback(() => {
      loadMeals()
    }, []),
  )
  return (
    <Container>
      <Header>
        <Logo source={LogoImage} />
        <Avatar source={{ uri: 'https://github.com/rcurvo.png' }} />
      </Header>
      <PercentageDisplay
        dietType={Number(stats) > 60 ? 'healthy' : 'unhealthy'}
      >
        <StatsButton onPress={handleStats}>
          <Icon />
        </StatsButton>
        <PercentageHeading>
          {stats === '100.00'
            ? '100'
            : stats === '0'
            ? '0'
            : `${stats.substring(0, 2)},${stats.substring(3, 5)}`}
          %
        </PercentageHeading>
        <PercentageDescription>
          das refei????es dentro da dieta
        </PercentageDescription>
      </PercentageDisplay>
      <MealsText>Refei????es</MealsText>
      <Button onPress={handleNewMeal} title="Nova refei????o">
        <Plus size={18} color="#ffffff" />
      </Button>
      <SectionList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 38 }}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            onPress={() => handleMealDetails(item.id)}
            meal={item.title}
            hour={item.hour}
            mealType={item.mealType}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateHeader>{title}</DateHeader>
        )}
      />
    </Container>
  )
}
