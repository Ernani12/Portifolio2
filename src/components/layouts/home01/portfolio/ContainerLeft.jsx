import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ContainerLeft extends Component {
    render() {
        return (
            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-title t1">
                    <h4 className="sub-title mb-2">Backend and FrontEnd</h4>
                    <h2 className="title-section color-d12 mg-b34">Java Stack</h2>
                    <div className="description">
                    <span style={{color:'white', fontFamily:'Poynter', textAlign:'justify', fontSize:'20px', fontWeight:'bold'}}>
                    <p className="lt-sp01">
                     

                        <b>I have beeen create and working with  Java, Spring MVC patterns,
                        in backend, but  if you need i could create fullstack too, using
                        React, Angular, JS and Bootstrap.</b>
                        
                        </p>
                        <p className="lt-sp01">
                        <b>Why Java? 
                       <br></br> •Organized
                       <br></br>•Easily to install
                       <br></br>•Maintenance
                       </b>
                        </p> </span>
                    </div>
                    <div className="fl-btn btn-general btn-hv-border">
                        <Link to="#" className="f-w500 text-one color-1 lt-sp1 border-corner2">View Case Study</Link>
                    </div>
                </div>
          </div>
        );
    }
}

export default ContainerLeft;
