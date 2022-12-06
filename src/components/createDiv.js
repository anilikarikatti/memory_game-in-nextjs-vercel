// import './App.css';
// import { useState} from 'react';

import { useState } from "react";


function CreateDiv({ke,number}){ 
  


  let [num,setNum]=useState(number);
  let [redColor,SetRedColor]=useState(false);

  if(num && !redColor){
    SetRedColor(true);
    setNum(0);
    setTimeout(redTowhite,2000)
  }

  function redTowhite(){
    SetRedColor(false);
  }


  return (
        <>  
            <div key={ke} className={number?'red':'white'} onClick={((e)=>{ if(e.target.className == 'red'){
              // console.log(e.target.className);
              SetRedColor(true);
            }
            }
          
  )} style={{
                        height:'100px',
                        border:'2px solid black',
                        flex:'auto',
                        backgroundColor:(redColor ?'red':'white')
                      }}></div>

          
      </>
    )
  }
  
  
  export default CreateDiv;