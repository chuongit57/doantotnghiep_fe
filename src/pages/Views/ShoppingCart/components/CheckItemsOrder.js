import React from 'react'
import {Box, Button, Divider, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import {useHistory} from 'react-router-dom'
import {
  useOnResetOrder,
  // useOnReceiverInfoChange,
  useOrders,
} from '../../../../hooks/orders'
import OrderItem from '../../../../components/OrderItem'
import {convertVND} from '../../../../utils'
import {useFormik} from 'formik'
import * as yup from 'yup'
import {ROUTER_NAME} from '../../../../configs'

const useStyles = makeStyles({
  typography: {
    fontWeight: 700,
  },
})

const validationSchema = yup.object({
  sex: yup.string('Enter your sex').required('Sex is required'),
  name: yup.string('Enter your name').required('Name is required'),
  phone: yup.string('Enter your phone').required('Phone is required'),
  deliveryAddress: yup.string('Enter your delivery address').required('Delivery Address is required'),
})

const CheckItemsOrder = (props) => {
  const {onNext} = props
  const classes = useStyles()
  const orders = useOrders()
  const history = useHistory()
  const onResetOrder = useOnResetOrder()
  const formik = useFormik({
    initialValues: {
      sex: 'female',
      name: '',
      phone: '',
      deliveryAddress: '',
      option: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      onResetOrder()
      onNext()
    },
  })

  const handleSumOrders = () => {
    let sum = 0
    orders.filter((i) => {
      sum += i.price * i.count
      return i
    })
    return sum
  }

  const handleSubmit = () => {
    formik.handleSubmit()
  }

  const handleGoHome = () => {
    history.push(ROUTER_NAME.HOME)
  }

  if (orders.length === 0) {
    return (
      <Box mt={10} textAlign="center">
        <ShoppingCartOutlinedIcon style={{fontSize: 100, color: '#f02200'}} />
        <Typography variant="body1">There are no products in the cart</Typography>
        <Button fullWidth variant="outlined" color="primary" onClick={handleGoHome}>
          Go Home
        </Button>
      </Box>
    )
  }

  return (
    <Paper elevation={0}>
      <Box p={3}>
        <Grid container direction="column" spacing={1}>
          {orders.map((item) => (
            <Grid item xs>
              <OrderItem key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
        <Box mt={2}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography className={classes.typography} variant="body1">
                Totals:
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typography} variant="body1">
                {convertVND(handleSumOrders())}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Divider />
      <Box p={3}>
        <Typography>CUSTOMER INFORMATION:</Typography>
        <Grid container direction="column" spacing={1}>
          <Grid item xs>
            <RadioGroup row aria-label="gender" name="sex" value={formik.values.sex} onChange={formik.handleChange}>
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            </RadioGroup>
          </Grid>
          <Grid item xs>
            <Grid container spacing={1}>
              <Grid item xs>
                <TextField fullWidth size="small" id="name" label="Name" variant="outlined" name="name" value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)} />
              </Grid>
              <Grid item xs>
                <TextField fullWidth size="small" id="phone" label="Phone" variant="outlined" name="phone" value={formik.values.phone} onChange={formik.handleChange} error={formik.touched.phone && Boolean(formik.errors.phone)} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography>DELIVERY ADDRESS:</Typography>
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              size="small"
              id="deliveryAddress"
              label="Delivery Address"
              variant="outlined"
              name="deliveryAddress"
              value={formik.values.deliveryAddress}
              onChange={formik.handleChange}
              error={formik.touched.deliveryAddress && Boolean(formik.errors.deliveryAddress)}
            />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              size="small"
              id="option"
              label="Other requirements (optional)"
              variant="outlined"
              name="option"
              value={formik.values.option}
              onChange={formik.handleChange}
              error={formik.touched.option && Boolean(formik.errors.option)}
            />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box p={3}>
        <Box mt={2}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography className={classes.typography} variant="body1">
                Totals:
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.typography} variant="body1">
                {convertVND(handleSumOrders())}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Button fullWidth variant="contained" color="primary" onClick={handleSubmit}>
            ORDER
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default CheckItemsOrder
