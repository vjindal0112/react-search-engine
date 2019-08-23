import React from 'react';
import Search from './Search';


export const Result = (props) => {
  const displayPrice = (price) => {
    return (price / 100.00);
  }

  return (
    <div className="in-stock">
      <h2><a href={props.product.url}>{props.product.name}</a></h2>
      <p>${displayPrice(props.product.price)}</p>
      <p>{props.product.description}</p>
    </div>
  )
}
