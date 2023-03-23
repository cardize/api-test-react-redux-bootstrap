import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { addUserAction } from '../redux/actions/creators'
import { connect } from 'react-redux'

class AddUser extends Component {
  state = {
    name: '',
    email: '',
    gender: '',
    status: 'active',
  }

  handleTextChange = (event) => {
    const {
      target: { name, value },
    } = event
    this.setState({ ...this.state, [name]: value })
    console.log(this.state)
  }
  handleSelectChange = (event) => {
    this.setState({ ...this.state, gender: event.target.value })
    console.log(this.state)
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addUserAction(this.state)
    this.setState({
      name: '',
      email: '',
      gender: '',
      status: 'active',
    })
  }

  render() {
    return (
      <div className='container container-small' id='update'>
        <Card className={'border border-dark bg-dark text-white'}>
          <Card.Header>
            <h3>Add User</h3>
          </Card.Header>
          <div className='form-container'>
            <Form onSubmit={this.handleOnSubmit}>
              <Card.Body>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    onChange={this.handleTextChange}
                    value={this.state.name}
                    className='form-control p-2'
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Email address</label>
                  <input
                    type='email'
                    name='email'
                    onChange={this.handleTextChange}
                    value={this.state.email}
                    className='form-control p-2'
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Gender</label>
                  <Form.Select
                    onChange={this.handleSelectChange}
                    value={this.state.gender}
                    className='form-control p-2'
                    aria-label='Default select example'
                  >
                    <option>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </Form.Select>
                </div>
                <br></br>

                <div className='form-group form-group__buttons'>
                  <Button className='btn btn-primary' type='submit'>
                    Add User
                  </Button>
                  <Button
                    id='btn'
                    href='/'
                    className='w-30 float-right'
                    variant='primary'
                  >
                    Back
                  </Button>
                </div>
              </Card.Body>
            </Form>
          </div>
        </Card>
      </div>
    )
  }
}
export default connect(null, { addUserAction })(AddUser)
