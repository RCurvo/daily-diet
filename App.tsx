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
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      <StatusBar backgroundColor="transparent" translucent />
    </ThemeProvider>
  )
}
