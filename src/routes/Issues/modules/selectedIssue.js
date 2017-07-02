
// ------------------------------------
// Constants
// ------------------------------------

export const SET_SELECTED_ISSUE = 'SET_SELECTED_ISSUE'

// ------------------------------------
// Actions
// ------------------------------------

export const setSelectedIssue = (issueNumber) => {
  return {
    type    : SET_SELECTED_ISSUE,
    payload : issueNumber
  }
}

export const actions = {
  setSelectedIssue
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_SELECTED_ISSUE]    : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function selectedIssueReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
