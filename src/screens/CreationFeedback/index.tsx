/* eslint-disable jsx-a11y/alt-text */
import {
  Container,
  Heading,
  SmallButton,
  SubHeading,
  SubHeadingBold,
} from './styles'
import IllustrationSuccess from '@assets/success.png'
import { Image } from 'react-native'

export function CreationFeedback() {
  return (
    <Container>
      <Heading>Continue assim!</Heading>
      <SubHeading>
        Você continua <SubHeadingBold>dentro da dieta</SubHeadingBold>. Muito
        bem!
      </SubHeading>
      <Image source={IllustrationSuccess} style={{ marginBottom: 32 }} />
      <SmallButton title={'Ir para a página inicial'} />
    </Container>
  )
}
