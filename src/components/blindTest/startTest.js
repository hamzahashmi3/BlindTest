import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from './timeout-notice.png'
import "./design.css";
import { Link } from 'react-router-dom';
import Progress from 'react-progressbar';


// const one=new promise((resolve,reject)=>{
//     setTimeOut(()=>{
//         resolve('value');
//     },3000)
// })
var value = 0;
const StartTest=()=>{
    let arr=[0,1,2,3,4,5,6,7,8,9];
    let array=[];
    let i = 5;
    let algo = 5;
    let ans = true

    const[num, setNum] = useState(1);


    let one=()=>{
        value = 1
        test(algo,value)
    }
    let two=()=>{
        value = 2
        test(algo,value)
    }
    let three=()=>{
        value = 3
        test(algo,value)
    }
    let four=()=>{
        value = 4
        test(algo,value)
    }
    let five=()=>{
        value = 5
        test(algo,value)
    }
    let six=()=>{
        value = 6
        test(algo,value)
    }
    let seven=()=>{
        value = 7
        test(algo,value)
    }
    let eight=()=>{
        value = 8
        test(algo,value)
    }
    let nine=()=>{
        value = 9
        test(algo,value)
    }
    const test=(algo,value)=>{
        if(algo==value){
            ans=true
        }else{
            ans=false
        }
        console.log(ans)
        CAT(ans)
        return ans
    }
    const CAT=(ans)=>{
        do{
            console.log("")
            if(ans==true){
              array.push(i);
              i++;
                if(array.includes(i)==true){
                  i++
                  }else{
                        algo = i;
                        console.log("CAT will return ++"+i);
                        console.log("") 
                  }
              }else{
                array.push(i);
                i--;
                  if(array.includes(i)==true){
                    i--;
                  }else{
                        algo = i;
                        console.log("CAT will return -- = "+i);
                        console.log("") 
                  }
              }
              console.log("values of array = "+array)
              console.log("loop repeated once");
              console.log("")
          }while(array.includes(i)==true);
    }
    return(
        <div className="body">
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="one d-flex p-2" style={{padding:"1px"}}>
                        <Link to="/blindtest" className="mr-2 link1">
                            <i className="fa fa-times text-white" style={{marginLeft:"5px"}}></i>
                            <span className="text-white"> Exit </span>
                        </Link>
                    </div>
                    <div>
                        <p className=" text-white"><b>Trial # {num}</b></p>
                    </div>
                    <button className="one d-flex p-2" >
                        <Link to="/startTset" className="mr-2 link1">
                            <i className="fa fa-undo text-white" style={{marginLeft:"5px"}}></i>
                            <span className="text-white" onClick={()=>setNum(num+1)}> Restart </span>
                        </Link>
                    </button>
                </div>
            </div>

            <div className="container-fluid p-5 bar">
                <div>
                    <Progress completed={75} />
                </div>
                    {/* <div class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
                            40% Complete (success)
                        </div>
                    </div> */}
                </div>

            <div className="container d-flex justify-content-center">
                <div className="img">
                    {/* <img src={img} width="500px" alt="" /> */}
                    <img src="img/Images for test/a1.png" width="500px" alt="" />
                </div>
                <div className="wrapper mt-5 ml-5">
                <section className="num">
                    <section className="button1">
                        <div id="1" className="button btn" onClick={one}>1</div>
                        <div id="2" className="button btn" onClick={two}>2</div>
                        <div id="3" className="button btn" onClick={three}>3</div>
                        <div id="4" className="button btn" onClick={four}>4</div>
                        <div id="5" className="button btn" onClick={five}>5</div>
                        <div id="6" className="button btn" onClick={six}>6</div>
                        <div id="7" className="button btn" onClick={seven}>7</div>
                        <div id="8" className="button btn" onClick={eight}>8</div>
                        <div id="9" className="button btn" onClick={nine}>9</div>
                    </section>
                    <section className="mt-5">
                        <a className="link" href="" style={{textDecoration: "none"}}>
                            <span style={{borderRadius: "20px", backgroundColor: "#2e2d2d"}}> 
                                <span className="fa fa-question text-white"></span>
                                <span className="text-white p-4">Show Result</span>
                            </span>
                        </a>
                    </section>
                {/* <section className="mt-5">
                    <a className="link" href="https://www.google.com/" style={{textDecoration: "none"}}>
                        <span style={{borderRadius: "20px", backgroundColor: "#2e2d2d"}}> 
                            <span className="fa fa-ellipsis-h text-white"></span>
                            <span className="text-white p-4">Unsure</span>
                        </span>
                    </a>
                </section> */}
                </section>
            </div>
            
                
            </div>

        </div>
    );
}
export default StartTest;