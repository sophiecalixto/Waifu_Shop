import React from 'react'
import { connect } from 'react-redux'
import { Container } from './styles'
import { MdAddShoppingCart } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { format } from '../../util/format'
import api from '../../services/api';

import { addToCart } from '../../store/modules/actions'

function Home(props) {
  const [products, setProducts] = useState([]);

  async function fetchData() {
     const response = await api.get('products');
     const data = response.data.map(product => ({
       ...product,
       priceFormatted: format(product.price)
     }))
     setProducts(data);
  }

   useEffect(() => {
      fetchData();
   }, [])

   const handleAddProduct = product => {
     props.dispatch(addToCart(product))
   }

  return (
    <Container>
      {products.map(product => (
         <li>
         <img src={product.image} alt={product.title} />
         <strong>{product.title}</strong>
         <span>{product.priceFormatted}</span>
 
         <button type="button" onClick={() => handleAddProduct(product)}>
           <div>
             <MdAddShoppingCart size={36} color="#FFF"/>
           </div>
           <span>ADICIONAR AO CARRINHO</span>
         </button>
       </li>
      ))}
    </Container>
  )
}

export default connect()(Home);