import { MealDTO } from '@dtos/mealDTO'
import { mealCreate } from './mealCreate'
import { mealRemove } from './mealRemove'

export async function mealEdit(initialMealId: string, newMeal: MealDTO) {
  await mealRemove(initialMealId)
  await mealCreate(newMeal)
}
