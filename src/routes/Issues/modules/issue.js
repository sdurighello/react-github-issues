import {SET_IS_FETCHING} from './fetching'

// ------------------------------------
// Constants
// ------------------------------------

export const SET_ISSUES = 'SET_ISSUES'

// ------------------------------------
// Actions
// ------------------------------------
export const key = 'edaff54ca3027be766d4c5aedd986d6137d74f59'
export const user = 'sdurighello'
export const repo = 'ShatApp'

const getIssuesUrl = `https://api.github.com/repos/${user}/${repo}/issues`

export const getIssues = () => {
  return (dispatch, getState) => {
    dispatch({type : 'SET_IS_FETCHING', payload: true})
    fetch(getIssuesUrl).then(res => res.json()).then( issues => {
      console.log(issues)
      dispatch({type : 'SET_IS_FETCHING', payload: false})
      dispatch({
        type    : SET_ISSUES,
        payload : issues
      })
    })
    // TODO: handle error
  }
}

export const actions = {
  getIssues
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ISSUES]    : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function issueReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
