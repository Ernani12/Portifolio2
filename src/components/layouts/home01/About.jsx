import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: [
                {
                    id: 1,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/codigoFonte.jpg',
                    alt: 'images',
                    name: 'Dicionario do Programador',
                    normal: 'Codigo Fonte'
                },
                {
                    id: 2,
                    classname: 'profile-link border-corner2 d-flex align-items-center ',
                    images: './images/section/stack.png',
                    alt: 'images',
                    name: 'StackOverflow',
                    normal: 'Bugs'
                },
                {
                    id: 3,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/geek.png',
                    alt: 'images',
                    name: 'GeekForGeeks',
                    normal: 'Examples'
                },
                {
                    id: 4,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/a.jpg',
                    alt: 'images',
                    name: 'Alura',
                    normal: 'Examples'
                },

                {
                    id: 5,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/udemi.png',
                    alt: 'images',
                    name: 'Udemy',
                    normal: 'Courses'
                }
            ]   
        }
    }
    render() {
        return (
            <div className="background-white" >
                <div className="d-lg-flex" style={{backgroundColor:'white'}} >
                    <div className="col-left" style={{backgroundColor:'white'}}>
                        <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s" >
                            <img src="images/section/03.png" alt="images"/>
                        </div>
                    </div>
                    <div className="col-right" style={{backgroundColor:'white'}} >
                        
                        <div className="flat-title t1"  style={{backgroundColor:'white'}}>
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s" style={{backgroundColor:'white'}}>
                                <h4 className="sub-title mg-b22" style={{backgroundColor:'white'}}>About Me</h4>
                                <h2 className="title-section mg-b26 color-d12" style={{backgroundColor:'white'}}>Hi, I am here to <span className="color-d4" style={{backgroundColor:'white'}} >help you.</span></h2>
                               <span   style={{fontFamily:"Times New Roman",color:'black', backgroundColor:'white', textAlign:'justify', fontSize:'18px', fontWeight:'bold'}}> 
                               <p style={{backgroundColor:'white'}}>
                                    I am a technician and bachelor in Cumputer Science, 
                                    starting my study in Java, POO, intarfaces, Rest, API,
                                    JSP, JFS, css, html since 2013. Java is scalable, 
                                    organized and can be adapted because to the JVM.
                                    Today 20st century with spring boot and others frameworks,  its easily
                                    susceptible to changes, using many frontends or libs like React, Angular, Bootstrap,
                                    such as the adoption of different cloud databases,
                                    tests, additional functions such as stream, collections, Lambda expressions and its is adaptable because  the JVM.
  
                                    <br></br>
                                    
                                    Hi  if you need Java softwares backend and frontend, maybe  fullstack 
                                    web Rest API, automation, i could help  you.
                                </p> </span>
                            </div>
                          
                        </div>
                        
                    </div>
                </div>
                <div className="profile-list"  >
                    <div className="flat-carousel-box data-effect clearfix"   data-gap="30" data-column="4" data-column2="3" data-column3="2" data-column4="1" data-column5="1" data-dots="false" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel"   >
                            {
                                this.state.profile.map(data => (
                                    <div   className={data.classname} key={data.id} >
                                        <div className="featured-post"  >
                                            <img src={data.images} alt={data.alt}/>
                                        </div>
                                        <div className="content-inside" style={{backgroundColor:'white'}}>
                                            <h3 className="name"  backgroundColor="white"  ><Link to="#" >{data.name}</Link></h3>
                                            <span className="t-normal"  >{data.normal}</span>
                                        </div>
                                    </div>    
                                ))
                            }                                                          
                        </div>
                    </div>
                    
                </div>
                
            
              
                <div class="fl-btn btn-general btn-hv-border" style={{backgroundColor:'white'}}>
                <a class="f-w500 text-one color-1 lt-sp1 border-corner2" style={{backgroundColor:'#fbbd41'}} href="/">Hire Me</a>
    </div>
            </div>
            
          
            
        );
    
        
    }
    
}
  

export default About;
