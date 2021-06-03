/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import {Box, Grid, TextField} from '@material-ui/core'
import {useFormik} from 'formik'
import * as yup from 'yup'
import DialogTemplate from '../../../../components/Dialog'
import ImageUploader from '../../../../components/ImageUploader'
import {useOnAddAPIProduct} from '../../../../hooks/products'

const validationSchema = yup.object({
  product_code: yup.string('Enter your code').required('code is required'),
  product_name: yup.string('Enter your name').required('name is required'),
  category_id: yup.string('Enter your category').required('category is required'),
  price: yup.string('Enter your price').required('price is required'),
})

const Form = (props) => {
  const {open, onClose, onSubmit} = props
  const onAddAPIProduct = useOnAddAPIProduct()

  const formik = useFormik({
    initialValues: {
      image: null,
      product_code: '',
      product_name: '',
      category_id: '',
      price: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      const params = {
        productImage: values.image,
        productCode: values.product_code,
        productName: values.product_name,
        categoryId: values.category_id,
        price: values.price,
      }
      onAddAPIProduct(params)
      // onSubmit()
      resetForm()
    },
  })

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('???')
  //     formik.setFieldValue('category_id', 15)
  //   }, 10000)
  // }, [])

  const handleSubmit = () => {
    formik.handleSubmit()
  }

  return (
    <DialogTemplate open={open} onClose={onClose} onSubmit={handleSubmit} title="Create">
      <Grid container spacing={1}>
        <Grid item>
          <Box style={{width: 150, height: 200, alignItems: 'center', justifyContent: 'center'}} border={1} borderColor={'black'}>
            <ImageUploader name="image" value={formik.values.image} onChange={formik.setFieldValue} />
          </Box>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="product_code"
                    label="Code"
                    variant="outlined"
                    name="product_code"
                    value={formik.values.product_code}
                    onChange={formik.handleChange}
                    error={formik.touched.product_code && Boolean(formik.errors.product_code)}
                    helperText={formik.touched.product_code && formik.errors.product_code}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="product_name"
                    label="Name"
                    variant="outlined"
                    name="product_name"
                    value={formik.values.product_name}
                    onChange={formik.handleChange}
                    error={formik.touched.product_name && Boolean(formik.errors.product_name)}
                    helperText={formik.touched.product_name && formik.errors.product_name}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="category_id"
                    label="Category Id"
                    variant="outlined"
                    name="category_id"
                    value={formik.values.category_id}
                    onChange={formik.handleChange}
                    error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                    helperText={formik.touched.category_id && formik.errors.category_id}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="price"
                    label="Price"
                    variant="outlined"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
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
