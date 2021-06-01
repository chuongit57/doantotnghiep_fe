import React from 'react'
import {Grid, TextField} from '@material-ui/core'
import {useFormik} from 'formik'
import * as yup from 'yup'
import DialogTemplate from '../../../../components/Dialog'

// name
// username
// phone
// email
// email_verified_at
// status

const validationSchema = yup.object({
  name: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  username: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  phone: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  status: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
})

const Form = (props) => {
  const {open, onClose, onSubmit} = props

  const formik = useFormik({
    initialValues: {
      name: 'foobar@example.com',
      username: 'foobar',
      phone: '',
      email: '',
      status: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      onSubmit()
    },
  })

  const handleSubmit = () => {
    formik.handleSubmit()
  }

  return (
    <DialogTemplate open={open} onClose={onClose} onSubmit={handleSubmit} title="Hello">
      <Grid container spacing={1}>
        <Grid item>
          <div style={{width: 150, height: 200, background: 'red'}}></div>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="username"
                    label="Parent"
                    variant="outlined"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="phone"
                    label="Sort Order"
                    variant="outlined"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="email"
                    label="Status"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="status"
                    label="Sort Order"
                    variant="outlined"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                    helperText={formik.touched.status && formik.errors.status}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DialogTemplate>
  )
}

export default Form
