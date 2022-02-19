import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import BasketList from '../components/BasketList';
import Cart from '../components/Cart';
import GoodsList from '../components/GoodsList';
import Preloader from '../components/Preloader';
import {API_KEY, API_URL} from '../config'
import { ShopContext } from '../context';

const Main = () => {

    const { loading, order, isBasketShow,  setGoods} = useContext(ShopContext)

    useEffect(()=>{
      
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
           setGoods(data.shop)
        })
         // eslint-disable-next-line
    },[])


  return (
    <main>
        
        <Container>
            <Row className='product_list'>
                <Cart quantity={order.length} />               
            </Row>
               { isBasketShow && <BasketList /> }
            <Row className='product_list'>
                { loading ?  <Preloader/> : <GoodsList /> }
            </Row>
        </Container>
    </main>
    );
};

export default Main;
