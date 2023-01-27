import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealsGetAll } from './mealsGetAll'

export async function mealRemove(mealId: string) {
  const storage = await mealsGetAll()
  const filtered = storage.filter((meal) => meal.id !== mealId)
  const meals = JSON.stringify(filtered)
  await AsyncStorage.setItem(MEAL_COLLECTION, meals)
}
