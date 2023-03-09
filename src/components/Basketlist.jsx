import { BasketItem } from "./Basketitem";

function BasketList (props){
    const {order = [], openBasketHandle= Function.prototype, deletFromBusket=Function.prototype, quantityIncrement = Function.prototype,quantityDecrement = Function.prototype } = props;
    const totalPrice = order.reduce((sum, el)=>{
        return sum = sum + el.price * el.quantity
    },0)
    return <div className="basket-container">
            <ul className="collection basket-list">
                    <li className="collection-item active">Корзина
                        <span onClick={openBasketHandle} className="secondary-content"><i className="material-icons">clear</i></span>
                    </li>
                    {
                        order.length ? order.map(item =>(<BasketItem key={item.id} deletFromBusket={deletFromBusket} quantityIncrement={quantityIncrement} quantityDecrement={quantityDecrement} {...item}/>))
                        : <li className="collection-item">Корзина пуста</li>
                    }
                    <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
                    <li className="collection-item">
                       <button className="basket__purchase-btn">Оформить заказ</button>
                    </li>
            </ul>
    </div>
}

export {BasketList}