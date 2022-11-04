import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AodIcon from '@mui/icons-material/Aod';
import AppsIcon from '@mui/icons-material/Apps';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';

function Header() {
  const Nav = styled.nav`
    width:1100px;
    height:50px;
    background-color:whitesmoke;
    border:1px solid grey;
    margin-top:30px;
    margin-left:80px;
  `
  const Img = styled.img`
    height:23px;
     width:23px;
     margin-top:11px;
     margin-left:90px;
     
  `
  const Span=styled.span`
    font-size:13px;
    font-family:'Strawford';
   `
    const Button =styled.button`
     background-color: #3A3A3A;
    width: 90px;
      height:23px;
      font-style: Strawford;
      color: #FFFFFF;
      opacity: 1;
      border-radius:3px;
      margin-left:3px;
     `  
    return (
    <>
    <Nav>
        <Img src='Logo.png' alt='Logo'/>
      <Span>
       <AppsIcon  sx={{ width:20 ,height:20,ml:8}}/>
       Explore
       </Span>
       <Span>
       <AodIcon sx={{ width:20 ,height:20 ,ml:3}}/> Guides
       </Span>
       <Span>
       <AddShoppingCartIcon sx={{ width:20 ,height:20,ml:3}}/> Shop</Span>
      <Span>
       <LegendToggleIcon sx={{ width:20 ,height:20,ml:3}}/> Articles
       </Span>
       <AddShoppingCartIcon sx={{ml:40,width:20 ,height:20,cursor:'pointer',":hover":{backgroundColor:'#ebcece'}}}/>
       <NotificationsNoneIcon  sx={{ cursor:'pointer',width:20 ,height:20,ml:2,":hover":{backgroundColor:'#DEDEDE'}}}/>
<IconButton edge="start" color="inherit" aria-label="menu" sx={{ml:1,mt:-1,cursor:'pointer',width:40}}>
<MenuIcon />
</IconButton>
<Button>Create post</Button>
        </Nav>
    </>
  )
    }

export default Header;

