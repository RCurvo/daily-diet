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
import { Image, View } from 'react-native'

type Props = {
  type?: 'success' | 'fail'
}

export function CreationFeedback({ type = 'fail' }: Props) {
  return (
    <Container>
      <Heading type={type}>
        {type === 'success' ? 'Continue assim!' : 'Que pena!'}
      </Heading>
      {type === 'success' ? (
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
        source={type === 'success' ? IllustrationSuccess : IllustrationFail}
        style={{ marginBottom: 32 }}
      />

      <SmallButton title={'Ir para a página inicial'} />
    </Container>
  )
}
