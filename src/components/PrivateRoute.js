import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {ROUTER_NAME} from '../configs'
import {getToken} from '../utils/localStorages'

const PrivateRoute = (props) => {
  return getToken('TOKEN') ? (
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
