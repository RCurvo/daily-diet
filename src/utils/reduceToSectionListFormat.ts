/* eslint-disable no-prototype-builtins */
const MealData = [
  {
    date: '18.12.2022',
    description: 'X-burger do fim de semana',
    id: '1',
    mealType: 'healthy',
    hour: '20:00',
    title: 'X-Burger',
  },
  {
    date: '20.12.2022',
    description: 'X-burger do fim de semana',
    id: '2',
    mealType: 'healthy',
    hour: '20:00',
    title: 'X-Burger',
  },
  {
    date: '21.12.2022',
    description: 'X-burger do fim de semana',
    id: '3',
    mealType: 'healthy',
    hour: '20:00',
    title: 'X-Burger',
  },
  {
    date: '18.12.2022',
    description: 'X-burger do fim de semana',
    id: '4',
    mealType: 'healthy',
    hour: '20:00',
    title: 'X-Burger',
  },
  {
    date: '21.12.2022',
    description: 'X-burger do fim de semana',
    id: '5',
    mealType: 'healthy',
    hour: '20:00',
    title: 'X-Burger',
  },
  {
    date: '18.12.2022',
    description: 'X-fafafagagad do fim de semana',
    id: '4',
    mealType: 'healthy',
    hour: '20:00',
    title: 'X-adfgadgaga',
  },
]

export function reduceToSectionListFormat(MealData) {
  const MEALRECUCED = MealData.reduce(
    (op, { id, date, description, hour, mealType, title }) => {
      const sectionTitle = date
      const rest = [
        {
          description,
          id,
          mealType,
          hour,
          title,
        },
      ]

      const { result, index } = op
      if (index.hasOwnProperty(sectionTitle)) {
        result[index[sectionTitle]].data.push(rest[0])
      } else {
        index[sectionTitle] = result.length
        result.push({ title: sectionTitle, data: rest })
      }
      return op
    },
    { result: [], index: {} },
  ).result

  console.log(MEALRECUCED)
}
