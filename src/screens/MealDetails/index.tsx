import { Button } from '@components/Button'

import React from 'react'
import {
  Container,
  Header,
  HeaderText,
  LabelText,
  MainContainer,
  TwoItensContainer,
} from './styles'

export function MeailDetails() {
  return (
    <Container>
      <Header>
        <HeaderText>Refeição</HeaderText>
      </Header>
      <MainContainer>
        <Button title={'Cadastrar refeição'}></Button>
      </MainContainer>
    </Container>
  )
}
