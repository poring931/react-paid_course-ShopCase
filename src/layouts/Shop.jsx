import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../components/Cart';
import GoodsList from '../components/GoodsList';
import Preloader from '../components/Preloader';
import {API_KEY, API_URL} from '../config'

const Main = () => {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order,setOrder] = useState([])

    useEffect(()=>{
      
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop)
            setLoading(false)
        })
    },[])

     const addToBasket = (item) => {
         const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

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
     };

  return (
    <main>
        <Container>
            <Row className='product_list'>
                <Cart quantity={order.length}/>               
            </Row>
            <Row className='product_list'>
                
                {
                    loading ?  <Preloader/> : <GoodsList addToBasket={addToBasket} goods={goods}/>
                }
            </Row>
        </Container>
    </main>
    );
};

export default Main;
