import React, { useEffect, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { getUserAction, updateUserAction } from '../redux/actions/creators'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

const UpdateUser = () => {
  let dispatch = useDispatch()
  let history = useHistory()
  let { id } = useParams()

  const [state, setState] = useState({
    name: '',
    email: '',
    gender: '',
  })

  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserAction(id))
  }, [dispatch, id])

  useEffect(() => {
    if (user) {
      setState({ ...user })
    }
  }, [user])

  const { name, email, gender } = state

  const handleTextChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
    console.log(state)
  }
  const handleSelectChange = (event) => {
    setState({ ...state, gender: event.target.value })
    console.log(state)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUserAction(state, id))
    history.push('/')
  }

  return (
    <div className='container container-small' id='update'>
      <Card className={'border border-dark bg-dark text-white'}>
        <Card.Header>
          <h3>Edit User</h3>
        </Card.Header>
        <div className='form-container'>
          <Form onSubmit={handleOnSubmit}>
            <Card.Body>
              <div className='form-group'>
                <label>Name</label>
                <input
                  type='text'
                  name='name'
                  onChange={handleTextChange}
                  value={name || ''}
                  className='form-control p-2'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Email address</label>
                <input
                  type='email'
                  name='email'
                  onChange={handleTextChange}
                  value={email || ''}
                  className='form-control p-2'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Gender</label>
                <Form.Select
                  onChange={handleSelectChange}
                  value={gender}
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
                <Button href='/' className='w-30 float-right' variant='primary'>
                  Back
                </Button>
                <Button id='btn' className='w-30 float-right' type='submit'>
                  Edit User
                </Button>
              </div>
            </Card.Body>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default UpdateUser
