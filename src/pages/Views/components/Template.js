import {Badge, Box, Container, Grid, IconButton, List, ListItem, ListItemText, Toolbar} from '@material-ui/core'
import React from 'react'
import {useHistory, Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import reactLogo from '../../../assets/image/react-logo.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import StickyFooter from './StickyFooter'
import {ROUTER_NAME} from '../../../configs'
import {COLORS} from '../../../utils/color'
import {useOrders} from '../../../hooks/orders'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - 48px)`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: 'center',
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  classRoot: {
    background: COLORS.darkPrimaryColor.background,
  },
}))

const Template = (props) => {
  const {children} = props
  const classes = useStyles()
  const history = useHistory()
  const orders = useOrders()

  const handleGoShoppingCart = () => {
    history.push(ROUTER_NAME.HOME_SHOPPING_CART)
  }

  const handleGoHome = () => {
    history.push(ROUTER_NAME.HOME)
  }

  const handleGoSignIn = () => {
    history.push(ROUTER_NAME.HOME_SIGNIN)
  }

  const navLinks = [
    {title: `Products`, path: ROUTER_NAME.HOME_PRODUCTS},
    {title: `about us`, path: ROUTER_NAME.HOME_ABOUT},
    {title: `contact`, path: ROUTER_NAME.HOME_CONTACT},
  ]

  return (
    <>
      <div className={classes.classRoot}>
        <Container className={classes.navDisplayFlex}>
          <Grid container spacing={1} justify="space-between" alignItems="center">
            <Grid item>
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home" onClick={handleGoHome}>
                  <img src={reactLogo} style={{maxHeight: 34, maxWidth: 34}} className="App-logo" alt="logo" />
                </IconButton>
                <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                  {navLinks.map(({title, path}) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Toolbar>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <IconButton onClick={handleGoShoppingCart}>
                    <Badge badgeContent={orders.length} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={handleGoSignIn}>
                    <AccountCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.root}>
        <Box mt={3} mb={3}>
          {children}
        </Box>
        <StickyFooter />
      </div>
    </>
  )
}

export default Template
