import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import BasketItem from './BasketItem';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { ShopContext } from '../context';

const BasketList = (props) => {

    const {order = [], handleBasketShow=Function.prototype, } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el)=>{
      return sum + el.price * el.quantity
    },0)


  return (
     <div className="modal_basket">
      <Card.Header className=" bg-black d-flex justify-content-between align-items-center" style={{color:'#fff'}}>
        Корзина <AiOutlineCloseCircle onClick={handleBasketShow} className='close_btn'/>
      </Card.Header>
      <ListGroup className='basket_list'>
            {
              order.length ? order.map((item)=>(
                <BasketItem 
                  key={item.id} 
                  {...item} 
                  
                />

              )) : (
            <Card style={{ width: '18rem' }}>
                <Card.Header>Корзина пуста</Card.Header>
            </Card>
              )
            }
      </ListGroup>
      {
        order.length ? <Card.Header className=" bg-black " style={{color:'#fff'}}>Общая стоимость {totalPrice} ₽</Card.Header> : ''
      }
      
    </div>
  )
    ;
};

export default BasketList;
