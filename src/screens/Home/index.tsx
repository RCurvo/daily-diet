import React from 'react'
import { SectionList } from 'react-native'
import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
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

type MealObjectType = {
  title: string
  hour?: string
  mealType?: 'healthy' | 'unhealthy'
}

type DATAType = {
  title: string
  data: MealObjectType[]
}

const DATA: DATAType[] = [
  {
    title: '12.08.22',
    data: [
      { title: 'Pizza', hour: '21:00', mealType: 'healthy' },
      { title: 'Risoto', hour: '20:00', mealType: 'unhealthy' },
      { title: 'Pizza', hour: '10:00', mealType: 'healthy' },
    ],
  },
  {
    title: '11.08.22',
    data: [
      { title: 'Pizza', hour: '09:00', mealType: 'healthy' },
      { title: 'Pizza', hour: '20:00', mealType: 'healthy' },
      { title: 'Pizza', hour: '20:00', mealType: 'healthy' },
    ],
  },
  {
    title: '10.08.22',
    data: [
      { title: 'Pizza', hour: '20:00' },
      { title: 'Pizza', hour: '20:00' },
      { title: 'Pizza', hour: '20:00' },
    ],
  },
  {
    title: '09.08.22',
    data: [
      { title: 'Pizza', hour: '20:00' },
      { title: 'Pizza', hour: '20:00' },
    ],
  },
]

export function Home() {
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
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
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
