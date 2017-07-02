import {
  SET_ISSUES,
  getIssues,
  default as issueReducer
} from 'routes/Issues/modules/issue'

describe('(Redux Module) Issue', () => {
  it('Should export a constant SET_ISSUES.', () => {
    expect(SET_ISSUES).to.equal('SET_ISSUES')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(issueReducer).to.be.a('function')
    })

    it('Should initialize with a state of empty array.', () => {
      expect(issueReducer(undefined, {})).to.be.an('array').that.is.empty
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = issueReducer(undefined, {})
      expect(state).to.be.an('array').that.is.empty
      state = issueReducer(state, { type: '@@@@@@@' })
      expect(state).to.be.an('array').that.is.empty
    })
  })

  describe('(Action Creator) getIssues', () => {

    it('Should be exported as a function.', () => {
      expect(getIssues).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(getIssues()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return getIssues().should.eventually.be.fulfilled
    })

  })


})
