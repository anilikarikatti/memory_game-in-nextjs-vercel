// import './App.css';
// import { useState} from 'react';

import { useState } from "react";


function CreateDiv({ke,number,count,setWin,win,inc,red,setGameStatus}){ 
  

  let [clicked,setClicked] = useState(false)
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
            {/* {number ? <RedCount/>:''} */}
            
            <div key={ke} className={number?'red':'white'} onClick={win ?((e)=>{ if(e.target.className == 'red'){
              // console.log(e.target.className);
              SetRedColor(true);
              if(number && !clicked){
                inc()
                setClicked(true)

                console.log(count,red);
                // if(red == coun){
                //   console.log(coun);
                //   setWin(false)
                // }
              }
            }
            else{
              // setGameStatus(false)

                setWin(false)
            }
            }
          
          
  ) : ""} style={{
                        height:'100px',
                        border:'2px solid black',
                        flex:'auto',
                        backgroundColor:(redColor ?'red':'white'),
                      }}></div>

                   
      </>
                    
    )

  }
  

  export default CreateDiv;