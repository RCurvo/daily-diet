import { Button } from '@components/Button'
import { BasicInput } from '@components/Input'
import { SelectButton } from '@components/SelectButton'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import theme from '@themes/theme'
import { ArrowLeft } from 'phosphor-react-native'
import React, { useCallback, useState } from 'react'
import {
  BackButton,
  Container,
  Header,
  HeaderText,
  LabelText,
  MainContainer,
  TwoItensContainer,
} from './styles'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { parseDateToDateString } from '@utils/parseDateToDateString'
import { TouchableOpacity } from 'react-native'
import { mealGetOne } from '@storage/meals/mealGetOne'
import { mealEdit } from '@storage/meals/mealEdit'
type RouteParams = {
  mealId: string
}

export function EditMeal() {
  const navigation = useNavigation()
  const route = useRoute()
  const { mealId } = route.params as RouteParams

  const [isActiveYes, setIsActiveYes] = useState(false)
  const [isActiveNo, setIsActiveNo] = useState(false)
  const [isVisibleDate, setVisibleDate] = useState(false)
  const [isVisibleTime, setVisibleTime] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [timeValue, setTimeValue] = useState('')
  const [dateValue, setDateValue] = useState('')

  async function handleSubmitEdit() {
    const mealType = isActiveYes ? 'healthy' : 'unhealthy'
    await mealEdit(mealId, {
      date: dateValue,
      description,
      hour: timeValue,
      id: mealId,
      mealType,
      title: name,
    })
    navigation.navigate('mealdetails', { mealId })
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

  async function getMealDetails(mealId: string) {
    const meal = await mealGetOne(mealId)
    setName(meal.title)
    setDescription(meal.description)
    setTimeValue(meal.hour)
    setDateValue(meal.date)
    meal.mealType === 'healthy' ? setIsActiveYes(true) : setIsActiveNo(true)
  }
  useFocusEffect(
    useCallback(() => {
      getMealDetails(mealId)
    }, []),
  )
  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <ArrowLeft size={24} color={theme.COLORS.GRAY_2} />
        </BackButton>
        <HeaderText>Editar Refeição</HeaderText>
      </Header>
      <MainContainer>
        <BasicInput label="Nome" value={name} onChangeText={setName} />
        <BasicInput
          variant="large"
          multiline={true}
          numberOfLines={10}
          style={{ textAlignVertical: 'top' }}
          value={description}
          onChangeText={setDescription}
          label="Descrição"
        />
        <DateTimePickerModal
          mode="date"
          isVisible={isVisibleDate}
          onConfirm={(date) => {
            setVisibleDate(false)
            setDateValue(parseDateToDateString(date))
          }}
          onCancel={() => setVisibleDate(false)}
        />
        <DateTimePickerModal
          mode="time"
          isVisible={isVisibleTime}
          onConfirm={(time) => {
            setVisibleTime(false)
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
              editable={false}
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
        <Button title={'Salvar Alterações'} onPress={handleSubmitEdit} />
      </MainContainer>
    </Container>
  )
}
