import React, { useEffect } from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const {goods =[]} = props;

    if( !goods.length){
        return  <h3>Nothing here</h3>
    }
  return (
    <>
        {goods.map((item) => (
            <GoodsItem 
             
              addToBasket={props.addToBasket} 
              key={item.mainId} 
              {...item}
            />
        ))}
    </>
  );
};

export default GoodsList;
