import { BasicInput } from '@components/Input'
import React from 'react'
import {
  Container,
  Header,
  HeaderText,
  MainContainer,
  TwoItensContainer,
} from './styles'

export function NewMeal() {
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
      </MainContainer>
    </Container>
  )
}
