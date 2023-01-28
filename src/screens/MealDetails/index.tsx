import { Button } from '@components/Button'
import { MealDTO } from '@dtos/mealDTO'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { mealGetOne } from '@storage/meals/mealGetOne'
import { mealRemove } from '@storage/meals/mealRemove'
import theme from '@themes/theme'
import { ArrowLeft } from 'phosphor-react-native'
import React, { useCallback, useState } from 'react'
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

type RouteParams = {
  mealId: string
}

export function MealDetails({ mealType = 'healthy' }: Props) {
  const route = useRoute()
  const { mealId } = route.params as RouteParams
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [meal, setMeal] = useState({} as MealDTO)

  function handleEditMeal() {
    navigation.navigate('editmeal', { mealId: meal.id })
  }

  function handleGoBack() {
    navigation.goBack()
  }

  async function getMealDetails(mealId: string) {
    const meal = await mealGetOne(mealId)
    setMeal(meal)
    return meal
  }

  async function handleDeleteMeal(mealId: string) {
    await mealRemove(mealId)
    navigation.navigate('home')
  }

  useFocusEffect(
    useCallback(() => {
      getMealDetails(mealId)
    }, []),
  )
  return (
    <Container mealType={meal.mealType}>
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
              <SmallButton
                onPress={() => handleDeleteMeal(meal.id)}
                title="Sim, excluir"
                variant="primary"
              />
            </ModalButtonView>
          </DeleteMealContainer>
        </ModalActiveView>
      </StyledModal>

      <Header mealType={meal.mealType}>
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
          <MealTitle>{meal.title}</MealTitle>
          <MealDescription>{meal.description}</MealDescription>
          <DateTimeLabel>Data e hora</DateTimeLabel>
          <DateTimeText>
            {meal.date} às {meal.hour}
          </DateTimeText>
          <MealTypeDisplay>
            <MealType mealType={meal.mealType} />
            <MealTypeText>
              {meal.mealType === 'healthy'
                ? 'dentro da dieta'
                : 'fora da dieta'}
            </MealTypeText>
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
