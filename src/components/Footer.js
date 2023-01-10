import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
    <div>
        
        <p>Norrlandsgatan 27</p>       
       <p>112 67</p>      
       <p>Stockholm</p>    
       <p>Hej@annelina annalina.se</p>
    </div>    
    <div>    
      <p>Copyright 2023</p>  
   </div>    
   <div>  
      <p>Våra produkter</p>
      <p>Om oss</p>    
      <p>content</p> 
        </div>
</Wrapper>
  )
}



export default Footer;

const Wrapper = styled.Wrapper`
color: #2b2b2b;
font-size: 0.80em;
padding-bottom: 10px
`

