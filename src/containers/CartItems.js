import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Image, Item, Container } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleMetadata = () => {
  const cartItems = useSelector(state => state.allProducts.cart)
  return(
    <Container text>      
      <Item.Group divided>
        {
          cartItems.map(item => {
            const {id, title, image, price, description} = item;
            return (

                <Item key = {id}>
                <Item.Image size='tiny' src={image} />

                <Item.Content>
                  <Item.Header className='itemHeader'><Link style={{textDecoration:"none"}} to={`/product/${id}`}>{title}</Link></Item.Header>
                  <Item.Meta>
                    <span>{price}</span>
                    <span className='stay'>1 Month</span>
                  </Item.Meta>
                  <Item.Description>{description}</Item.Description>
                </Item.Content>
              </Item>
            )
          })

        }
      </Item.Group>
    </Container>
)
}
export default ItemExampleMetadata