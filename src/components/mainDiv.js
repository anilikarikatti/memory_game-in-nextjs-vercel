// import './App.css';
import { useRef, useState} from 'react';
import CreateDiv from './createDiv';



function MainDiv(){
  
  let ref = useRef(0);
  let [gameStatus,setGameStatus] = useState(false)
  let [win,setWin] = useState(true)
  let rows =[];
  for(let i=0;i<16;i++){
      rows.push(i);
  }


  let rd_count = ()=>{
    ref.current += 1
  }


  let count =0;

  let inc = ()=>{
    count+=1
    // console.log(count);
    // console.log(ref.current);
    
    if(ref.current == count){
        setWin(false)
        setGameStatus(true)
    }
  }


     return (
      <>     
        {win ?
        <div style={{backgroundColor:"#f5c5cb",height:'600px'}}> <h2 style={{textAlign:"center",textTransform:"capitalize"
        
        }}>memory game</h2>
       <div className='main' style={{
        display:'grid',
        // flexDirection:'row'
        gridTemplateColumns:'3fr 3fr 3fr 3fr',
        
        // height:'800px',
        marginTop:'50px',
        marginLeft:'100px',
        marginRight:'100px'


        
      }}>
          {


            rows.map(elem=>{
              // console.log("colored");
               let  number = Math.floor(Math.random()*10)%2;

              if(number){
                rd_count()
              }


           return  <CreateDiv key ={elem} ke={elem}   number={number} count={count} setWin={setWin} win={win} inc={inc}  red   = {ref.current} setGameStatus = {setGameStatus}/>   
          })
          }

      </div></div>
      : <div style={{
        // textAlign:"center",
        height:"350px",
        backgroundColor:"#f5c5cb",
        width:'500px',
        marginLeft:'400px',
        marginTop:'100px'



      }}><h1 style={{position:"relative",
      top:"140px",textAlign:"center" , textTransform:"capitalize" }}> {gameStatus ? "congratulations  " : "o sorry  "} you {gameStatus ? "win " : "loose "}  the game </h1>
      <h3 style={{position:"relative",
      top:"140px",textAlign:"center" }}><a href='/' style={{textDecoration:"none",color:"#D12F42"}}> play again</a></h3>
      </div>}
      </>

    )
  }
  


  export default MainDiv;