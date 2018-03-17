import { createSelector } from 'reselect'

const allLoopersSelector = state => state.core.loopers

export const allLoopersAsArray = createSelector(allLoopersSelector, loopers => {
  return Object.values(loopers)
})
