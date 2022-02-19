import React from 'react';
import { useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { ShopContext } from '../context';

const BasketItem = (props) => {
    const {
        name,
        id,
        image,
        price,
        quantity,
    } = props;

    const productPrice = price * quantity

   const {removeFromBasket, incrementQuantity, decrementQuantity} = useContext(ShopContext)
   
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
                <ListGroup variant="flush">
                
                    <ListGroup.Item className='d-flex justify-content-between align-items-center '>
                        <AiOutlineMinusCircle 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{decrementQuantity(id)}}
                        />
                        <span>{quantity}</span>
                        <AiOutlinePlusCircle 
                            style={{ cursor: 'pointer' }}
                            onClick={()=>{incrementQuantity(id)}}
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Card>
    </ListGroup.Item>

    );
};

export default BasketItem;
