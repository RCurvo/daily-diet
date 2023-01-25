import { Button } from '@components/Button'
import { BasicInput } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import { useNavigation } from '@react-navigation/native'
import theme from '@themes/theme'
import { ArrowLeft } from 'phosphor-react-native'
import React from 'react'
import {
  BackButton,
  Container,
  Header,
  HeaderText,
  LabelText,
  MainContainer,
  TwoItensContainer,
} from './styles'

export function EditMeal() {
  const navigation = useNavigation()

  function handleSubmitEdit() {
    navigation.navigate('mealdetails', { mealId: 'fasfaf' })
  }
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <ArrowLeft size={24} color={theme.COLORS.GRAY_2} />
        </BackButton>
        <HeaderText>Editar Refeição</HeaderText>
      </Header>
      <MainContainer>
        <BasicInput label="Nome" value="X-Tudo" />
        <BasicInput
          variant="large"
          multiline={true}
          numberOfLines={10}
          style={{ textAlignVertical: 'top' }}
          value="Xis completo da lancheria do bairro"
          label="Descrição"
        />
        <TwoItensContainer>
          <BasicInput variant="small" label="Data" value="12/08/2022" />
          <BasicInput variant="small" label="Hora" value="16:00" />
        </TwoItensContainer>

        <LabelText>Está dentro da dieta?</LabelText>
        <TwoItensContainer>
          <SelectButton type={'yes'} />
          <SelectButton type={'no'} />
        </TwoItensContainer>
        <Button title={'Salvar Alterações'} onPress={handleSubmitEdit} />
      </MainContainer>
    </Container>
  )
}
