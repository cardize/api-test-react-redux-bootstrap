import React, { useEffect, useState } from 'react'

import { Card, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersAction, deleteUserAction } from '../redux/actions/creators'
import * as ReactBootstrap from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

const UsersList = () => {
  let dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)

  const { users } = useSelector((state) => state.user)

  const usersPerPage = 4
  const pagesVisited = pageNumber * usersPerPage
  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?'));
    dispatch(deleteUserAction(id))
  }

  useEffect(() => {
    dispatch(getUsersAction(), setLoading(true))
  }, [dispatch])

  return (
    <div className='container'>
      <Card>
        <Card.Header className={'border border-dark bg-dark text-white'}>
          <h3>User List</h3>
        </Card.Header>
        <Card.Body>
          <span className='col-md-8'>
            <span className='input-group mb-3 '>
              <input
                type='text'
                className='form-control '
                placeholder='Search user'
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                }}
              />
              <Link
                type='button'
                to={'/add'}
                className='btn btn-primary '
                id='tab'
              >
                Add User
              </Link>
            </span>
          </span>

          <Table variant=''>
            <thead className={'border border-dark bg-dark text-white'}>
              <tr>
                <th>id</th>
                <th>Email</th>
                <th>Name</th>
                <th className='td__actions'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                users
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  // eslint-disable-next-line array-callback-return
                  .filter((val) => {
                    if (searchTerm === '') {
                      return val
                    } else if (
                      val.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      val.email.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val
                    }
                  })
                  .map((user) => (
                    <tr key={user.id}>
                      <td>
                        <Link
                          type='button'
                          to={'/details/' + user.id}
                          className='btn'
                        >
                          {user.id}
                        </Link>
                      </td>
                      <td>
                        <Link
                          type='button'
                          to={'/details/' + user.id}
                          className='btn'
                        >
                          {user.email}
                        </Link>
                      </td>
                      <td>
                        <Link
                          type='button'
                          to={'/details/' + user.id}
                          className='btn'
                        >
                          {user.name}
                        </Link>
                      </td>

                      <td className='td__actions-buttons'>
                        <div
                          className='btn-group'
                          role='group'
                          aria-label='Basic example'
                        >
                          <Link
                            type='button'
                            to={'/update/' + user.id}
                            className='btn btn-primary td__button'
                          >
                            Edit
                          </Link>
                          <Button
                            type='button'
                            onClick={() => handleDelete(user.id)}
                            className='btn btn-danger td__button'
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
              ) : (
                <ReactBootstrap.Spinner animation='border' variant='primary' />
              )}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttns'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default UsersList
