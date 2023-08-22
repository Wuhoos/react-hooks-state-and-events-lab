import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, addToCart] = useState(false)
  // console.log(inCart, addToCart)

  function handleAddToCart(){
    addToCart(!inCart)
  }

 const add = inCart ? "Remove From Cart" : "Add to Cart"



  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className='add' onClick={handleAddToCart}>{add}</button>
    </li>
  );
}

export default Item;
