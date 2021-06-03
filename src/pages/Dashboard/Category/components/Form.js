/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Grid, TextField} from '@material-ui/core'
import {useFormik} from 'formik'
import * as yup from 'yup'
import DialogTemplate from '../../../../components/Dialog'
import {useOnAddAPICategory, useOnEditAPICategory} from '../../../../hooks/category'
import {useECategory} from '../../../../hooks/editCategory'
import {isEmpty} from '../../../../utils'

const validationSchema = yup.object({
  categoryCode: yup.string("Enter your category's code").required('Code is required'),
  categoryName: yup.string("Enter your category's categoryName").required('Name is required'),
})

const Form = (props) => {
  const {open, onClose, onSubmit, title} = props
  const [isEdit, setIsEdit] = useState(false)
  const onAddAPICategory = useOnAddAPICategory()
  const onEditAPICategory = useOnEditAPICategory()
  const eCategory = useECategory()

  const formik = useFormik({
    initialValues: {
      categoryCode: '',
      categoryName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (isEdit) {
        onEditAPICategory(
          {
            id: eCategory.id,
            ...values,
          },
          () => {
            handleClose()
          },
        )
      } else {
        onAddAPICategory(values, () => {
          handleClose()
        })
      }
    },
  })

  useEffect(() => {
    if (!isEmpty(eCategory)) {
      setIsEdit(true)
      formik.setValues({
        categoryCode: eCategory.category_code,
        categoryName: eCategory.category_name,
      })
    }
  }, [eCategory])

  const handleSubmit = () => {
    formik.handleSubmit()
  }

  const handleClose = () => {
    setIsEdit(false)
    formik.resetForm()
    onClose()
  }

  return (
    <DialogTemplate open={open} onClose={handleClose} onSubmit={handleSubmit} title={isEdit ? 'Edit' : 'Create'}>
      <Grid container spacing={1}>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    disabled={isEdit}
                    id="categoryCode"
                    label="Code"
                    variant="outlined"
                    name="categoryCode"
                    value={formik.values.categoryCode}
                    onChange={formik.handleChange}
                    error={formik.touched.categoryCode && Boolean(formik.errors.categoryCode)}
                    helperText={formik.touched.categoryCode && formik.errors.categoryCode}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="categoryName"
                    label="Name"
                    variant="outlined"
                    name="categoryName"
                    value={formik.values.categoryName}
                    onChange={formik.handleChange}
                    error={formik.touched.categoryName && Boolean(formik.errors.categoryName)}
                    helperText={formik.touched.categoryName && formik.errors.categoryName}
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
