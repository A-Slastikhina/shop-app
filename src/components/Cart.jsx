function Cart(props) {
  const { quantity, openBasketHandle = Function.prototype } = props;

  return <div className="cart grey darken-3" onClick={openBasketHandle}>
         <i className="material-icons small white-text" >shopping_cart</i>
         {quantity ? (<span className="cart-quantity  white-text">{quantity}</span>)
         : null}
  </div>;
}

export { Cart };
