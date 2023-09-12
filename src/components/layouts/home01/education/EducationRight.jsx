import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class EducationRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            skill: [
                {
                    id: 1,
                    timeline: 'timeline-inverted color1',
                    info: 'Universidade Federal de Itajuba',
                    title: 'Computer Science',
                    text: 'Focus on Java POO, JavaScript, Android, Python, React, Angular, C/C++, SQL, NOSQL, Spring, Django, Design Patters, Marven, CSS, Html'
                },
              
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'Computer (Cotuca Unicamp)',
                    title: 'Computer Science',
                    text: 'Focus on Java POO, JavaScript, Android, Python, React, Angular, C/C++, SQL, NOSQL, Spring, Django, Design Patters, Marven, CSS, Html'
                },


                {
                    id: 3,
                    timeline: 'timeline-inverted color3',
                    info: 'Udemy Courses',
                    title: 'Spring Boot, Clean Code, MVC',
                    text: 'Studing more Spring Boot in particular with React or Angular'
                },

                {
                    id: 4,
                    timeline: 'timeline-inverted color3',
                    info: 'Udemy Courses',
                    title: 'Spring Boot, Clean Code, MVC',
                    text: 'Studing more Spring Boot in particular with React or Angular'
                },
             
            ]
        }
    }
    render() {
        return (
            <div className="col-right">
                <div className="flat-spacer" data-desktop={0} data-mobile={70} data-smobile={70} />
                <div className="flat-title t1 animate-element wow delay5 fadeInDown">
                    <h4 className="sub-title mg-b13">Educational qualification</h4>
                    <h2 className="title-section color-d12">My Education</h2>
                </div>
                <div className="timelines position-relative animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                    <ul className="timeline">
                        {
                            this.state.skill.map(data => (
                                <li className={data.timeline} key={data.id}>
                                    <div className="timeline-badge" />
                                    <div className="timeline-panel">
                                        <h3 className="f-info">{data.info}</h3>
                                        <div className="s-info">{data.title}</div>
                                       <span style={{color:'white', fontFamily:'Poynter', textAlign:'justify', fontSize:'20px', fontWeight:'bold'}}>
                                        <p>
                                            {data.text}
                                        </p>
                                        </span>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    <div className="fl-btn btn-general btn-hv-border">
                        <Link to="#" className="f-w500 lt-sp1 border-corner2 text-one">Download Resume</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationRight;
