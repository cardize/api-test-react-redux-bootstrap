import React, { useEffect, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { onLoginAction } from '../redux/actions/creators'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  let dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(true)

  const [state, setState] = useState({
    name: '',
    token: '',
    email: '',
    gender: 'male',
    status: 'active',
  })

  const { name, token } = state
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    setIsLogin(user ? false : true)
    console.log('User', user)
  }, [dispatch, user])

  const handleTextChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value, email: value + '@msstestzone.com' })
    dispatch(onLoginAction(state))
    if (user) {
      setIsLogin(false)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(onLoginAction(state))
    // console.log(state)
  }

  return (
    <div className='container container-small'>
      <Card className={'border border-dark bg-dark text-white'}>
        <Card.Header>
          <h3>Login</h3>
        </Card.Header>
        <div className='form-container'>
          <Form onSubmit={handleOnSubmit}>
            <Card.Body>
              <div className='form-group'>
                <label>Username</label>
                <input
                  minLength='3'
                  type='text'
                  name='name'
                  onChange={handleTextChange}
                  value={name || ''}
                  className='form-control p-2'
                  required
                />
              </div>
              <div className='form-group'>
                <label>Token</label>
                <input
                  type='password'
                  name='token'
                  onChange={handleTextChange}
                  value={token || ''}
                  className='form-control p-2'
                  required
                />
              </div>

              <br></br>
              <div className='form-group form-group__buttons'>
                <Button type='submit' disabled={isLogin}>
                  Login
                </Button>
              </div>
            </Card.Body>
          </Form>
        </div>
      </Card>
    </div>
  )
}

export default Login
