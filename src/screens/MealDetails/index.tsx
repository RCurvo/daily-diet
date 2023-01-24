import { Button } from '@components/Button'
import React, { useState } from 'react'
import { View } from 'react-native'
import {
  Container,
  Header,
  HeaderText,
  MainContainer,
  MealTitle,
  MealDescription,
  DateTimeLabel,
  DateTimeText,
  MealTypeDisplay,
  MealType,
  MealTypeText,
  StyledModal,
  DeleteMealContainer,
  ModalActiveView,
  ModalText,
  ModalButtonView,
  SmallButton,
} from './styles'

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Container mealType="healthy">
      <StyledModal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
        statusBarTranslucent
      >
        <ModalActiveView>
          <DeleteMealContainer>
            <ModalText>
              Deseja realmente excluir o registro da refeição?
            </ModalText>
            <ModalButtonView>
              <SmallButton title="cancelar" variant="secondary" />
              <SmallButton title="Sim, excluir" variant="primary" />
            </ModalButtonView>
          </DeleteMealContainer>
        </ModalActiveView>
      </StyledModal>

      <Header mealType="healthy">
        <HeaderText>Refeição</HeaderText>
      </Header>

      <MainContainer>
        <View>
          <MealTitle>Sanduíche</MealTitle>
          <MealDescription>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealDescription>
          <DateTimeLabel>Data e hora</DateTimeLabel>
          <DateTimeText>12/08/2022 às 16:00</DateTimeText>
          <MealTypeDisplay>
            <MealType mealType="healthy" />
            <MealTypeText>dentro da dieta</MealTypeText>
          </MealTypeDisplay>
        </View>
        <View style={{ width: '100%' }}>
          <Button title={'Editar refeição'}></Button>
          <Button title={'Excluir refeição'} variant="secondary"></Button>
        </View>
      </MainContainer>
    </Container>
  )
}
