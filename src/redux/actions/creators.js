import {
  onLogin,
  addUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from './actions'

import axios from 'axios'

export const onLoginAction = (user) => {
  const token = `Bearer ${user.token}`

  return (dispatch) => {
    axios
      .post('https://gorest.co.in/public/v2/users', user, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch(onLogin(response.data))
        console.log(response.data)
      })
      .catch((error) => {
        console.log('eror', error)
      })
  }
}

export const addUserAction = (user) => {
  const token = 'Bearer token'
  return (dispatch) => {
    axios
      .post('https://gorest.co.in/public/v2/users', user, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch(addUser(response.data))
        console.log(response.data)
      })
      .catch((error) => {
        console.log('eror', error)
      })
  }
}

export const getUserAction = (id) => {
  const token = 'Bearer token'
  return (dispatch) => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch(getUser(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getUsersAction = () => {
  const token = 'Bearer token'
  return (dispatch) => {
    axios
      .get('https://gorest.co.in/public/v2/users?page=1&per_page=40', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch(getUsers(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const deleteUserAction = (id) => {
  const token = 'Bearer token'
  return (dispatch) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch(deleteUser())
        dispatch(getUsersAction())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const updateUserAction = (user, id) => {
  const token = 'Bearer token'
  return (dispatch) => {
    axios
      .put(`https://gorest.co.in/public/v2/users/${id}`, user, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch(updateUser())
        dispatch(getUsersAction())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
