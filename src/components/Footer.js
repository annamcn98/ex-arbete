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

const Wrapper = styled.Wrapper`
color: #2b2b2b;
font-size: 0.80em;
padding-bottom: 10px
`

const Footerdiv = styled.div`

    display: flex;
    justify-content: center;
    align-self: flex-end;
    flex-wrap: wrap;
    background-color: #888888;
    padding-top: 30px;
    `
    const CopyrightDiv = styled.div `
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 5px;
    font-size: 12px;
    color:white;
`
    const Div1 = styled.div `
    padding-right: 50px;
    color:white;
    `
    const Div2 = styled.div `
    padding-left: 50px;
    color: white;

    `
export default Footer;

