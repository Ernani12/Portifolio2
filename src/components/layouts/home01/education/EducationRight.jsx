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
                    text: 'Activities: At my University I focused on Java, but web projects, API, REST, structured or unstructured data, AI, standards, OOP and agile methodologies were developed, with the languages: C/C++, Java, Python, Javascript, Typescript, in addition to frameworks and libraries: Angular, React, Node, Android, V Code, PostgreSql, SQL, Mongo and Firebase (NOSQL), ORM, UML, Hibernate, Bootstrap.'
                    
                },
              
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'Computer (Cotuca Unicamp)',
                    title: 'Computer Science',
                    text: 'Activities and groups: At the technical college, applications were developed using the languages ​​Java, PHP, Delphi, SQL, HTML, CSS, Javascript, C# for web applications, Servelets, Rest, locations, interfaces, software cycles, bug testing, repositories. Furthermore, concepts of OOP programming, UML and project management were developed, tools such as Eclipse, NetBeans, Visual Basic'
                },


                {
                    id: 3,
                    timeline: 'timeline-inverted color3',
                    info: 'Courses: Udemy, DevMidia , Dicionario do Programador, CodeAcademy, Alura, RockSeat',
                    title: 'Spring Boot, Clean Code, MVC, Kubernets, Docker',
                    text: 'Studing more Spring Boot in particular with React or Angular, with new tecnologies.'
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
                                       <span style={{color:'white', fontFamily:'Poynter' , lineHeight:'25px', letterSpacing:'0.2px', textAlign:'justify', fontSize:'18px', fontWeight:'bold'}}>
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
