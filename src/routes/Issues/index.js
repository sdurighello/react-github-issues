import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'issues',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const IssueContainer = require('./containers/IssueContainer').default
      const issueReducer = require('./modules/issue').default
      const commentReducer = require('./modules/comment').default
      const fetchingReducer = require('./modules/fetching').default
      const errorReducer = require('./modules/error').default
      const selectedIssueReducer = require('./modules/selectedIssue').default

      /*  Add the reducer to the store on key  */
      injectReducer(store, { key: 'issues', reducer: issueReducer })
      injectReducer(store, { key: 'comments', reducer: commentReducer })
      injectReducer(store, { key: 'isFetching', reducer: fetchingReducer })
      injectReducer(store, { key: 'error', reducer: errorReducer })
      injectReducer(store, { key: 'selectedIssue', reducer: selectedIssueReducer })

      /*  Return getComponent   */
      cb(null, IssueContainer)

      /* Webpack named bundle   */
    }, 'issues')
  },
})
