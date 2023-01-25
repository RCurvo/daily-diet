import { Button } from '@components/Button'
import { BasicInput } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import { useNavigation } from '@react-navigation/native'
import theme from '@themes/theme'
import { ArrowLeft } from 'phosphor-react-native'
import { useState } from 'react'

import {
  BackButton,
  Container,
  Header,
  HeaderText,
  LabelText,
  MainContainer,
  TwoItensContainer,
} from './styles'

export function NewMeal() {
  const navigation = useNavigation()
  const [isActiveYes, setIsActiveYes] = useState(false)
  const [isActiveNo, setIsActiveNo] = useState(false)

  function handleSubmitMeal() {
    navigation.navigate('creationFeedback', {
      status: isActiveYes ? 'success' : 'fail',
    })
  }

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSelectActiveYes() {
    setIsActiveYes(true)
    setIsActiveNo(false)
  }

  function handleSelectActiveNo() {
    setIsActiveYes(false)
    setIsActiveNo(true)
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <ArrowLeft size={24} color={theme.COLORS.GRAY_2} />
        </BackButton>
        <HeaderText>Nova Refeição</HeaderText>
      </Header>
      <MainContainer>
        <BasicInput label="Nome" />
        <BasicInput
          variant="large"
          multiline={true}
          numberOfLines={10}
          style={{ textAlignVertical: 'top' }}
          label="Descrição"
        />
        <TwoItensContainer>
          <BasicInput variant="small" label="Data" />
          <BasicInput variant="small" label="Hora" />
        </TwoItensContainer>

        <LabelText>Está dentro da dieta?</LabelText>
        <TwoItensContainer>
          <SelectButton
            type={'yes'}
            isActive={isActiveYes}
            onPress={handleSelectActiveYes}
          />
          <SelectButton
            type={'no'}
            isActive={isActiveNo}
            onPress={handleSelectActiveNo}
          />
        </TwoItensContainer>
        <Button title="Cadastrar refeição" onPress={handleSubmitMeal}></Button>
      </MainContainer>
    </Container>
  )
}
