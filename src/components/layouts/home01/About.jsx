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
                    name: 'CodigoFonteTV',
                    normal: 'Dicionario do Programador'
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
                                <h2 className="title-section mg-b26 color-d12" style={{backgroundColor:'white',fontSize:'25px'}}>Hi, I am here to <span className="color-d4" style={{backgroundColor:'white'}} >help you.</span></h2>
                               <span   style={{fontFamily:"Times New Roman",color:'black', backgroundColor:'white', textAlign:'justify', fontSize:'18px', fontWeight:'bold'}}> 
                               <p style={{backgroundColor:'white'}}>
                               Professional JR graduated in Computer Science from Unifei and passionate about technology, programming, logic, software development and applications, he likes the area and his main base is Java, and can also use React or Angular (developing)
                               I studied at the COTUCA technical college on the Internet IT course where I gained knowledge in:
                               Java, Delphi, PHP, SQL and tools for web services. (htmls, css, JavaScript, JSP), in which I did an internship at MOTOROLA (Lenovo).
                               Current degree in Computer Science Bachelor - Federal University of Itajubá, dealing with technologies and languages ​​such as: Java, Python, React, Angular (JavaScript and Type), PHP, SQL, Spring, Mongo, Firebase, Django, REST API, C/ C++, PostgreeSQL, MySQL, Node, Github, Jira, similar for software development,
                               with IBM/KYNDRYL internship.
  
                                    <br></br>
                                    
                                    Hi  if you need Java softwares backend and frontend, maybe  fullstack 
                                    web Rest API, automation, i could help  you.
                                </p> </span>
                            </div>
                          
                        </div>
                        
                    </div>
                </div>
                <div className="profile-list" style={{alignContent:"center"}} >
                    <div className="flat-carousel-box data-effect clearfix"   data-gap="30" data-column="4" data-column2="3" data-column3="2" data-column4="1" data-column5="1" data-dots="false" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel"   >
                            {
                                this.state.profile.map(data => (
                                    <div   className={data.classname} key={data.id} >
                                        <div className="featured-post"  >
                                            <img src={data.images} alt={data.alt}/>
                                        </div>
                                        <div className="content-inside" style={{backgroundColor:'white'}}>
                                            <h3 className="name"  ><Link to="#" >{data.name}</Link></h3>
                                            
                                        </div>
                                    </div>    
                                ))
                            }                                                          
                        </div>
                    </div>
                    
                </div>
                
            
              
                <div class="fl-btn btn-general btn-hv-border" style={{backgroundColor:'white'}}>
                <a class="f-w500 text-one color-1 lt-sp1 border-corner2" style={{backgroundColor:'#fbbd41'}} href="mailto:ernanisan_hv.metals@hotmail.com">Hire Me</a>
    </div>
            </div>
            
          
            
        );
    
        
    }
    
}
  

export default About;
