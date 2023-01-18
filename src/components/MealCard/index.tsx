import React from 'react'
import { View } from 'react-native'
import { Container, Divider, Hour, Meal, MealType } from './styles'

type MealCardProps = {
  meal: string
  hour?: string
  mealType?: 'healthy' | 'unhealthy'
}

export function MealCard({
  hour = '20:00',
  meal,
  mealType = 'unhealthy',
}: MealCardProps) {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Hour>{hour}</Hour>
        <Divider />
        <Meal>{meal}</Meal>
      </View>
      <MealType mealType={mealType} />
    </Container>
  )
}
