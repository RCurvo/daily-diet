import { MealDTO } from '@dtos/mealDTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'

export async function mealsGetAll() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
  const meals: MealDTO[] = storage ? JSON.parse(storage) : []
  return meals
}
