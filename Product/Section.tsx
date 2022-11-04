import { Container } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

function Section(){
  const Section =styled.section`
      width:1100px;
      height:1300px;
      margin-left:80px;
      border:1px solid grey;
  `
  const Pre =styled.div`
   height:90px;
    width:1100px;
    background-color:#34554A;
    font-size:23px;
    color:whitesmoke;
    border : 1px solid black;
    display:flex;
    padding-top:30px;
    padding-left:500px;
    font-family: 'Strawford';
  `
  const A  =styled.a`
  margin-left:30px;
  color:'aqua';
  font-family: 'Strawford';
  
  `
 const Div =styled.div`
 
   width:1100px;
   background-color:white;
   font-size:23px;
   color:whitesmoke;
   border : 1px solid transparent;
   display:flex;
   text-align:center;
   color:black;
 `
  const Parent=styled.div`
    flex:1;
    border:1px solid transparent;
    height:300px;
    font-size:15px;
    padding-top:50px;
    font-size:13px;
    color:'black';

  `
const Contentdiv =styled.div`
  height:400px;
  border:1px solid transparent;
  font-size:15px;
  padding-top:50px;
  flex:1;
  font-size:15px;
  font-family:'Strawford';
`
const Child =styled.div`
  height:400px;
  border:1px solid transparent;
  font-size:15px;
  padding-top:50px;
  flex:1;
  font-size:15px;
  font-family:'Strawford';`
  return(
    <>
    <Section>
     <Pre> How it Works</Pre>
     <ul>
     <A href='#'> Creators</A>
        <A href='#'>Retailors</A>
        <A href='#'>Users</A>
     
        </ul>
    
     <Div>
      <Parent>
      <p> <h2>How to create news ?</h2></p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, is </p> 
<p>labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
<p > laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
<p > cillum dolore eu fugiat nulla pariatur.cupidatat non proident</p>
 <p >sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Parent>
      <Parent>
      <video width="400" controls  >
  <source src="mov_bbb.mp4" type="video/mp4"></source>
  <source src="mov_bbb.ogg" type="video/ogg"></source>
  </video>

      </Parent>
     </Div>
     <Div>
     <Contentdiv>
      <video width="400"  controls  >
  <source src="mov_bbb.mp4" type="video/mp4"></source>
  <source src="mov_bbb.ogg" type="video/ogg"></source>
  </video>
      </Contentdiv>
      <Contentdiv>
        <p> <h2>How to create news ? </h2></p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, is </p> 
<p>labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
<p> laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
<p> cillum dolore eu fugiat nulla pariatur.cupidatat non proident</p>
 <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </Contentdiv>
      
     </Div>
     <Div>
      <Child>
       <h2>How to create news ? </h2>

<p>1.Discover information from other people homes </p> 
<p>2.Save favourires to the collection of houses  good </p>
<p>3.Follow influencers,creators and users that inspires </p>
<p>4.See your favourite home interior styled inreal home</p>
 <p>5.Shop what you see  for the house -one clck away </p>
      </Child>
      <Child>
      <video width="400" controls  >
  <source src="mov_bbb.mp4" type="video/mp4"></source>
  <source src="mov_bbb.ogg" type="video/ogg"></source>
  </video>

      </Child>
     </Div>
     </Section></>
  )
}
export default Section;