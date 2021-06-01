import React from 'react'
import {Container, Grid} from '@material-ui/core'
import ProductItem from '../../../components/ProductItem'
import {
  // useloadProducts,
  useProducts,
} from '../../../hooks/products'
// import Template from '../components/Template'

const Products = () => {
  // const loadProducts = useloadProducts()
  const products = useProducts()

  // useEffect(() => {
  //   loadProducts()
  // }, [])

  return (
    // <Template>
    <Container>
      <Grid container spacing={2}>
        {products.map((item) => (
          <Grid item key={item.id}>
            <ProductItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
    // </Template>
  )
}

export default Products
