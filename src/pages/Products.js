import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
// import styled from 'styled-components'
// import { motion } from "framer-motion"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const api = new WooCommerceRestApi({
//   url: process.env.WORDPRESS_URL,
//   consumerKey: process.env.WOOCOMMERCE_KEY,
//   consumerSecret: process.env.WOOCOMMERCE_SECRET,
//   wpAPIPrefix: "examen/wp/wp-json",
// });

// export async function fetchWooCommerceProducts() {
//     try {
//         const response = await api.get("products");
//         return response;
//       } catch (error) {
//         throw new Error(error);
//       }
//     }


function Products() {

  const [products, setProducts] = useState([]);
  // const wooProducts = await fetchWooCommerceProducts().catch((error)=> console.error(error));


  
  const fetchProducts = async () => {
    try {
      // const response = await fetchWooCommerceProducts().catch((error)=> console.error(error));
      const response = await fetch('https://codexplained.se/electronics.php');
      const data = await response.json();
      console.log(data)
      
      setProducts(data);
    } catch (error) {
      console.log (error)
    }
  
  }
    useEffect( () => {
      fetchProducts();
    },[])
  


  return (
    <div>
      {/* <h2>
        Welcome!
      </h2>
        <h1 className='all-products'>
          All products
            <motion.Emoji
              animate={{y:[0,100,0,100,0,100]}}
              transition={{ duration: 4, delay: 1}} >
              &#128071;&#127997;
              </motion.Emoji>
        </h1> */}
    <div>
      
        {
          products.map((product) => 
               (
                <ProductItem product={product} key={product.id}/>
              )
          )
        }

    </div>
    </div>
  )
}


export default Products;