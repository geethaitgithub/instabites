import React from 'react';
import ItemListCategory from './ItemListCategory';

const ItemList = ({itemCards}) => {
  return (
    <div className=''>
        {itemCards.map((itemsList) => (<ItemListCategory key={itemsList?.card?.info?.id} itemCategory={itemsList}/>))}
        <p></p>
    </div>
  )
}

export default ItemList