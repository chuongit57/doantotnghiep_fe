import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import {Button, Grid, Paper} from '@material-ui/core'

const useStyles = makeStyles({
  sliderImage: {
    height: 500,
  },
})

function Item(props) {
  const classes = useStyles()
  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid item>
          <img className={classes.sliderImage} src={props.item.image} alt="" />
        </Grid>
        <Grid item>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>

          <Button className="CheckButton">Check it out!</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const Slider = () => {
  var items = [
    {
      image: '/image/samsung-galaxy-a02-xanhduong-600x600-600x600.jpg',
      name: 'Samsung Galaxy A02',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      image: '/image/xiaomi-redmi-note-10-thumb-green-600x600.jpg',
      name: 'Xiaomi Redmi Note 10 (6GB/128GB)',
      description: 'Hello World!',
    },
    {
      image: '/image/iphone-12-xanh-duong-600x600.jpg',
      name: 'iPhone 12 64GB',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      image: '/image/samsung-galaxy-s21-tim-600x600.jpg',
      name: 'Samsung Galaxy S21 5G',
      description: 'Hello World!',
    },
  ]

  return (
    <Carousel navButtonsAlwaysVisible>
      {items.map((item, i) => (
        <Paper key={i}>
          <Item item={item} />
        </Paper>
      ))}
    </Carousel>
  )
}

export default Slider
