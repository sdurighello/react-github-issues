
// ------------------------------------
// Constants
// ------------------------------------

export const SET_ERROR = 'SET_ERROR'

// ------------------------------------
// Actions
// ------------------------------------

export const setError = (message) => {
  return {
    type    : SET_ERROR,
    payload : message
  }
}

export const actions = {
  setError
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ERROR]    : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function errorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
