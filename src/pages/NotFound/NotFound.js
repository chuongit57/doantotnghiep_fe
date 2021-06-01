import React from 'react'
import './style.css'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({button: {marginTop: theme.spacing(2)}}))

const NotFoundPage = (props) => {
  const classes = useStyles()
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-bg">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>oops!</h1>
        <h2>Error 404 : Page Not Found</h2>
        <Button variant="outlined" color="primary" className={classes.button} onClick={() => props.history.goBack()}>
          Go back
        </Button>
      </div>
    </div>
  )
}
export default NotFoundPage
