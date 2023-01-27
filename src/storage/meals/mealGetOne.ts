import { mealsGetAll } from './mealsGetAll'

export async function mealRemove(mealId: string) {
  const storage = await mealsGetAll()
  const meal = storage.filter((meal) => meal.id === mealId)
  return meal
}
