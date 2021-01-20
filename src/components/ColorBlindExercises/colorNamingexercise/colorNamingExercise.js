import React, {useState} from 'react';
import classes from './colorNamingExercise.module.css'

function ColorNamingExercise() {
    const[block1, setBlock1] = useState(false)
    const[block2, setBlock2] = useState(false)
    const[block3, setBlock3] = useState(false)
    const[block4, setBlock4] = useState(false)
    const[block5, setBlock5] = useState(false)
    const[block6, setBlock6] = useState(false)
    const[block7, setBlock7] = useState(false)
    const[block8, setBlock8] = useState(false)
    const[block9, setBlock9] = useState(false)
    const[block10, setBlock10] = useState(false)
    const[block11, setBlock11] = useState(false)
    const[block12, setBlock12] = useState(false)
    const[block13, setBlock13] = useState(false)
    const[block14, setBlock14] = useState(false)
    const[block15, setBlock15] = useState(false)
    const[block16, setBlock16] = useState(false)
    const[block17, setBlock17] = useState(false)
    const[block18, setBlock18] = useState(false)
    const[block19, setBlock19] = useState(false)
    const[block20, setBlock20] = useState(false)
    const[block21, setBlock21] = useState(false)
    const[block22, setBlock22] = useState(false)
    const[block23, setBlock23] = useState(false)
    const[block24, setBlock24] = useState(false)

    const green =()=>{
        // console.log("green")
        <div>
        <h3 style={{color:"green"}}>GREEN</h3><br/>
        <img src="img/colorNaming/green.jpg" />
        </div>
    }

    return (
            <body className={classes.topalignment}>
                <div className={classes.container}>
                    <h2 className="text-center">Learning Color With Colorlite Glasses!</h2>
                    <div className="row">
                        <div className="col">
                            <img className={classes.container__image} src="https://sites.psu.edu/lifeitmoveson/files/2017/10/orange-1hoca2l.jpg" />
                            <div className={classes.container__text}>

                                <p>The two main characteristics of color vision are <b>color discrimination</b> and <b>color identification</b>. Colorblind people have problems within both areas. While people with normal color vision can distinguish millions of hues, the colorblind can barely see a few hundred. Good color discrimination is a prerequisite for color identification, as it is impossible to name colors properly unless we can distinguish them. However, many colors are correctly named with colorblindness, because they have been learned. (Example: the grass is green, the sky is blue.) Nevertheless, without the help of the environment, it would be challenging. Color identification abilities begin in childhood and develop slowly as more shades are recognized over time. Colorblind people can only partially learn this ability.

                                    In the majority of cases, there is an immediate improvement in color discrimination with the Colorlite colorblind correction glasses. (After color adaptation that takes about 2 minutes.) However, the improvement in color identification ability is not yet spectacular. You would still need to learn to identify (name) new hues never seen before. </p>

                                <p><b>The following exercise is to help</b> our customers, <b>who are already wearing our correction glasses</b> and would like to <b>improve their color naming ability. Without the correction glasses, the exercise is pointless</b>. This color naming exercise helps you develop the uncertainty in color identification ability. </p>

                                <p>Wear the glasses for at least 5 minutes before exercising as to allow for color adaptation. Start the exercise only when you see the white colors as white through the glasses.
                                </p>

                                <p>The exercise is as follows. Name the first color and press the "Show me…" button. If you did not name the color correctly, try memorizing it and continue with the other colors. Try the exercise again the next day. You will probably make less mistakes. Do this exercise daily until you can name each color correctly. </p>

                                <p>If you don't have Colorlite glasses already, please <a href="#" className="text-danger"><b>contact us!</b></a></p>
                                <br />
                                <div className={classes.container}>
                                    <div className="col-md-12 text-center">
                                        <a href="./contact"><button className={classes.btnLg}>Contact</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={classes.container}>
                    <div className="row " className={classes.in}>
                    
                        <div className="w-25 rounded d-inline p-3" className={classes.block1}><br /><br /><br /><br /><br /><br /><br /><br />
                        
                        {
                            block1? <h3 style={{color:"green"}} className={classes.name} >GREEN</h3> : null
                        }<br />
                        <button className={classes.btn} onClick={()=>setBlock1(!block1)}>Show the color name</button><br />
                        {
                             block1? <img src="img/colorNaming/green.jpg" className={classes.img} /> : null
                        }
                        
                        </div>
                        
                        <div className="w-25 rounded d-inline p-2"className={classes.block2}><br /><br /><br /><br /><br /><br /><br /><br />
                        {
                            block2? <h3 style={{color:"purple"}} className={classes.name} >PURPLE</h3> : null
                        }<br />
                        <button className={classes.btn} onClick={()=>setBlock2(!block2)}>Show the color name</button><br />
                        {
                             block2? <img src="img/colorNaming/purple.jpg" className={classes.img} /> : null
                        }
                        </div>
                        
                        <div className="w-25 rounded d-inline p-2"className={classes.block3}><br /><br /><br /><br /><br /><br /><br /><br />
                        
                        {
                            block3? <h3 style={{color:"yellow"}} className={classes.name} >YELLOW</h3> : null
                        }<br />
                        <button className={classes.btn} onClick={()=>setBlock3(!block3)}>Show the color name</button><br />
                        {
                             block3? <img src="img/colorNaming/yellow.jpg" className={classes.img} /> : null
                        }
                        </div>
                    </div>

                    <div className="row " className={classes.in}>
                        <div className="w-25 rounded d-inline p-3"className={classes.block4}><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block4? <h3 style={{color:"blue"}} className={classes.name} >BLUE</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock4(!block4)}>Show the color name</button><br />
                            {
                                block4? <img src="img/colorNaming/blue.jpg" className={classes.img} /> : null
                            }
                        </div>

                        <div className="w-25 rounded d-inline p-2"className={classes.block5}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block5? <h3 style={{color:"red"}} className={classes.name} >RED</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock5(!block5)}>Show the color name</button><br />
                            {
                                block5? <img src="img/colorNaming/red.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className="w-25 rounded d-inline p-2"className={classes.block6}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block6? <h3 style={{color:"skyblue"}} className={classes.name} >SKY BLUE</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock6(!block6)}>Show the color name</button><br />
                            {
                                block6? <img src="img/colorNaming/skyblue.jpg" className={classes.img} /> : null
                            }
                        </div>
                        </div>

                        <div className="row " className={classes.in}>
                        <div className="w-25 rounded d-inline p-3"className={classes.block7}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block7? <h3 style={{color:"brown"}} className={classes.name} >BROWN</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock7(!block7)}>Show the color name</button><br />
                            {
                                block7? <img src="img/colorNaming/brown.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className="w-25 rounded d-inline p-2"className={classes.block8}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block8? <h3 style={{color:"pink"}} className={classes.name} >PINK</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock8(!block8)}>Show the color name</button><br />
                            {
                                block8? <img src="img/colorNaming/pink.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className="w-25 rounded d-inline p-2"className={classes.block9}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block9? <h3 style={{color:"gold"}} className={classes.name} >GOLD</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock9(!block9)}>Show the color name</button><br />
                            {
                                block9? <img src="img/colorNaming/gold.jpg" className={classes.img} /> : null
                            }
                        </div>
                    </div>

                    <div className="row" className={classes.in}>
                        <div className=" w-25 rounded d-inline p-3" className={classes.block10}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block10? <h3 style={{color:"orange"}} className={classes.name} >ORANGE</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock10(!block10)}>Show the color name</button><br />
                            {
                                block10? <img src="img/colorNaming/orange.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className=" w-25 rounded d-inline p-2" className={classes.block11}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block11? <h3 style={{color:"lightblue"}} className={classes.name} >LIGHT BLUE</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock11(!block11)}>Show the color name</button><br />
                            {
                                block11? <img src="img/colorNaming/lightblue.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className=" w-25 rounded d-inline p-2" className={classes.block12}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block12? <h3 style={{color:"gray"}} className={classes.name} >GRAY</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock12(!block12)}>Show the color name</button><br />
                            {
                                block12? <img src="img/colorNaming/gray.jpg" className={classes.img} /> : null
                            }
                        </div>
                    </div>

                    <div className="row " className={classes.in}>
                        <div className=" w-25 rounded d-inline p-3" className={classes.block13}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block13? <h3 style={{color:"chocolate"}} className={classes.name} >CHOCOLATE</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock13(!block13)}>Show the color name</button><br />
                            {
                                block13? <img src="img/colorNaming/chocolate.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className=" w-25 rounded d-inline p-2" className={classes.block14}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block14? <h3 style={{color:"wheat"}} className={classes.name} >WHEAT</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock14(!block14)}>Show the color name</button><br />
                            {
                                block14? <img src="img/colorNaming/wheat.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className=" w-25 rounded d-inline p-2" className={classes.block15}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block15? <h3 style={{color:"violet"}} className={classes.name} >VIOLET</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock15(!block15)}>Show the color name</button><br />
                            {
                                block15? <img src="img/colorNaming/violet.jpg" className={classes.img} /> : null
                            }
                        </div>
                    </div>

                    <div className="row " className={classes.in}>
                        <div className=" w-25 rounded d-inline p-3" className={classes.block16}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            {
                                block16? <h3 style={{color:"silver"}} className={classes.name} >SILVER</h3> : null
                            }<br />
                            <button className={classes.btn} onClick={()=>setBlock16(!block16)}>Show the color name</button><br />
                            {
                                block16? <img src="img/colorNaming/silver.jpg" className={classes.img} /> : null
                            }
                        </div>
                        <div className=" w-25 rounded d-inline p-2" className={classes.block17}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <button className={classes.btn} onClick={()=>setBlock17(!block17)}>Show the color name</button>
                        {
                            block17? <img src="img/colorNaming/turquoise.jpg" style={{borderRadius:"25px"}} /> : null
                        }
                        </div>
                        <div className=" w-25 rounded d-inline p-2" className={classes.block18}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <button className={classes.btn} onClick={()=>setBlock18(!block18)}>Show the color name</button>
                        {
                            block18? <img src="img/colorNaming/black.jpg"  style={{borderRadius:"25px"}}/> : null
                        }
                        </div>
                    </div>

                    <div className="row " className={classes.in}>
                        <div className="w-25 rounded d-inline p-3" className={classes.block19}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <button className={classes.btn} onClick={()=>setBlock19(!block19)}>Show the color name</button>
                        {
                            block19? <img src="img/colorNaming/lime.jpg" style={{borderRadius:"25px"}} /> : null
                        }
                        </div>
                        <div className="w-25 rounded d-inline p-2" className={classes.block20} ><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <button className={classes.btn} onClick={()=>setBlock20(!block20)}>Show the color name</button>
                        {
                            block20? <img src="img/colorNaming/coral.jpg" style={{borderRadius:"25px"}} /> : null
                        }
                        </div>
                        <div className="w-25 rounded d-inline p-2" className={classes.block21}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <button className={classes.btn} onClick={()=>setBlock21(!block21)}>Show the color name</button>
                        {
                            block21? <img src="img/colorNaming/teal.jpg"  style={{borderRadius:"25px"}}/> : null
                        }
                        </div>
                    </div>
                </div>

                <div className="row " className={classes.in}>
                    <div className="w-25 rounded d-inline p-3" className={classes.block22}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <button className={classes.btn} onClick={()=>setBlock22(!block22)}>Show the color name</button>
                        {
                            block22? <img src="img/colorNaming/deeppink.jpg"  style={{borderRadius:"25px"}}/> : null
                        }
                    </div>
                    <div className="w-25 rounded d-inline p-2" className={classes.block23}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <button className={classes.btn} onClick={()=>setBlock23(!block23)}>Show the color name</button>
                        {
                            block23? <img src="img/colorNaming/indigo.jpg" style={{borderRadius:"25px"}} /> : null
                        }
                    </div>
                    <div className="w-25 rounded d-inline p-2" className={classes.block24}><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <button className={classes.btn} onClick={()=>setBlock24(!block24)}>Show the color name</button>
                        {
                            block24? <img src="img/colorNaming/khaki.jpg" style={{borderRadius:"25px"}} /> : null
                        }
                    </div>

                    {/* <div className="row " className={classes.in}>
                        <div className="w-25 rounded d-inline p-3" className={classes.block25}>
                        </div>
                        <div className="w-25 rounded d-inline p-2" className={classes.block26}>
                        </div>
                        <div className="w-25 rounded d-inline p-2" className={classes.block27}>
                        </div>
                    </div> */}
                </div>
            </body>
    )
}

export default ColorNamingExercise;
