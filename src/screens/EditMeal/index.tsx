import { Button } from '@components/Button'
import { BasicInput } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import React from 'react'
import {
  Container,
  Header,
  HeaderText,
  LabelText,
  MainContainer,
  TwoItensContainer,
} from './styles'

export function EditMeal() {
  return (
    <Container>
      <Header>
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
        <Button title={'Salvar Alterações'} />
      </MainContainer>
    </Container>
  )
}
