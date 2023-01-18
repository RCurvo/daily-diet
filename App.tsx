/* eslint-disable camelcase */
import theme from '@themes/theme'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? (
        <View>
          <Text>Nice</Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
      <StatusBar />
    </ThemeProvider>
  )
}
