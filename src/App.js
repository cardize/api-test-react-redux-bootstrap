import UserListing from './pages/CustomerList.'
import UpdateDetails from './components/UpdateUser'
import ViewDetails from './components/DetailsComponent'
import AddUser from './components/AddUserComponent'
import Login from './pages/Login.'

import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route exact path={['/', '/defaultPath']} component={UserListing} />
      <Route exact path={['/update/:id']} component={UpdateDetails} />
      <Route exact path={['/details/:id']} component={ViewDetails} />
      <Route exact path={['/add']} component={AddUser} />
      <Route exact path={['/login']} component={Login} />
    </Router>
  )
}

export default App
