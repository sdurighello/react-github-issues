import IssuesRoute from 'routes/Issues'

describe('(Route) Issues', () => {
  it('returns a route configuration object', () => {
    expect(typeof IssuesRoute({})).to.equal('object')
  })

  it('has a path \'issues\'', () => {
    expect(IssuesRoute({}).path).to.equal('issues')
  })
})
