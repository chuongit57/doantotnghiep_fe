import React from 'react'
import {Box, Grid, TextField} from '@material-ui/core'
import {useFormik} from 'formik'
import * as yup from 'yup'
import DialogTemplate from '../../../../components/Dialog'
import ImageUploader from '../../../../components/ImageUploader'

const validationSchema = yup.object({
  name: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  parentId: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
})

const Form = (props) => {
  const {open, onClose, onSubmit} = props

  const formik = useFormik({
    initialValues: {
      name: 'foobar@example.com',
      parentId: 'foobar',
      sortOrder: 1,
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
          <Box style={{width: 150, height: 200, alignItems: 'center', justifyContent: 'center'}} border={1} borderColor={'black'}>
            <ImageUploader />
          </Box>
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
                    id="outlined-basic"
                    label="Parent"
                    variant="outlined"
                    name="parentId"
                    value={formik.values.parentId}
                    onChange={formik.handleChange}
                    error={formik.touched.parentId && Boolean(formik.errors.parentId)}
                    helperText={formik.touched.parentId && formik.errors.parentId}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="sortOrder"
                    label="Sort Order"
                    variant="outlined"
                    name="sortOrder"
                    value={formik.values.sortOrder}
                    onChange={formik.handleChange}
                    error={formik.touched.sortOrder && Boolean(formik.errors.sortOrder)}
                    helperText={formik.touched.sortOrder && formik.errors.sortOrder}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="status"
                    label="Status"
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
