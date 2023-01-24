/* eslint-disable camelcase */
import theme from '@themes/theme'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { Home } from '@screens/Home'
import { Stats } from '@screens/Stats'
import { NewMeal } from '@screens/NewMeal'
import { CreationFeedback } from '@screens/CreationFeedback'
import { MealDetails } from '@screens/MealDetails'
import { EditMeal } from '@screens/EditMeal'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <MealDetails /> : <ActivityIndicator />}
      <StatusBar backgroundColor="transparent" translucent />
    </ThemeProvider>
  )
}
