import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'
import MultiCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {useProducts} from '../../../../hooks/products'
import ProductItem from '../../../../components/ProductItem'
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
}

const useStyles = makeStyles({
  item: {
    padding: '20px 0 20px 20px',
  },
})

const NewProductItems = () => {
  const classes = useStyles()
  const products = useProducts()
  return (
    <>
      <Box mb={2}>
        <Typography variant="h6">New Products</Typography>
      </Box>
      <MultiCarousel
        itemClass={classes.item}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {products.slice(0, 6).map((item) => (
          <ProductItem key={item.id} fullWidth item={item} />
        ))}
      </MultiCarousel>
    </>
  )
}

export default NewProductItems
