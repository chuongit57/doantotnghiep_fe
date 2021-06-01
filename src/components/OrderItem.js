import React from 'react'
import {Box, Button, ButtonGroup, Grid, Paper, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useOnProductNumberChange} from '../hooks/orders'
import {convertVND} from '../utils'

const useStyles = makeStyles({
  sliderImage: {
    height: 80,
    width: 80,
  },
  typographyTitle: {
    fontWeight: 700,
  },
})

const OrderItem = (props) => {
  const classes = useStyles()
  const {item} = props
  const onProductNumberChange = useOnProductNumberChange()

  const handleProductNumberChange = (value) => {
    onProductNumberChange({id: item.id, value})
  }
  return (
    <Paper variant="outlined" elevation={0}>
      <Box p={1}>
        <Grid container justify="space-between">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <img className={classes.sliderImage} src={item.image} alt="" />
              </Grid>
              <Grid item>
                <Typography className={classes.typographyTitle} variant="body1">
                  {item.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2} alignItems="flex-end">
              <Grid item>
                <Typography variant="body2">{convertVND(item.price)}</Typography>
              </Grid>
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button onClick={handleProductNumberChange.bind(this, -1)}>-</Button>
                  <Button disabled>{item.count}</Button>
                  <Button onClick={handleProductNumberChange.bind(this, 1)}>+</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default OrderItem
