import React from 'react'
import Template from '../components/Template'
import {Box, Container} from '@material-ui/core'
import Slider from './components/Slider'
import NewProductItems from './components/NewProductItems'
import ProductItems from './components/ProductItems'
import {Switch, Route} from 'react-router-dom'
import {ROUTER_NAME} from '../../../configs'
import Products from '../Products/Products'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import {Contact} from '../Contact'
import {AboutUs} from '../AboutUs'
import SignInPage from '../SignIn'

const HOME = () => (
  <Container>
    <Box mb={3}>
      <Slider />
    </Box>
    <Box mb={3}>
      <NewProductItems />
    </Box>
    <Box mb={3}>
      <ProductItems />
    </Box>
  </Container>
)

const HomePage = () => {
  // const loadProducts = useloadProducts()

  // useEffect(() => {
  //   loadProducts()
  // }, [])

  return (
    <Template>
      <Switch>
        <Route path={ROUTER_NAME.HOME_PRODUCTS}>
          <Products />
        </Route>
        <Route path={ROUTER_NAME.HOME_SHOPPING_CART}>
          <ShoppingCart />
        </Route>
        <Route path={ROUTER_NAME.HOME_CONTACT}>
          <Contact />
        </Route>
        <Route path={ROUTER_NAME.HOME_ABOUT}>
          <AboutUs />
        </Route>
        <Route path={ROUTER_NAME.HOME_SIGNIN}>
          <SignInPage />
        </Route>
        <Route path={ROUTER_NAME.HOME}>
          <HOME />
        </Route>
      </Switch>
    </Template>
  )
}

export default HomePage
