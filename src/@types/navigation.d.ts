/* eslint-disable no-unused-vars */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      newmeal: undefined
      mealdetails: {
        mealId: string
      }
      creationFeedback: {
        status: 'success' | 'fail'
      }
      editmeal: {
        mealId: string
      }
      stats: {
        dietType: string
      }
    }
  }
}
