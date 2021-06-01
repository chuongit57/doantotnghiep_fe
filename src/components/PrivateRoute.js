import React from 'react'
import {Route, Redirect} from 'react-router-dom'
// import {useUser} from '../hooks/user'
import {getToken} from '../utils/localStorages'
import {ROUTER_NAME} from '../configs'

const PrivateRoute = (props) => {
  // const user = useUser()
  const user = {token: getToken()}
  return user.token ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: ROUTER_NAME.ADMIN_SIGNIN,
        state: {from: props.location},
      }}
    />
  )
}

export default PrivateRoute
