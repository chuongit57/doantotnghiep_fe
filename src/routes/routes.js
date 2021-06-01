import React from 'react'
import loadable from '@loadable/component'
import Loading from '../components/Loading'

import {ROUTER_NAME} from '../configs'

// Noted: can't create function, dynamic import not working :v
const routeItems = [
  {
    path: ROUTER_NAME.ADMIN_HOME,
    component: loadable(() => import('../pages/Dashboard/Home/Home'), {
      fallback: <Loading />,
    }),
    exact: true,
    login: true,
  },

  {
    path: ROUTER_NAME.ADMIN_CATEGORIES,
    component: loadable(() => import('../pages/Dashboard/Category/Category'), {
      fallback: <Loading />,
    }),
    exact: true,
    login: true,
  },
  {
    path: ROUTER_NAME.ADMIN_PRODUCTS,
    component: loadable(() => import('../pages/Dashboard/Product/Product'), {
      fallback: <Loading />,
    }),
    exact: true,
    login: true,
  },
  {
    path: ROUTER_NAME.ADMIN_USERS,
    component: loadable(() => import('../pages/Dashboard/User/User'), {
      fallback: <Loading />,
    }),
    exact: true,
    login: false,
  },
  {
    path: ROUTER_NAME.ADMIN_SIGNIN,
    component: loadable(() => import('../pages/SignIn'), {
      fallback: <Loading />,
    }),
    exact: true,
    login: false,
  },
  {
    path: ROUTER_NAME.ADMIN_SIGNUP,
    component: loadable(() => import('../pages/SignUp'), {
      fallback: <Loading />,
    }),
    exact: true,
    login: false,
  },
  // {
  //   path: ROUTER_NAME.HOME_SHOPPING_CART,
  //   component: loadable(() => import('../pages/Views/ShoppingCart/ShoppingCart'), {
  //     fallback: <Loading />,
  //   }),
  //   exact: true,
  //   login: false,
  // },
  // {
  //   path: ROUTER_NAME.HOME_ABOUT,
  //   component: loadable(() => import('../pages/Views/AboutUs/AboutUs'), {
  //     fallback: <Loading />,
  //   }),
  //   exact: true,
  //   login: false,
  // },
  // {
  //   path: ROUTER_NAME.HOME_CONTACT,
  //   component: loadable(() => import('../pages/Views/Contact/Contact'), {
  //     fallback: <Loading />,
  //   }),
  //   exact: true,
  //   login: false,
  // },
  // {
  //   path: ROUTER_NAME.HOME_PRODUCTS,
  //   component: loadable(() => import('../pages/Views/Products/Products'), {
  //     fallback: <Loading />,
  //   }),
  //   exact: true,
  //   login: false,
  // },
  {
    path: ROUTER_NAME.HOME,
    component: loadable(() => import('../pages/Views/Home/Home'), {
      fallback: <Loading />,
    }),
    exact: false,
    login: false,
  },
]
export default routeItems
