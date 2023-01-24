import React from 'react'
import { TouchableOpacityProps, View } from 'react-native'
import { Container, Divider, Hour, Meal, MealType } from './styles'

type MealCardProps = {
  meal: string
  hour?: string
  mealType?: 'healthy' | 'unhealthy'
} & TouchableOpacityProps

export function MealCard({
  hour = '20:00',
  meal,
  mealType = 'unhealthy',
  onPress,
  ...rest
}: MealCardProps) {
  return (
    <Container onPress={onPress} {...rest}>
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
