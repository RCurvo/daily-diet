/* eslint-disable jsx-a11y/alt-text */
import {
  Container,
  Heading,
  SmallButton,
  SubHeading,
  SubHeadingBold,
} from './styles'
import IllustrationSuccess from '@assets/success.png'
import IllustrationFail from '@assets/fail.png'
import { Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

type RouteParams = {
  status: 'success' | 'fail'
}

export function CreationFeedback() {
  const navigation = useNavigation()
  const route = useRoute()
  const { status } = route.params as RouteParams

  function handleBackToHome() {
    navigation.navigate('home')
  }
  return (
    <Container>
      <Heading type={status}>
        {status === 'success' ? 'Continue assim!' : 'Que pena!'}
      </Heading>
      {status === 'success' ? (
        <SubHeading>
          Você continua <SubHeadingBold>dentro da dieta</SubHeadingBold>. Muito
          bem!
        </SubHeading>
      ) : (
        <SubHeading>
          Você <SubHeadingBold>Saiu da dieta</SubHeadingBold> dessa vez, mas
          continue se esforçando e não desista!
        </SubHeading>
      )}
      <Image
        source={status === 'success' ? IllustrationSuccess : IllustrationFail}
        style={{ marginBottom: 32 }}
      />

      <SmallButton
        onPress={handleBackToHome}
        title={'Ir para a página inicial'}
      />
    </Container>
  )
}
