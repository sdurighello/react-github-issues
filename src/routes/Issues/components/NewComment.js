import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

class NewComment extends React.Component {

  saveComment() {
    const { body } = this.formValues()
    this.props.createComment(body, this.props.selectedIssue)
  }

  formValues() {
    const { commentBody } = this.refs
    return {
      body: commentBody.getValue(),
    }
  }

  render() {
    const { isFetching } = this.props

    return (
      <Paper style={{margin: '20px', backgroundColor: 'lightGrey'}}>
        <TextField
          name="commentBody"
          type="text"
          ref="commentBody"
          placeholder="Comment ..."
          defaultValue={''}
          disabled={isFetching}
        />
        <div>
          <RaisedButton
            style={{margin: '20px'}}
            label='Save'
            onClick={ this.saveComment.bind(this) }
            disabled={isFetching}
          />
        </div>
      </Paper>
    )
  }
}

NewComment.propTypes = {
  createComment: PropTypes.func.isRequired,
  selectedIssue: PropTypes.number
}

export default NewComment
