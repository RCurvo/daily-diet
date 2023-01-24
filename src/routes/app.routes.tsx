import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CreationFeedback } from '@screens/CreationFeedback'
import { EditMeal } from '@screens/EditMeal'
import { Home } from '@screens/Home'
import { MealDetails } from '@screens/MealDetails'
import { NewMeal } from '@screens/NewMeal'
import { Stats } from '@screens/Stats'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="mealdetails" component={MealDetails} />
      <Screen name="creationFeedback" component={CreationFeedback} />
      <Screen name="editmeal" component={EditMeal} />
      <Screen name="stats" component={Stats} />
    </Navigator>
  )
}
