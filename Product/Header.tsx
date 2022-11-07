import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AodIcon from "@mui/icons-material/Aod";
import AppsIcon from "@mui/icons-material/Apps";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { grey } from "@mui/material/colors";
function Header() {
  const Nav = styled.nav`
    max-width: 1100px;
    height: 50px;
    background-color: whitesmoke;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    padding: 0 30px;
  `;
  const Img = styled.img`
    height: 23px;
    width: 23px;
    /* margin-top: 11px; */
    /* margin-left: 90px; */
  `;
  const Span = styled.span`
    font-size: 10px;
    font-family: "Strawford";
    display: flex;
    align-items: center;
    color: #3a3a3a;
  `;
  const Button = styled.button`
    background-color: #3a3a3a;
    width: 90px;
    height: 23px;
    font-style: "Strawford";
    color: #ffffff;
    opacity: 1;
    border-radius: 2px;
    margin-left: 8px;
    display: flex;
    align-items: center;
  `;
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      padding: "0 4px",
    },
  }));
  // const CartDiv = styled.div`
  //   position: relative;
  //   background: wheat;
  //   border-radius: 30px;
  //   /* width: 30px; */
  //   padding: 5px;
  //   display: flex;
  //   justify-content: center;
  //   margin-right: 30px;
  // `;
  // const BadgeDiv = styled.div`
  //   border-radius: 30px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   width: 15px;
  //   height: 15px;
  //   font-size: 10px;
  //   background: #000;
  //   color: #fff;
  //   position: absolute;
  //   top: -6px;
  //   right: -6px;
  // `;

  return (
    <>
      <Nav>
        <Img src="/Logo.png" alt="Logo" />
        <div style={{ display: "flex", marginRight: "auto" }}>
          <Span>
            <AppsIcon sx={{ width: 20, height: 20, ml: 8 }} />
            Explore
          </Span>
          <Span>
            <AodIcon sx={{ width: 20, height: 20, ml: 3 }} /> Guides
          </Span>
          <Span>
            <ShoppingCartIcon sx={{ width: 20, height: 20, ml: 3 }} /> Shop
          </Span>
          <Span>
            <LegendToggleIcon sx={{ width: 20, height: 20, ml: 3 }} /> Articles
          </Span>
        </div>

        {/* <div style={{ display: "flex" }}>
          <CartDiv>
            <ShoppingCartIcon />
            <BadgeDiv>5</BadgeDiv>
          </CartDiv>

          <NotificationsNoneIcon
            sx={{
              marginRight: 5,
              ":hover": { backgroundColor: "#DEDEDE" },
              alignItems: "center",
            }}
          />
          <MenuIcon
            sx={{
              marginRight: 3,
              ":hover": { backgroundColor: "#DEDEDE" },
              alignItems: "center",
            }}
          />
          <Button>Create post</Button>
        </div> 
        <span></span>*/}
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={5} color="secondary">
            <ShoppingCartIcon
              sx={{ ml: 40, display: "flex", alignItems: "center", width: 30 }}
            />
          </StyledBadge>
        </IconButton>

        <NotificationsNoneIcon
          sx={{
            cursor: "pointer",
            mt: 0,
            width: 20,
            height: 20,
            ml: 2,
            color: "grey",
            display: "flex",
            alignItems: "center",
            ":hover": { backgroundColor: "#DEDEDE" },
          }}
        />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            ml: 1,
            mt: 0,
            cursor: "pointer",
            width: 40,
            color: "grey",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Button>Create post</Button>
      </Nav>
    </>
  );
}

export default Header;
