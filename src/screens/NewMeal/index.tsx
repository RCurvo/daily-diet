import { Button } from '@components/Button'
import { BasicInput } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import { MealDTO } from '@dtos/mealDTO'
import { useNavigation } from '@react-navigation/native'
import { mealCreate } from '@storage/meals/mealCreate'
import { mealsGetAll } from '@storage/meals/mealsGetAll'
import theme from '@themes/theme'
import { ArrowLeft } from 'phosphor-react-native'
import { useState } from 'react'
import { ScrollView, TouchableOpacity, TextInput } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

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
  const [isVisibleDate, setVisibleDate] = useState(false)
  const [isVisibleTime, setVisibleTime] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [timeValue, setTimeValue] = useState('')
  const [dateValue, setDateValue] = useState('')

  async function handleSubmitMeal() {
    if (
      (isActiveYes || isActiveNo) &&
      name &&
      description &&
      timeValue &&
      dateValue
    ) {
      const mealType = isActiveYes ? 'healthy' : 'unhealthy'
      await mealCreate({
        id: name + dateValue + timeValue,
        date: dateValue,
        hour: timeValue,
        description,
        mealType,
        title: name,
      })
      await mealsGetAll()
      navigation.navigate('creationFeedback', {
        status: isActiveYes ? 'success' : 'fail',
      })
    }
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
      <ScrollView>
        <MainContainer>
          <BasicInput label="Nome" onChangeText={setName} />
          <BasicInput
            variant="large"
            multiline={true}
            numberOfLines={10}
            style={{ textAlignVertical: 'top' }}
            label="Descrição"
            onChangeText={setDescription}
          />

          <DateTimePickerModal
            mode="date"
            isVisible={isVisibleDate}
            onConfirm={(date) => {
              setVisibleDate(false) // <- first thing
              setDateValue(
                date.getDate().toString() +
                  '/' +
                  (parseInt(date.getMonth()) + 1).toString() +
                  '/' +
                  date.getFullYear(),
              )
            }}
            onCancel={() => setVisibleDate(false)}
          />
          <DateTimePickerModal
            mode="time"
            isVisible={isVisibleTime}
            onConfirm={(time) => {
              setVisibleTime(false) // <- first thing
              setTimeValue(
                time
                  .toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                  .slice(0, -3),
              )
            }}
            onCancel={() => setVisibleTime(false)}
          />
          <TwoItensContainer>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
              activeOpacity={1}
              onPress={() => setVisibleDate(true)}
            >
              <BasicInput
                variant="small"
                label="Data"
                value={dateValue}
                editable={false}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              activeOpacity={1}
              onPress={() => setVisibleTime(true)}
            >
              <BasicInput
                variant="small"
                label="Hora"
                value={timeValue}
                editable={false} // optional
              />
            </TouchableOpacity>
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
          <Button
            title="Cadastrar refeição"
            onPress={handleSubmitMeal}
          ></Button>
        </MainContainer>
      </ScrollView>
    </Container>
  )
}
