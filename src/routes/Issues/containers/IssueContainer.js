import { connect } from 'react-redux'
import { getIssues } from '../modules/issue'
import { getComments, updateComment, deleteComment, createComment } from '../modules/comment'

import IssueHome from '../components/IssueHome'

const mapDispatchToProps = {
  getIssues : () => getIssues(),
  getComments: (issueNumber) => getComments(issueNumber),
  updateComment: (body, commentId) => updateComment(body, commentId),
  deleteComment: (commentId) => deleteComment(commentId),
  createComment: (body, issueNumber) => createComment(body, issueNumber),
}

const mapStateToProps = (state) => ({
  issues : state.issues,
  comments: state.comments,
  isFetching: state.isFetching,
  selectedIssue: state.selectedIssue,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(IssueHome)
