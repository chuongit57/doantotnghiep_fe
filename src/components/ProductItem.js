import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useOnAddProduct} from '../hooks/orders'
import {convertVND} from '../utils'

const useStyles = makeStyles({
  sliderImage: {
    height: 500,
  },
  root: {
    // maxWidth: 345,
    width: 230,
  },
  media: {
    height: 300,
    backgroundSize: 'contain',
  },
})

const ProductItem = (props) => {
  const classes = useStyles()
  const {item, fullWidth} = props
  const onAddOrder = useOnAddProduct()

  const handleAddCart = (value) => {
    onAddOrder({...value, count: 1})
  }
  return (
    <Card className={classes.root} style={{width: fullWidth ? '100%' : undefined}}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.image} title="Contemplative Reptile" />
        <CardContent>
          <Typography ariant="body2">{item.name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {convertVND(item.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAddCart.bind(this, item)}>
          Add Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductItem
