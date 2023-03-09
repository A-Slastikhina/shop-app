function BasketItem (props){
    const {id,name,price, quantity, deletFromBusket= Function.prototype, quantityIncrement = Function.prototype, quantityDecrement=Function.prototype}= props;
    return <li className="collection-item ">
                {name}: <span className="secondary-content delete-good right" onClick={()=>{deletFromBusket(id)}}>
                    <i className="material-icons">clear</i></span>
                <div className="quantity-container">
                    <button className="quantityDecrement-btn " onClick={()=>quantityDecrement(id)}>−</button> 
                    {quantity} 
                    <button className="quantityIncrement-btn" onClick={()=>quantityIncrement(id)}>+</button> 
                    x {price} руб.
                    
                </div>
                
            </li>
}

export {BasketItem}