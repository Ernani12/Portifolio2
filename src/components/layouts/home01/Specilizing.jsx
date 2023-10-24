import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FaReact } from 'react-icons/fa';

import { FaAngular } from 'react-icons/fa';

import { FaJava } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';





class Specilizing extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    render() {
        return (
            <div className="section slide-personal-Intro-third slide-dark bg-white">
                <section className="specilizing-in s1" id="services">
                    <div className="container">
                        <div className="flat-title">
                            <h2 className="title-section color-d12 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">Knowlegde in</h2>

                    

                        </div>


                        
                        <div className="row position-relative z-index1" >
                        
        <Card style={{ fontFamily:"Times New Roman", width: '75rem', color:'white', borderSpacing:'0px' , borderWidth:'thick', padding:'20px', borderRadius:'30% 10% / 10% 20%', marginBottom:'3rem' }}>
            
            <Card.Body style={{ backgroundColor: 'transparent'}}>
                <Card.Title style={{ color:'black', backgroundColor: 'white', margin: '0 auto'}}>
                <FaJava color="green" fontSize="5em"   />
                    Java</Card.Title>
                <Card.Text  style={{color:'black', backgroundColor:'white', textAlign:'justify', fontSize:'16px', fontWeight:'bold'}}>
                • My princibal Stack base its Java. I am learning Java  
                since 2010-2013 in my technician colege COTUCA(Unicamp) width
                Java version 8. In this course i ve been studing  CSS, HTML
                Delphi, JSP, PHP, SQL, C#. Although, my focus was  POO (oriented objeted),
                in Java , building MVC projects, API, Rest, and others some apps in desktop in Java. 
                <br></br>
                • Even in my University (UNIFEI),  I was studing Computer Science 
                with  new  languages  and frameworks  like Spring, Django, Angular, Hibernate
                librarys like React  for developing  Rest API, web applications
                with backend and Frontend too and i still study design patters too
                like Solid, Factor, Abstract, POO concepts: Overloading, Overriding,  and reusing components.
              
                </Card.Text>
            </Card.Body>
        </Card> 
        <Card style={{ fontFamily:"Times New Roman",left:'60px', fontSize:'16px', fontWeight:'bold',textAlign:'justify',  width: '70rem', color:'white', borderSpacing:'0px' , borderWidth:'thick', padding:'20px', borderRadius:'30% 10% / 10% 20%', marginBottom:'3rem' }}>
            
            <Card.Body style={{ backgroundColor: 'transparent'}}>
                <Card.Title style={{ color:'black',backgroundColor: 'white', margin: '0 auto'}}>
                <FaReact color="blue" fontSize="5em" animate="spin" />    
                React</Card.Title>
                <Card.Text style={{color:'black', backgroundColor:'white', padding:'2px', margin: '0 auto', fontSize:'16px', textAlign:'justify'}}>
                • React its used when you have more animations and user interactions on the same layer.
                React was created by Facebook, which was also a library for JavaScript structuring page components and handling the various event interactions and user states, 
                with greater flexibility. From this perspective, React maintains a copy of the DOM elements and can make changes only to the necessary parts, instead of having to reload
                the entire structure of a page (FEDOSEJEV, 2015).
                <br></br>
                • It is library is very easy to use associated with css, html and bootstrap and complement each other. At university, I used this library to make statistics graphs, 
                reactive components, animated card containers, especially if you want to use API.

                
                </Card.Text>
            </Card.Body>
        </Card> 

        <Card style={{  fontFamily:"Times New Roman", left:'140px', fontSize:'16px', fontWeight:'bold',textAlign:'justify',  width: '70rem', color:'white', borderSpacing:'0px' , borderWidth:'thick', padding:'10px', borderRadius:'30% 10% / 10% 20%', marginBottom:'3rem' }}>
            
            <Card.Body style={{ backgroundColor: 'transparent'}}>
                <Card.Title style={{ color:'black',backgroundColor: 'white', margin: '0 auto'}}>
                <FaAngular color="red" fontSize="5em"  />    
    
                Angular</Card.Title>
                <Card.Text style={{color:'black', backgroundColor:'white', padding:'0px',margin: '0 auto', fontSize:'16px', textAlign:'justify'}}>
                • Angular is common when you want to reuse several components and take advantage of layer styling on a single page, 
                a little different from React's Virtual DOM. This way it only loads what is necessary, 
                provides a fast loading of information and an organized MVC model.
                (GREEN, Brad; SESHADRI, Shyam. AngularJS. " O'Reilly Media, Inc.", 2013).
                <br></br>
                • Even in my University (UNIFEI),  I used
                to make simples pages to load data like  A hospital,  Supermarket prototipes
                using routers, databind, services ect.
               
                </Card.Text>
            </Card.Body>
        </Card> 

       


                            <div className="flat-spacer" data-desktop="0" data-mobile="0" data-smobile="0"></div>
                            <div className="fact">
                                
                                <div className="btn-contact bg-s1 text-center">
                                    <h4 className="title color-d12" style={{color:'blue', backgroundColor:'white'}}>Get a project? Let’s talk.</h4>
                                    <Link to="#" className="email color-s1 color-d14" style={{color:'black', backgroundColor:'white'}}>ernanisan@outlook.com</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="featured-post animate-element wow delay5 fadeInRight" data-wow-delay="0.5s">
                        <img src="images/section/09.png" alt="images" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Specilizing;
