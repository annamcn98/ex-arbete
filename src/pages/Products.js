import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
// import styled from 'styled-components'
// import { motion } from "framer-motion"
import woocommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new woocommerceRestApi({
  url: 'https://anna-nilsson.cme-projects.com/',
  consumerKey: 'ck_7e751480edcce32808fa57574c16630a267d8cce',
  consumerSecret: 'cs_768af23bdd31b6188b9a13ffabf4af6bfbb6f167',
  wpAPIPrefix: "examen/wp-json",
});

export async function fetchWooCommerceProducts() {
    try {
        const response = await api.get("products");
        // console.log(response);
        return response;
      } catch (error) {
        throw new Error(error);
      }
    }

function Products() {

  const [products, setProducts] = useState([]);
  // const wooProducts = await fetchWooCommerceProducts().catch((error)=> console.error(error));
  
  const fetchProducts = async () => {
    try {
      const response = await fetchWooCommerceProducts().catch((error)=> console.error(error));
      // const response = await fetch('https://codexplained.se/electronics.php');
      console.log(response.data);
      const data = response.data;
      
      setProducts(data);
    } catch (error) {
      console.log (error);
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