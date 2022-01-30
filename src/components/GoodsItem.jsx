import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BsCart4 } from 'react-icons/bs';

const GoodsItem = (props) => {

    const {
        mainId,
        displayName,
        displayDescription,
        displayType,
        price,
        granted

    } = props;

    const [inCartQuantity, putCart] = useState(0)

    const buyHandler = () => {
        //  props.addToBasket([mainId,displayName,granted[0].images.full_background,price.finalPrice],displayDescription)
         props.addToBasket({
             descr: displayDescription,
             id: mainId,
             name: displayName,
             image: granted[0].images.full_background,
             price: price.finalPrice,
         })
        
         putCart(inCartQuantity+1)
    }

  return (
    <Col className='product_item mb-5  d-flex justify-content-center' xs>
        {/* {console.log(granted[0])} */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={granted[0].images.full_background} alt={displayName}/>
            <Card.Body>
                <Card.Title>{displayName}</Card.Title>
                <Card.Text>
                    {displayDescription}
                </Card.Text>
                <hr />
                 <Card.Text className="price_part">
                        <Button onClick={buyHandler} variant="primary">
                            {
                                !inCartQuantity ? (
                                    <>
                                        Купить <BsCart4/>
                                    </>
                                ) : (
                                    <>
                                    В корзине {inCartQuantity} <BsCart4/>
                                    </>
                                )
                            }
                            
                            </Button>
                        {
                            price.finalPrice != price.regularPrice ? 
                                (   
                                    <span >
                                        <strike>{price.regularPrice}₽</strike> 
                                        <span className='current_price'>{price.finalPrice}₽</span>
                                        
                                    </span>
                                )
                                : 
                                (
                                    <span className='current_price'>
                                        {
                                            inCartQuantity > 1 ? (
                                               <sup><small>{price.finalPrice * inCartQuantity}</small></sup>
                                            ) : ''
                                        }
                                        
                                        {price.finalPrice}₽ 
                                    </span>
                                )
                        }
                        
                        
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  );
};

export default GoodsItem;
