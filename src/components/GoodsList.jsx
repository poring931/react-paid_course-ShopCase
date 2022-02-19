import React, { useContext } from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const {goods =[]} = useContext(ShopContext);

    if( !goods.length){
        return  <h3>Nothing here</h3>
    }
  return (
    <>
        {goods.map((item) => (
            <GoodsItem key={item.mainId} {...item} />
        ))}
    </>
  );
};

export default GoodsList;
