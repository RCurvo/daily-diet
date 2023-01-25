import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import theme from '@themes/theme'
import { ArrowLeft } from 'phosphor-react-native'
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
  BackButton,
} from './styles'

type Props = {
  mealType?: 'healthy' | 'unhealthy'
}

export function MealDetails({ mealType = 'healthy' }: Props) {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  function handleEditMeal() {
    navigation.navigate('editmeal', { mealId: '51351' })
  }

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <Container mealType={mealType}>
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
        <BackButton onPress={handleGoBack}>
          <ArrowLeft
            size={24}
            color={
              mealType === 'healthy'
                ? theme.COLORS.GREEN_DARK
                : theme.COLORS.RED_DARK
            }
          />
        </BackButton>
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
