import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCartCheck } from 'react-icons/bs';


const Cart = (props) => {

    const {quantity = 0} = props

  return (
    <div className='cart d-flex justify-content-end align-items-center gap-3 mb-5'>
      
        <Button variant="primary" className="d-flex justify-content-end align-items-center gap-3">  
            {quantity ? <span className='cart_quantity'>{quantity}</span> : null}
            <BsCartCheck size={40}/>
        </Button>

    </div>
  );
};

export default Cart;
