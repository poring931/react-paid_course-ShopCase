import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Preloader from '../components/Preloader';
import {API_KEY, API_URL} from '../config'


const Main = () => {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)

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

  return (
    <main>
        <Container>
            <Row>
                
                {
                    loading ?  <Preloader/> : ''
                }
            </Row>
        </Container>
    </main>
    );
};

export default Main;
