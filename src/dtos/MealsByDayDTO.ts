type MealObjectWithoutDate = {
  id: string
  title: string
  description: string
  hour: string
  mealType?: 'healthy' | 'unhealthy'
}

export type MealsByDayDTO = {
  title: string
  data: MealObjectWithoutDate[]
}
