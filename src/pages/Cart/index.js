import React from "react";
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md";
import { Container, ProductTable, Total} from './styles';
import { removeFromCart, updateAmount } from "../../store/modules/actions";
import { format } from "../../util/format";

function Cart( { cart, total, dispatch } ) {

  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>
        <tbody>
          { cart.map(product => (
            <tr>
            <td>
              <img
                src={product.image}
                alt={product.title}
              />
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td>
              <button type="button" onClick={() => dispatch(updateAmount(product.id, product.amount - 1))}>
                <MdRemoveCircleOutline size={20} color="#e03eda" />
              </button>
              <input type="number" readOnly value={product.amount} />
              <button type="button" onClick={() => dispatch(updateAmount(product.id, product.amount + 1))}>
                <MdAddCircleOutline size={20} color="#e03eda" />
              </button>
            </td>
            <td>
              <strong>{product.subtotal}</strong>
            </td>
            <td>
              <button type="button" onClick={() => dispatch(removeFromCart(product.id))}>
                <MdDelete size={20} color="#e03eda" />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default connect(state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: format(product.price * product.amount)
  })),
    total: format(state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)),
}))(Cart)
