import { Button } from '@components/Button'
import { BasicInput } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Container,
  Header,
  HeaderText,
  LabelText,
  MainContainer,
  TwoItensContainer,
} from './styles'

export function NewMeal() {
  const navigation = useNavigation()

  function handleSubmitMeal() {
    navigation.navigate('creationFeedback', { status: 'unhealthy' })
  }

  return (
    <Container>
      <Header>
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
          <SelectButton type={'yes'} />
          <SelectButton type={'no'} />
        </TwoItensContainer>
        <Button title="Cadastrar refeição" onPress={handleSubmitMeal}></Button>
      </MainContainer>
    </Container>
  )
}
