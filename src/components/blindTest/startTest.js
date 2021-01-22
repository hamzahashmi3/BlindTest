import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import img from './timeout-notice.png'
import "./design.css";
import { Link } from 'react-router-dom';
import Progress from 'react-progressbar';
import ResultComplete from './resultComplete';



const StartTest=()=>{


    let arr=[
        {
            id:0,
            value:1,
            img: "img/Images for test/a1.png"
        },
        {
            id:1,
            value:2,
            img: "img/Images for test/a2.png"
        },
        {
            id:2,
            value:3,
            img: "img/Images for test/c3.png"
        },
        {
            id:3,
            value:4,
            img: "img/Images for test/e4.png"
        },
        {
            id:4,
            value:5,
            img: "img/Images for test/f5.png"
        },
        {
            id:5,
            value:6,
            img: "img/Images for test/h6.png"
        },
        {
            id:6,
            value:7,
            img: "img/Images for test/k7.png"
        },
        {
            id:7,
            value:8,
            img: "img/Images for test/o8.png"
        },
        {
            id:8,
            value:9,
            img: "img/Images for test/q9.png"
        }
        ];


    let array=[];
    let i = 4;
    let arrid = arr[i].id
    let arrValue = arr[i].value
    let ans = true;
    let image = arr[i].img;
    let uservalue = 5;
        console.log("arrid = "+arrid, "arrValue = "+arrValue, "image = "+image)
    const[num, setNum] = useState(1);
    // const [image, setImage] = useState("img/Images for test/a5.png")
 



    let one=()=>{
        uservalue = 1
        test(arrValue,uservalue)
    }
    let two=()=>{
        uservalue = 2
        test(arrValue,uservalue)
    }
    let three=()=>{
        uservalue = 3
        test(arrValue,uservalue)
    }
    let four=()=>{
        uservalue = 4
        test(arrValue,uservalue)
    }
    let five=()=>{
        uservalue = 5
        test(arrValue,uservalue)
    }
    let six=()=>{
        uservalue = 6
        test(arrValue,uservalue)
    }
    let seven=()=>{
        uservalue = 7
        test(arrValue,uservalue)
    }
    let eight=()=>{
        uservalue = 8
        test(arrValue,uservalue)
    }
    let nine=()=>{
        uservalue = 9
        test(arrValue,uservalue)
    }
    const test=(arrValue,uservalue)=>{
        if(arrValue==uservalue){
            ans=true
        }else{
            ans=false
        }
        console.log(ans)
        CAT(ans)
        return ans
    }
    
    const imgId=(arrid)=>{
       image = arr[arrid].img
       document.getElementById('img').src = image
       console.log("handler = "+arrid,image)
    }
    const imgIdfalse=(arrid)=>{
        image = process.env.PUBLIC_URL+arr[arrid].img
        document.getElementById('img').src = image
        console.log("handler = "+arrid,image)
     }

    const success=()=>{
        window.location.reload();
    } 

    const CAT=(ans)=>{
        do{
            console.log("CAT ans"+ans)
                if(ans==true){
              array.push(i);
              i++;
              if(i==0|| i==8){
                  success()
              }
              imgId(i-1)
                if(array.includes(i)==true){
                  i++
                  }else{
                        arrValue = i;
                        if(i==0|| i==8){
                            success()
                        }
                        imgId(arrValue-1);
                        console.log("CAT will return ++"+i);
                        console.log("") 
                  }
              }else{
                array.push(i);
                i--;
                if(i==0|| i==8){
                    success()
                }
                imgIdfalse(i-1)
                  if(array.includes(i)==true){
                    i--;
                  }else{
                        arrValue = i;
                        if(i==0|| i==8){
                            success()
                        }
                        imgIdfalse(arrValue-1);
                        console.log("CAT will return -- = "+i);
                        console.log("") 
                  
              }
              console.log("values of array = "+array)
              console.log("loop repeated once");
              console.log("")  
            }
            
 
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
                    <img src={image} id="img" width="500px" alt="" />
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