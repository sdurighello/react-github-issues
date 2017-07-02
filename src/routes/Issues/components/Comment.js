import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

class Comment extends React.Component {

  updateComment() {
    const { body } = this.formValues()
    this.props.updateComment(body, this.props.comment.id)
  }

  deleteComment() {
    this.props.deleteComment(this.props.comment.id)
  }

  formValues() {
    const { commentBody } = this.refs
    return {
      body: commentBody.getValue(),
    }
  }

  render() {
    const { comment, isFetching } = this.props

    return (
      <Paper style={{margin: '20px'}}>
        <TextField
          name="commentBody"
          type="text"
          ref="commentBody"
          placeholder="Comment"
          defaultValue={comment.body}
          disabled={isFetching}
        />
        <div>
          <RaisedButton
            style={{margin: '20px'}}
            secondary={true}
            label='Edit'
            onClick={ this.updateComment.bind(this) }
            disabled={isFetching}
          />
          <FlatButton
            style={{margin: '20px', color: 'white', backgroundColor: 'red'}}
            label='Delete'
            onClick={ this.deleteComment.bind(this) }
            disabled={isFetching}
          />
        </div>
      </Paper>
    )
  }
}

Comment.propTypes = {
  updateComment: PropTypes.func.isRequired,
}

export default Comment
