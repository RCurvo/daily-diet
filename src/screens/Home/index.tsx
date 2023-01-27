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
  const [meals, setMeals] = useState([] as MealsByDayDTO[])
  const navigation = useNavigation()

  function handleNewMeal() {
    navigation.navigate('newmeal')
  }

  function handleStats() {
    navigation.navigate('stats', { dietType: 'healthy' })
  }

  function handleMealDetails() {
    navigation.navigate('mealdetails', { mealId: 'healthy' })
  }

  async function loadMeals() {
    const meals = await mealsGetAll()

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
      <PercentageDisplay dietType="healthy">
        <StatsButton onPress={handleStats}>
          <Icon />
        </StatsButton>
        <PercentageHeading>90,86%</PercentageHeading>
        <PercentageDescription>
          das refeições dentro da dieta
        </PercentageDescription>
      </PercentageDisplay>
      <MealsText>Refeições</MealsText>
      <Button onPress={handleNewMeal} title="Nova refeição">
        <Plus size={18} color="#ffffff" />
      </Button>
      <SectionList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 38 }}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            onPress={handleMealDetails}
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
