import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export const Issue = ({ isFetching, issue, getComments }) => {

  const getCommentsButton = () => {
    return getComments(issue.number)
  }

  return (
    <Paper style={{margin: '20px'}}>

      <b>{issue.title}</b>
      <div>
        <RaisedButton style={{margin: '20px'}} label='comments' onClick={getCommentsButton} disabled={isFetching}/>
      </div>

    </Paper>
  )
}

Issue.propTypes = {
  isFetching: PropTypes.bool,
  issue: PropTypes.object,
  getComments: PropTypes.func
}

export default Issue
