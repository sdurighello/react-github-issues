import React from 'react'
import PropTypes from 'prop-types'
import Issue from './Issue'
import Comment from './Comment'
import NewComment from './NewComment'
import Paper from 'material-ui/Paper'

class IssueHome extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showNewComment: false
    }
  }

  toggleNewComment(){
    this.setState({
      showNewComment: !this.state.showNewComment
    })
  }

  render() {
    const { isFetching, issues, getIssues, comments, getComments, updateComment, deleteComment, createComment, selectedIssue, error } = this.props
    const { showNewComment } = this.state

    return (
      <div>

        {error ? <div style={{ margin: "5px", padding: "5px", color: "red"}}><b>Error: {error}</b></div> : null}

        <button className='btn btn-primary' onClick={getIssues} disabled={isFetching}>
          Get issues
        </button>

        <hr />

        {issues.length > 0 ?
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Paper style={{ margin: "5px", width: "50%"}}>
              <h4 style={{margin: "5px"}}>LIST OF ISSUES</h4>
              {issues.map( issue => (<Issue
                key={issue.id}
                issue={issue}
                getComments={getComments}
                isFetching={isFetching}
              />))}
            </Paper>

            {selectedIssue ?
              <Paper style={{ margin: "5px", width: "50%"}}>
                <h4 style={{margin: "5px"}}>COMMENTS</h4>
                <button className='btn btn-success' onClick={this.toggleNewComment.bind(this)} disabled={isFetching || !selectedIssue}>
                  {showNewComment ? 'Close new comment' : 'Add new comment'}
                </button>
                <div>
                  { showNewComment ? <NewComment selectedIssue={selectedIssue} createComment={createComment} /> : null }
                </div>
                <hr />
                {comments.length > 0 ? <div>
                    {comments.map( (comment, i) => (<Comment
                      key={comment.id}
                      comment={comment}
                      updateComment={updateComment}
                      deleteComment={deleteComment}
                      isFetching={isFetching}
                    />))}
                  </div> : <div>There are no comments for this issue</div>}
              </Paper> : null}
          </div> : null}
      </div>
    )
  }
}

IssueHome.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  issues: PropTypes.array.isRequired,
  getIssues: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  getComments: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
  selectedIssue: PropTypes.number,
  error: PropTypes.string
}

export default IssueHome
