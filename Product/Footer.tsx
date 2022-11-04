import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function  Footer (){
  const Footer =styled.div`
     height:40px;
    width: 1100px;
    background-color:#34554A; 
   border:1px solid grey;
   margin-left:80px;
 position:relative;
  bottom:20px;
  font-size:30px;
  padding-left:50px;
 color:whitesmoke;
  font-family: Strawford;
  overflow:hidden;
  z-index:1000;
  `
  const A =styled.a`
  font-size:medium;
  margin:20px;
  color:white;
  width:50px;
  Height:10px;
  text-decoration:0px;`
  
  return (
    <>
    <Footer> esther's
    <A href='#'> About us</A>
        <A href='#'> contact us</A>
        <A href='#'> Blog</A>
        <A href='#'>Cookie policy</A>
        <A href='#'>Terms of services</A>
        <FacebookIcon sx={{ ml:21}}/>
        <InstagramIcon />
        <LinkedInIcon />
    </Footer>
    </>
  )
}

export default Footer;



