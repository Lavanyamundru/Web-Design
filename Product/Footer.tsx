import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const Footer = styled.div`
    height: 40px;
    max-width: 1100px;
    background-color: #34554a;
    border: 1px solid grey;
    margin: auto;
    /* position: fixed; */
    bottom: 0;
    font-size: 30px;
    padding-left: 50px;
    color: #efe1d0;
    font-family: Strawford;
    overflow: hidden;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const A = styled.a`
    font-size: 13px;
    margin: 20px;
    color: #efe1d0;
    /* width: 50px;
    height: 5px; */
    text-decoration: none;
    /* border-left: 1px solid; */
    text-transform: capitalize;
  `;
  const Span = styled.span`
    border-left: 0.5px solid #fff;
    height: 20px;
    margin-left: 15px;
  `;
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <>
      {/* <div style={{ position: "fixed", top: 0 }}>
        {scrollY > 100
          ? "Scrolled more than 100px"
          : "Still somewhere near the top!"}
      </div> */}
      <Footer ref={ref}>
        <h5>esther's </h5>

        <Span></Span>
        <A href="#"> About us</A>
        <A href="#"> contact us</A>
        <A href="#"> Blog</A>
        <Span></Span>
        <A href="#">Cookie policy</A>
        <A href="#">Terms of services</A>
        <FacebookIcon sx={{ ml: 21, color: "#EFE1D0" }} />
        <InstagramIcon />
        <LinkedInIcon />
        <A href="#"> Esther's Scandinavia AB </A>
      </Footer>
    </>
  );
}

export default Footer;
