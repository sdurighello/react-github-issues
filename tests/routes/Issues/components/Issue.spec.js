import React from 'react'
import { bindActionCreators } from 'redux'
import { Issue } from 'routes/Issues/components/Issue'
import { shallow } from 'enzyme'

describe('(Component) Issue', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      issue : {id: 1, number: 7, title: 'issue title'},
      isFetching: false,
      ...bindActionCreators({
        getComments: (_spies.getComments = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Issue {..._props} />)
  })

  it('renders as a <Paper>.', () => {
    expect(_wrapper.is('Paper')).to.equal(true)
  })

  describe('Comments Button', () => {
    let _button

    beforeEach(() => {
      _button = _wrapper.find('RaisedButton')
    })

    it('exists', () => {
      expect(_button).to.exist()
    })

    it('Calls getComments when clicked', () => {
      _spies.dispatch.should.have.not.been.called()

      _button.simulate('click')

      _spies.dispatch.should.have.been.called()
      _spies.getComments.should.have.been.called()
    })
  })
})
