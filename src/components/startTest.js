import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const startTest =()=>{
    return(
        <div>
            <div data-role="page" id="test" data-theme="a" class="disable-select ui-page ui-body-a ui-page-active" data-url="test" tabindex="0" style={{minHeight:"642px", width:"1517px", height:"642px"}}>
    <div id="test-header">
    <div data-role="header" class="ui-header ui-bar-a" role="banner">
    <a href="javascript:stopTest()" data-icon="delete" class="ui-btn-left ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a">
        <span class="ui-btn-inner">
            <span class="ui-btn-text">Stop</span>
            <span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span>
        </span>
    </a>
    <h1 class="ui-title" role="heading" aria-level="1">
        <span id="test-header-text">Trial #1</span>
    </h1>
    <a href="javascript:reloadTest()" data-icon="refresh" class="ui-btn-right ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-left" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a">
        <span class="ui-btn-inner">
            <span class="ui-btn-text">Restart</span>
            <span class="ui-icon ui-icon-refresh ui-icon-shadow">&nbsp;</span>
        </span>
    </a>
    </div>
    </div>
    <div id="status-bar">"
    <div id="status-content" style={{backgroundColor:"rgb(51, 51, 51)", borderTop:"2px solid rgb(34, 34, 34)", textAlign:"center", paddingTop:"20px", width:"100%", marginLeft:"auto", marginRight:"auto", display:"block", height:"54px"}}>
    <center>
        <div id="status-content-inner" style={{textAlign:"left", color:"rgb(153, 153, 153)", display:"none", width:"707.5px"}}>
            <table width="100%">
                <tbody>
                    <tr>
                        <td width="40%">
                            <div style={{paddingRight:"20px"}}>
                                <table width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="status-label">Current&nbsp;Trial&nbsp;Axis</td>
                                            <td id="status-var-taxis">135°</td>
                                        </tr>
                                        <tr>
                                            <td class="status-label">Current&nbsp;Trial&nbsp;Delta</td>
                                            <td id="status-var-tdelta">120.0</td>
                                        </tr>
                                        <tr>
                                            <td class="status-label">Most&nbsp;Likely&nbsp;Result</td>
                                            <td id="status-var-resultest">Unknown</td>
                                        </tr>
                                        <tr>
                                            <td class="status-label">Confidence</td>
                                            <td width="100%" style={{backgroundColor:"#222"}}>
                                                <div id="status-var-confidence-ext" style={{float:"left", backgroundColor:"rgb(68, 68, 68)", width:"7%", textAlign:"right"}}>&nbsp;</div>
                                                <div id="status-var-confidence-rem" style={{float:"right", width:"93%"}}>&nbsp;0%&nbsp;</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td width="60%">
                            <div>
                                <table width="100%">
                                    <tbody>
                                        <tr>
                                            <td colspan="2">Color Discrimination Thresholds:</td>
                                        </tr>
                                        <tr>
                                            <td class="status-label">Red-Green&nbsp;Axis&nbsp;</td>
                                            <td width="100%" id="status-bar-rep" style={{backgroundColor:"#222"}}>
                                                <div id="status-var-axis-RG-ext" style={{float:"left", backgroundColor:"rgb(68, 68, 68)", width:"3%", textAlign:"right"}}>&nbsp;</div>
                                                <div id="status-var-axis-RG-rem" style={{float:"right", width:"96%"}}>&nbsp;0&nbsp;</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="status-label">Blue-Yellow&nbsp;Axis&nbsp;</td>
                                            <td width="100%" style={{backgroundColor:"#222"}}>
                                                <div id="status-var-axis-BY-ext" style={{float:"left", backgroundColor:"rgb(68, 68, 68)", width:"3%", textAlign:"right"}}>&nbsp;</div>
                                                <div id="status-var-axis-BY-rem" style={{float:"right", width:"96%"}}>&nbsp;0&nbsp;</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="status-label">Ellipse&nbsp;Parameters</td>
                                            <td id="status-var-ellipse">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </center>
    <center>
        <div id="progress-content-inner" style={{fontSize:"125%", paddingTop:"5px", textAlign:"left", color:"rgb(170, 170, 170)", display:"block", marginLeft:"20px", marginRight:"20px", maxWidth:"90%", width:"707.5px"}}>
            <table width="100%" style={{margin:"0", padding: "0"}}>
                <tbody>
                    <tr>
                        <td class="status-label">Test&nbsp;Progress:</td>
                        <td width="100%" style={{backgroundColor:"#222"}}>
                            <div id="status-var-progress-ext" style={{float:"left", backgroundColor:"#444", width:"0%", textAlign:"right"}}>&nbsp;</div>
                            <div id="status-var-progress-rem" style={{float:"right", width:"100%"}}>&nbsp;</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </center>
    </div>
    </div>
    <img id="timeout-notice" style={{fontSize:"125%", marginTop:"auto", marginBottom:"auto", textAlign:"center", width:"438px", height:"438px", zIndex:"1", position:"absolute", left:"403.993px", top:"132.986px", display:"block"}} class="timeout-notice" src="./EnChroma® Color Blind Test _ Test Your Color Vision_files/timeout-notice.png" />
    <div data-role="content" id="test-content" class="ui-content" role="main">
    <div class="ui-grid-a" style={{width:"100%"}}>
        <div class="ui-block-a" style={{width:"842.5px", marginTop:"0px", marginBottom:"0px", paddingLeft:"373.9px"}} id="app-content">
            <div id="main-canvas-container" style={{width:"100%", height:"100%", textAlign:"center"}}>
                <center>
                    <div id="main-canvas-standin" style={{marginLeft:"auto", marginRight:"auto", textAlign:"center", width:"438px", height:"438px"}}></div>
                </center>
                <canvas width="438" height="438" id="main-canvas" style={{position:"absolute", left:"404px", top:"133px"}}></canvas>
            </div>
            <div id="controls-bottom" style={{width: "100%", textAlign:"center", display:"none"}}>
                <center>
                    <div class="ui-grid-d" id="controls-bottom-task-symbol" style={{maxWidth:"768px", marginLeft:"auto", marginRight:"auto", display:"none"}}>
                        <div class="ui-block-a">
                            <a id="controls-bottom-square" href="javascript:r(1);" data-icon="encr-square" data-iconpos="top" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                                <span class="ui-btn-inner">
                                    <span class="ui-btn-text">Square</span>
                                    <span class="ui-icon ui-icon-encr-square ui-icon-shadow">&nbsp;</span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-block-b">
                            <a id="controls-bottom-circle" href="javascript:r(2);" data-icon="encr-circle" data-iconpos="top" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                                <span class="ui-btn-inner">
                                    <span class="ui-btn-text">Circle</span>
                                    <span class="ui-icon ui-icon-encr-circle ui-icon-shadow">&nbsp;</span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-block-c">
                            <a id="controls-bottom-triangle" href="javascript:r(3);" data-icon="encr-triangle" data-iconpos="top" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                                <span class="ui-btn-inner">
                                    <span class="ui-btn-text">Triangle</span>
                                    <span class="ui-icon ui-icon-encr-triangle ui-icon-shadow">&nbsp;</span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-block-d">
                            <a id="controls-bottom-unsure" href="javascript:r(4);" data-icon="encr-unsure" data-iconpos="top" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                                <span class="ui-btn-inner">
                                    <span class="ui-btn-text">Unsure</span>
                                    <span class="ui-icon ui-icon-encr-unsure ui-icon-shadow">&nbsp;</span>
                                </span>
                            </a>
                        </div>
                        <div class="ui-block-e">
                            <a id="controls-bottom-nothing" href="javascript:r(4);" data-icon="encr-nothing" data-iconpos="top" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                                <span class="ui-btn-inner">
                                    <span class="ui-btn-text">Nothing</span>
                                    <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="ui-grid-b" id="controls-bottom-task-number" style={{maxWidth:"768px", marginLeft:"auto", marginRight:"auto", display:"block"}}>
                        <div class="ui-block-a" style={{width:"25%"}}></div>
                        <div class="ui-block-b" style={{width:"60%"}}>
                            <div class="ui-grid-c">
                                <div class="ui-block-a">
                                    <a href="javascript:n(1)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">1</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-b">
                                    <a href="javascript:n(2)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">2</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-c">
                                    <a href="javascript:n(3)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">3</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-d"></div>
                            </div>
                            <div class="ui-grid-c">
                                <div class="ui-block-a">
                                    <a href="javascript:n(4)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">4</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-b">
                                    <a href="javascript:n(5)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">5</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-c">
                                    <a href="javascript:n(6)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">6</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-d"></div>
                            </div>
                            <div class="ui-grid-c">
                                <div class="ui-block-a">
                                    <a href="javascript:n(7)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">7</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-b">
                                    <a href="javascript:n(8)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">8</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-c">
                                    <a href="javascript:n(9)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">9</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-d">
                                    <a href="javascript:n(0)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">Pass</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="ui-block-c" style={{width:"15%"}}></div>
                    </div>
                    <div class="ui-grid-solo" style={{maxWidth:"400px", marginLeft:"auto", marginRight:"auto", display:"none"}} id="controls-bottom-task-oddity">
                        <div class="ui-block-a">
                            <a id="controls-bottom-skip" href="javascript:r(0);" data-icon="encr-nothing" data-iconpos="top" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                                <span class="ui-btn-inner">
                                    <span class="ui-btn-text">Pass</span>
                                    <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </center>
            </div>
            <div id="controls-bottom-mini" style={{display:"none", width:"100%", textAlign:"center"}}>
                <center>
                    <div id="controls-bottom-mini-task-symbol" style={{display:"none"}}>
                        <div class="ui-grid-b" style={{maxWidth:"400px", marginLeft:"auto", marginRight:"auto"}}>
                            <div class="ui-block-a">
                                <a href="javascript:r(1);" data-icon="encr-square" data-iconpos="top" data-mini="true" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                                    <span class="ui-btn-inner">
                                        <span class="ui-btn-text">Square</span>
                                        <span class="ui-icon ui-icon-encr-square ui-icon-shadow">&nbsp;</span>
                                    </span>
                                </a>
                            </div>
                            <div class="ui-block-b">
                                <a href="javascript:r(2);" data-icon="encr-circle" data-iconpos="top" data-mini="true" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                                    <span class="ui-btn-inner">
                                        <span class="ui-btn-text">Circle</span>
                                        <span class="ui-icon ui-icon-encr-circle ui-icon-shadow">&nbsp;</span>
                                    </span>
                                </a>
                            </div>
                            <div class="ui-block-c">
                                <a href="javascript:r(3);" data-icon="encr-triangle" data-iconpos="top" data-mini="true" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                                    <span class="ui-btn-inner">
                                        <span class="ui-btn-text">Triangle</span>
                                        <span class="ui-icon ui-icon-encr-triangle ui-icon-shadow">&nbsp;</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="ui-grid-a" style={{maxWidth:"400px", marginLeft:"auto", marginRight:"auto"}}>
                            <div class="ui-block-a">
                                <a href="javascript:r(4);" data-icon="encr-unsure" data-iconpos="top" data-mini="true" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                                    <span class="ui-btn-inner">
                                        <span class="ui-btn-text">Unsure</span>
                                        <span class="ui-icon ui-icon-encr-unsure ui-icon-shadow">&nbsp;</span>
                                    </span>
                                </a>
                            </div>
                            <div class="ui-block-b">
                                <a href="javascript:r(4);" data-icon="encr-nothing" data-iconpos="top" data-mini="true" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                                    <span class="ui-btn-inner">
                                        <span class="ui-btn-text">Nothing</span>
                                        <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="ui-grid-b" id="controls-bottom-mini-task-number" style={{maxWidth:"768px", marginLeft:"auto", marginRight:"auto", display:"block"}}>
                        <div class="ui-block-a" style={{width:"20%"}}></div>
                        <div class="ui-block-b" style={{width:"70%"}}>
                            <div class="ui-grid-c">
                                <div class="ui-block-a">
                                    <a href="javascript:n(1)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">1</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-b">
                                    <a href="javascript:n(2)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">2</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-c">
                                    <a href="javascript:n(3)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">3</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-d"></div>
                            </div>
                            <div class="ui-grid-c">
                                <div class="ui-block-a">
                                    <a href="javascript:n(4)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">4</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-b">
                                    <a href="javascript:n(5)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">5</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-c">
                                    <a href="javascript:n(6)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">6</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-d"></div>
                            </div>
                            <div class="ui-grid-c">
                                <div class="ui-block-a">
                                    <a href="javascript:n(7)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">7</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-b">
                                    <a href="javascript:n(8)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">8</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-c">
                                    <a href="javascript:n(9)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">9</span>
                                        </span>
                                    </a>
                                </div>
                                <div class="ui-block-d">
                                    <a href="javascript:n(0)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                                        <span class="ui-btn-inner">
                                            <span class="ui-btn-text">Pass</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="ui-block-c" style={{width:"15%"}}></div>
                    </div>
                    <div class="ui-grid-solo" style={{maxWidth:"300px", marginLeft:"auto", marginRight:"auto", display:"none"}} id="controls-bottom-mini-task-oddity">
                        <div class="ui-block-a">
                            <a id="controls-bottom-mini-skip" href="javascript:r(0);" data-icon="encr-nothing" data-iconpos="left" data-mini="true" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-left">
                                <span class="ui-btn-inner">
                                    <span class="ui-btn-text">Skip</span>
                                    <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </center>
            </div>
        </div>
        <div id="controls-right" class="ui-block-b" style={{width:"270px", display:"block", maxeHight:"100%", marginTop:"24.3111px"}}>
            <div id="controls-right-task-symbol" style={{display:"none"}}>
                <a href="javascript:r(1);" data-icon="encr-square" data-iconpos="top" data-role="button" style={{marginTop: "25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Square</span>
                        <span class="ui-icon ui-icon-encr-square ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(2);" data-icon="encr-circle" data-iconpos="top" data-role="button" style={{marginTop: "25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Circle</span>
                        <span class="ui-icon ui-icon-encr-circle ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(3);" data-icon="encr-triangle" data-iconpos="top" data-role="button" style={{marginTop: "25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Triangle</span>
                        <span class="ui-icon ui-icon-encr-triangle ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(4);" data-icon="encr-unsure" data-iconpos="top" data-role="button" style={{marginTop: "25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Unsure</span>
                        <span class="ui-icon ui-icon-encr-unsure ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(4);" data-icon="encr-nothing" data-iconpos="top" data-role="button" style={{marginTop: "25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Nothing</span>
                        <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
            </div>
            <div id="controls-right-task-number" style={{display:"block"}}>
                <div class="ui-grid-b">
                    <div class="ui-block-a">
                        <a href="javascript:n(1)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">1</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-b">
                        <a href="javascript:n(2)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">2</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-c">
                        <a href="javascript:n(3)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">3</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="ui-grid-b">
                    <div class="ui-block-a">
                        <a href="javascript:n(4)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-up-a">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">4</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-b">
                        <a href="javascript:n(5)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">5</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-c">
                        <a href="javascript:n(6)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">6</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="ui-grid-b">
                    <div class="ui-block-a">
                        <a href="javascript:n(7)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">7</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-b">
                        <a href="javascript:n(8)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">8</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-c">
                        <a href="javascript:n(9)" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">9</span>
                            </span>
                        </a>
                    </div>
                </div>
                <a href="javascript:n(0)" data-icon="encr-unsure" data-iconpos="top" data-role="button" style={{marginTop: "25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Unsure</span>
                        <span class="ui-icon ui-icon-encr-unsure ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:n(0)" data-icon="encr-nothing" data-iconpos="top" data-role="button" style={{marginTop: "25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Nothing</span>
                        <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
            </div>
            <div id="controls-right-task-oddity" style={{display:"none"}}>
                <a id="controls-right-skip" href="javascript:r(4);" data-icon="encr-nothing" data-iconpos="top" data-role="button" style={{marginTop:"25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Pass</span>
                        <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
            </div>
        </div>
        <div id="controls-right-mini" class="ui-block-b" style={{width:"0%", display:"none", maxHeight:"100%"}}>
            <div id="controls-right-mini-task-symbol" style={{display:"none"}}>
                <a href="javascript:r(1);" data-icon="encr-square" data-mini="true" data-iconpos="left" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-left">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Square</span>
                        <span class="ui-icon ui-icon-encr-square ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(2);" data-icon="encr-circle" data-mini="true" data-iconpos="left" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-left">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Circle</span>
                        <span class="ui-icon ui-icon-encr-circle ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(3);" data-icon="encr-triangle" data-mini="true" data-iconpos="left" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-left">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Triangle</span>
                        <span class="ui-icon ui-icon-encr-triangle ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(4);" data-icon="encr-unsure" data-mini="true" data-iconpos="left" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-left">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Unsure</span>
                        <span class="ui-icon ui-icon-encr-unsure ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:r(4);" data-icon="encr-nothing" data-mini="true" data-iconpos="left" data-role="button" style={{marginTop:"15px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-left">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Nothing</span>
                        <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
            </div>
            <div id="controls-right-mini-task-number" style={{display:"block"}}>
                <div class="ui-grid-b">
                    <div class="ui-block-a">
                        <a href="javascript:n(1)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">1</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-b">
                        <a href="javascript:n(2)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">2</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-c">
                        <a href="javascript:n(3)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">3</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="ui-grid-b">
                    <div class="ui-block-a">
                        <a href="javascript:n(4)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">4</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-b">
                        <a href="javascript:n(5)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">5</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-c">
                        <a href="javascript:n(6)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">6</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="ui-grid-b">
                    <div class="ui-block-a">

                        <a href="javascript:n(7)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">7</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-b">
                        <a href="javascript:n(8)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">8</span>
                            </span>
                        </a>
                    </div>
                    <div class="ui-block-c">
                        <a href="javascript:n(9)" data-mini="true" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini">
                            <span class="ui-btn-inner">
                                <span class="ui-btn-text">9</span>
                            </span>
                        </a>
                    </div>
                </div>
                <a href="javascript:n(0)" data-icon="encr-unsure" data-mini="true" data-iconpos="top" data-role="button" style={{marginTop:"20px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Unsure</span>
                        <span class="ui-icon ui-icon-encr-unsure ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
                <a href="javascript:n(0)" data-icon="encr-nothing" data-mini="true" data-iconpos="top" data-role="button" style={{marginTop: "10px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Nothing</span>
                        <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
            </div>
            <div id="controls-right-mini-task-oddity" style={{display:"none"}}>
                <a id="controls-right-mini-skip" href="javascript:r(0);" data-icon="encr-nothing" data-iconpos="top" data-mini="true" data-role="button" style={{marginTop:"25px"}} data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="a" class="ui-btn ui-btn-up-a ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-top">
                    <span class="ui-btn-inner">
                        <span class="ui-btn-text">Pass</span>
                        <span class="ui-icon ui-icon-encr-nothing ui-icon-shadow">&nbsp;</span>
                    </span>
                </a>
            </div>
        </div>
    </div>
    </div>
    <div data-role="footer" id="test-footer" class="ui-footer ui-bar-a" role="contentinfo">
    <h1 style={{color:"#aaa"}} class="ui-title" role="heading" aria-level="1">
        <img src="./EnChroma® Color Blind Test _ Test Your Color Vision_files/enchroma-footer-2.png" style={{maxWidth:"90%"}} />
        </h1>
    </div>
    </div>
    
        </div>
    );
}
export default startTest;