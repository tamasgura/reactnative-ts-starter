export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incrementCounter = (amount: number) => ({
  amount,
  type: INCREMENT_COUNTER,
})

export const decrementCounter = (amount: number) => ({
  amount,
  type: DECREMENT_COUNTER,
})
