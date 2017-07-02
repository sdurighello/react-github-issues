
// ------------------------------------
// Constants
// ------------------------------------

export const SET_IS_FETCHING = 'SET_IS_FETCHING'

// ------------------------------------
// Actions
// ------------------------------------

export const setFetching = (flag = false) => {
  return {
    type    : SET_IS_FETCHING,
    payload : flag
  }
}

export const actions = {
  setFetching
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_IS_FETCHING]    : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function fetchingReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
