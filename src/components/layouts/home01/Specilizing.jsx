import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NumberCount} from './specilizing/index';

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
                        
        <Card style={{ width: '60rem', borderSpacing:'0px' , color:'white', borderWidth:'thick', padding:'20px', borderRadius:'30% 10% / 10% 20%', marginBottom:'3rem' }}>
            
            <Card.Body style={{ backgroundColor: 'white'}}>
                <Card.Title style={{ backgroundColor: 'blue'}}>
                <FaJava color="18F56B" fontSize="5em"   />
                    Java</Card.Title>
                <Card.Text style={{  backgroundColor: 'blue', fontSize:'20px', textAlign:'justify'}}>
                •My princibal Stack base its Java. I am learning Java  
                since 2010-2013 in my technician colege COTUCA(Unicamp) width
                Java version 8. In this course i ve been studing  CSS, HTML
                Delphi, JSP, PHP, SQL, C#. Although, my focus was  POO (oriented objeted),
                in Java , building MVC projects, API, Rest, and others some apps in desktop in Java. 
                <br></br>
                •Even in my University (UNIFEI),  I was studing Computer Science 
                with  new  languages  and frameworks  like Spring, Django, Angular, Hibernate
                librarys like React  for developing  Rest API, web applications
                with backend and Frontend too and i still study design patters too
                like Solid, Factor, Abstract, POO concepts: Overloading, Overriding,  and reusing components.
                
                </Card.Text>
            </Card.Body>
        </Card> 

        <Card style={{ width: '60rem', left:'60px' , color:'white', borderWidth:'thick', padding:'20px', borderRadius:'30% 10% / 10% 20%', marginBottom:'3rem' }}>

            <Card.Img variant="top"  />
            <Card.Body style={{ backgroundColor: 'blue'}}>
                <Card.Title style={{ backgroundColor: 'blue'}}>
                <FaReact color="08EEFF" fontSize="5em" animate="spin" />
                    React</Card.Title>
                <Card.Text style={{ backgroundColor: 'blue'}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card> 

        <Card style={{ width: '60rem', left:'140px' , color:'white', borderWidth:'thick', padding:'20px', borderRadius:'30% 10% / 10% 20%', marginBottom:'3rem' }}>

            <Card.Img variant="top"  />
            <Card.Body style={{ backgroundColor: 'blue'}}>
                <Card.Title style={{ backgroundColor: 'blue'}}>
                <FaAngular color="F40224" fontSize="5em"  />
                    Angular</Card.Title>
                <Card.Text style={{ backgroundColor: 'blue'}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card> 


                            <div className="flat-spacer" data-desktop="0" data-mobile="0" data-smobile="0"></div>
                            <div className="fact">
                                <NumberCount />
                                <div className="btn-contact bg-s1 text-center">
                                    <h4 className="title color-d12">Get a project? Let’s talk.</h4>
                                    <Link to="#" className="email color-s1 color-d14">ernanisan@outlook.com</Link>
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
