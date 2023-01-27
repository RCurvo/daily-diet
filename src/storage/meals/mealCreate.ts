import { MealDTO } from '@dtos/mealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealsGetAll } from './mealsGetAll'

export async function mealCreate(newMeal: MealDTO) {
  const storedMeals = await mealsGetAll()
  const storage = JSON.stringify([...storedMeals, newMeal])
  await AsyncStorage.setItem(MEAL_COLLECTION, storage)
}
