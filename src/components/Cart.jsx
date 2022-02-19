import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { BsCartCheck } from 'react-icons/bs';
import { ShopContext } from '../context';


const Cart = (props) => {

    const { order, handleBasketShow = Function.prototype} = useContext(ShopContext)

    const quantity = order.length

  return (
    <div className='cart d-flex justify-content-end align-items-center gap-3 mb-5' onClick={handleBasketShow}>
        <Button variant="primary" className="d-flex justify-content-end align-items-center gap-3">  
            {quantity ? <span className='cart_quantity'>{quantity}</span> : null}
            <BsCartCheck size={40}/>
        </Button>

    </div>
  );
};

export default Cart;
