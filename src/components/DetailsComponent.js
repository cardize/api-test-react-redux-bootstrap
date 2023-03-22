import React, { useEffect, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { getUserAction } from '../redux/actions/creators'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewDetails = () => {
  let dispatch = useDispatch()

  const [state, setState] = useState({
    name: '',
    email: '',
    gender: '',
  })
  let { id } = useParams()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserAction(id))
  }, [dispatch, id])

  useEffect(() => {
    if (user) {
      setState({ ...user })
    }
  }, [user])

  const { name, email, gender, status } = state

  return (
    <div className='container' id='update'>
      <Card className={'border border-dark bg-dark text-white'}>
        <Card.Header>
          <h3>User Detail</h3>
        </Card.Header>
        <Form>
          <Card.Body id='body'>
            <div className='container'>
              <div className='form-group'>
                <label>Name:</label>
                <input
                  value={name}
                  className='form-control w-50 p-2'
                  required
                  disabled
                />
              </div>
              <div className='form-group'>
                <label>E-Mail::</label>
                <input
                  value={email}
                  className='form-control w-50 p-2'
                  required
                  disabled
                />
              </div>
              <div className='form-group'>
                <label>Gender:</label>
                <input
                  value={gender}
                  className='form-control w-50 p-2'
                  required
                  disabled
                />
              </div>
              <div className='form-group'>
                <label>Status:</label>
                <input
                  value={status}
                  className='form-control w-50 p-2'
                  required
                  disabled
                />
              </div>
              <br></br>
              <div className='form-group'>
                <Button href='/' className='w-30 float-right' type='submit'>
                  Back
                </Button>
                <Button
                  id='btn'
                  href={'/update/' + id}
                  className='w-30 float-right'
                  variant='primary'
                >
                  Update
                </Button>
              </div>
            </div>
          </Card.Body>
        </Form>
      </Card>
    </div>
  )
}

export default ViewDetails
