import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {Route, Switch} from 'react-router-dom'
import routeItems from './routes'
import PrivateRoute from '../components/PrivateRoute'
import loadable from '@loadable/component'
import Loading from '../components/Loading'

const renderRoute = ({path, exact, component: Component, login}, index) => {
  return login === true ? <PrivateRoute key={index} exact={exact} path={path} component={Component} /> : <Route key={index} exact={exact} path={path} component={Component} />
}

const routes = (
  <TransitionGroup>
    <CSSTransition classNames="fade" timeout={300}>
      <Switch>
        {routeItems.map(renderRoute)}
        <Route
          component={loadable(() => import('../pages/NotFound/NotFound'), {
            fallback: <Loading />,
          })}
        />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
)

export default routes
