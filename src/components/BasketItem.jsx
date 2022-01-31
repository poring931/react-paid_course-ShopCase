import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const BasketItem = (props) => {
    const {
        name,
        id,
        image,
        price,
        quantity,
        removeFromBasket=Function.prototype,
    } = props;

    const productPrice = price * quantity
  return (
    <ListGroup.Item>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center '>
                    {name} 
                    <AiOutlineCloseCircle onClick={()=>removeFromBasket(id)} className='close_btn'/>
                </Card.Header>

                <Card.Img variant="top"  src={image} alt={name}/>
                <ListGroup variant="flush">
                
                    <ListGroup.Item >{price} ₽ x {quantity} = {productPrice} ₽ </ListGroup.Item>
                </ListGroup>
            </Card>
    </ListGroup.Item>

    );
};

export default BasketItem;
