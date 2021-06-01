import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from '../../../components/Copyright'
import {ROUTER_NAME} from '../../../configs'
import {COLORS} from '../../../utils/color'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: COLORS.lightPrimaryColor.background,
  },
}))

export default function StickyFooter() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="body1">DO AN TOT NGHIEP</Typography>
        <Copyright path={ROUTER_NAME.HOME} />
      </Container>
    </footer>
  )
}
