import { mealsGetAll } from './mealsGetAll'

export async function mealGetOne(mealId: string) {
  const storage = await mealsGetAll()
  const meal = storage.filter((meal) => meal.id === mealId)
  console.log(meal[0])
  return meal[0]
}
