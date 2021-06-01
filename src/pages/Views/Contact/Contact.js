import React from 'react'
import {Link} from 'react-router-dom'
import {ROUTER_NAME} from '../../../configs'

const Contact = () => {
  return (
    <div>
      Contact Page <Link to={ROUTER_NAME.HOME}>Go Home</Link>
    </div>
  )
}

export default Contact
