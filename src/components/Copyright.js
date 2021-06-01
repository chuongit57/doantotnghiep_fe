import {Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import React from 'react'

const Copyright = ({path}) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to={path}>Your Website</Link> {2021}
    </Typography>
  )
}

export default Copyright
