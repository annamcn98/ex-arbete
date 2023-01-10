import React from "react";
import { Link } from "react-router-dom";


function ProductItem({product}) {
    return (
  
      
      <article>
          <h1 to={`/product/${product.id}`}>
            <h1>{product.title}</h1>
          </h1>
              <Link to={`/product/${product.id}`}>
              <img src={product.url}></img>
              </Link>
            <h3>{product.price} SEK</h3>
      </article>
    
        )
  }
  
  export default ProductItem