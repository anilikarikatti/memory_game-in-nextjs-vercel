// import './App.css';
import { useState} from 'react';
import CreateDiv from './createDiv';


function MainDiv(){
  

  let rows =[];
  for(let i=0;i<16;i++){
      rows.push(i);
  }

     return (
      <>      <div className='main' style={{
        display:'grid',
        // flexDirection:'row'
        gridTemplateColumns:'3fr 3fr 3fr 3fr',
  
      }}>
          {
            rows.map(elem=>{
              // console.log(colored);
               let  number = Math.floor(Math.random()*10)%2;

           return  <CreateDiv key ={elem} ke={elem}   number={number}/>   
          })
          }

      </div>
      </>

    )
  }
  
  export default MainDiv;