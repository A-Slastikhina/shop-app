import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './Basketlist';
import { Alert } from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [alertName, setAlertName] = useState('');
  const quantityIncrement = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () =>{
   
    setAlertName('');
  }
  const quantityDecrement = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        let newQuantity = el.quantity - 1;

        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const openBasketHandle = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const deletFromBusket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };
  const addToBusket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name)
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="main-content container">
      <Cart
        quantity={order.length}
        openBasketHandle={openBasketHandle}
      />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList
          goods={goods}
          addToBusket={addToBusket}
        />
      )}
      {isBasketOpen && (
        <BasketList
          order={order}
          openBasketHandle={openBasketHandle}
          deletFromBusket={deletFromBusket}
          quantityIncrement={quantityIncrement}
          quantityDecrement={quantityDecrement}
        />
      )}
      {
        alertName && <Alert name={alertName} closeAlert = {closeAlert}/>
      }
    </main>
  );
}
export { Shop };
