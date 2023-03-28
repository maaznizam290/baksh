// import { TextField } from '@material-ui/core';
// // import { Padding } from '@mui/icons-material';
// import React from 'react'
// import avl from '../components/assets/avl.png'
// import { InputBtn } from '../components/button';
// import CheckboxLabels from '../components/checkbox';
 
// export default function Signup() {
//   return (
//     <>
//     <img src={avl} style={{width:'65pc',height:'44pc',marginLeft:'33pc'}} alt="" 
//     />
//     <h6 style={{marginTop:'-12pc',marginLeft:'83pc',fontSize:'20px',color:'whitesmoke',fontWeight:'bolder',display:'block',position:'absolute'}}>Where food and <br /> community come <br/>together</h6>
//     <h1 style={{marginLeft:'-78pc',marginTop:'-40pc',fontWeight:'bolder',fontFamily:'Merriweather',fontSize:'42px',color:'#000000'}}>BAKSH</h1>
//     <h2 style={{marginLeft:'-74pc',marginTop:'8pc',fontWeight:'bold'}} >Hello!</h2>
//     <h6 style={{marginLeft:'-63pc',fontWeight:'lighter'}} >Welcome to the signup page we are glad to see you again </h6>
//     <TextField  style={{marginLeft:'-61pc',marginTop:'75px',width:'340px'}} label="Email" variant="outlined"/>
//     <TextField style={{marginTop:'10pc',marginLeft:'-22pc',width:'350px'}} label="password" variant="outlined"/>
//     <CheckboxLabels/>
//     <InputBtn/>
//     </>
//   );
// }

import { TextField } from '@material-ui/core';
import { Password } from '@mui/icons-material';
// import { Padding } from '@mui/icons-material';
import React, { useState } from 'react'
import avl from '../components/assets/avl.png'
import { InputBtn } from '../components/button';
import CheckboxLabels from '../components/checkbox';
 
 function Signup() {
  return (
    <div>
    <img src={avl} style={{width:'65pc',height:'44pc',marginLeft:'33pc'}} />
      <h6 style={{marginTop:'-12pc',marginLeft:'83pc',fontSize:'20px',color:'whitesmoke',fontWeight:'bolder',display:'block'}}>Where food and <br /> community come <br/>together</h6> 
    <h1 style={{marginLeft:'4pc',marginTop:'-35pc',fontWeight:'bolder',fontFamily:'Merriweather',fontSize:'32px',color:'black'}}>BAKSH</h1>
    <h2 style={{marginLeft:'4pc',marginTop:'8pc',fontWeight:'bolder'}} >Hello!</h2>
    <h6 style={{marginLeft:'5pc',fontWeight:'lighter'}} >Welcome to the signup page we are glad to see you <br/> back </h6>
    <TextField   style={{marginLeft:'6pc',marginTop:'75px',width:'340px'}} label="Email"    variant="outlined"/>
    <TextField  style={{marginTop:'10pc',marginLeft:'-22pc',width:'350px'}} label="Password"  variant="outlined"/>
    <CheckboxLabels/>
    <InputBtn/> 

    </div>
  );
}
export default Signup;