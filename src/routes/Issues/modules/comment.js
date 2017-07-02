import {key, user, repo} from './issue'
import {SET_IS_FETCHING} from './fetching'
import {SET_ERROR} from './error'
import {SET_SELECTED_ISSUE} from './selectedIssue'

// ------------------------------------
// Constants
// ------------------------------------

export const SET_COMMENTS = 'SET_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

const getCommentsUrl = (issueNumber) => `https://api.github.com/repos/${user}/${repo}/issues/${issueNumber}/comments`
const editCommentUrl = (commentId) => `https://api.github.com/repos/${user}/${repo}/issues/comments/${commentId}`


// ------------------------------------
// Actions
// ------------------------------------

export const getComments = (issueNumber) => {

  return (dispatch, getState) => {
    dispatch({type : 'SET_IS_FETCHING', payload: true})
    dispatch({type : 'SET_SELECTED_ISSUE', payload: null})
    dispatch({type : 'SET_ERROR', payload: null})
    fetch(getCommentsUrl(issueNumber)).then(res => res.json()).then( comments => {
      console.log(comments)
      dispatch({type : 'SET_IS_FETCHING', payload: false})
      dispatch({type : 'SET_SELECTED_ISSUE', payload: issueNumber})
      dispatch({
          type    : SET_COMMENTS,
          payload : comments
        })
    })
    // TODO: handle error
  }
}

export const updateComment = (body, commentId) => {

  return (dispatch, getState) => {
    dispatch({type : 'SET_IS_FETCHING', payload: true})
    dispatch({type : 'SET_ERROR', payload: null})
    fetch(editCommentUrl(commentId), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${key}`
      },
      method: 'PATCH',
      body: JSON.stringify({body})
    }).then(res => res.json()).then( comment => {
      console.log(comment)
      dispatch({type : 'SET_IS_FETCHING', payload: false})
      if(comment.errors){
        dispatch({type : 'SET_ERROR', payload: comment.message})
      } else {
        dispatch({
          type    : UPDATE_COMMENT,
          payload : comment
        })
      }

    })

  }
}

export const deleteComment = (commentId) => {

  return (dispatch, getState) => {
    dispatch({type : 'SET_IS_FETCHING', payload: true})
    dispatch({type : 'SET_ERROR', payload: null})
    fetch(editCommentUrl(commentId), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${key}`
      },
      method: 'DELETE'
    }).then( () => {
      console.log('deleted comment id ', commentId)
      dispatch({type : 'SET_IS_FETCHING', payload: false})
      dispatch({
        type    : DELETE_COMMENT,
        payload : commentId
      })
    })

  }
}

export const createComment = (body, issueNumber) => {

  return (dispatch, getState) => {
    dispatch({type : 'SET_IS_FETCHING', payload: true})
    dispatch({type : 'SET_ERROR', payload: null})
    fetch(getCommentsUrl(issueNumber), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${key}`
      },
      method: 'POST',
      body: JSON.stringify({body})
    }).then(res => res.json()).then( comment => {
      console.log(comment)
      dispatch({type : 'SET_IS_FETCHING', payload: false})
      if(comment.errors){
        dispatch({type : 'SET_ERROR', payload: comment.message})
      } else {
        dispatch({
          type    : CREATE_COMMENT,
          payload : comment
        })
      }

    })
  }
}

export const actions = {
  getComments,
  updateComment,
  deleteComment,
  createComment
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_COMMENTS]    : (state, action) => action.payload,
  [UPDATE_COMMENT]    : (state, action) => {
    const comment = action.payload
    const body = comment.body
    return state.map( c => { return {...c, body}})
  },
  [DELETE_COMMENT]    : (state, action) => {
    const commentId = action.payload
    return state.filter( c => c.id !== commentId)
  },
  [CREATE_COMMENT]    : (state, action) => {
    const comment = action.payload
    return state = state.concat(comment)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function commentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
