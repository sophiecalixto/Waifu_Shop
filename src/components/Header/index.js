import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Container, Cart } from "./style";
import { MdShoppingBasket } from "react-icons/md";
import logo from "../../assets/images/logo.png";

function Header( {cartSize} ) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Waifu Shop" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header)
