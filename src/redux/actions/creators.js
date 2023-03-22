import { addUser, getUser, getUsers, deleteUser, updateUser } from './actions'

import axios from 'axios'

export const addUserAction = (user) => {
  const token =
    'Bearer aec0a06f28bba4a2102246d2b0f0d1bba0f8163c9d024efb6244f73588a411ef'
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
  const token =
    'Bearer aec0a06f28bba4a2102246d2b0f0d1bba0f8163c9d024efb6244f73588a411ef'
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
  const token =
    'Bearer aec0a06f28bba4a2102246d2b0f0d1bba0f8163c9d024efb6244f73588a411ef'
  return (dispatch) => {
    axios
      .get('https://gorest.co.in/public/v2/users', {
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
  const token =
    'Bearer aec0a06f28bba4a2102246d2b0f0d1bba0f8163c9d024efb6244f73588a411ef'
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
  const token =
    'Bearer aec0a06f28bba4a2102246d2b0f0d1bba0f8163c9d024efb6244f73588a411ef'
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
