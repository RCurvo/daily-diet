import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
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
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  function handleEditMeal() {
    navigation.navigate('editmeal', { mealId: '51351' })
  }
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
              <SmallButton
                title="cancelar"
                onPress={() => setModalVisible(false)}
                variant="secondary"
              />
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
          <Button title={'Editar refeição'} onPress={handleEditMeal}></Button>
          <Button
            title="Excluir refeição"
            onPress={() => setModalVisible(true)}
            variant="secondary"
          ></Button>
        </View>
      </MainContainer>
    </Container>
  )
}
