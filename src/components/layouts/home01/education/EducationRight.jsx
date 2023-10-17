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
                    text: 'Atividades: Na universidade mantive foco em Java, porem foram desenvolvidos projetos de web, API, REST, dados estruturados ou não, IA, padrões, POO e metodologias ágeis, com as linguagens: C/C++, Java, Python, Javascript, Typescript, além de frameworks, e biblioteca: Angular, React, Node, Android, V Code, PostgreSql, SQL, Mongo e Firebase(NOSQL), ORM, UML, Hibernate, Bootstrap.'
                },
              
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'Computer (Cotuca Unicamp)',
                    title: 'Computer Science',
                    text: 'Atividades e grupos: No colégio técnico foi desenvolvido aplicações com as linguagens Java, PHP, Delphi, SQL, HTML,CSS, Javascript, C# para aplicações web, Servelets, Rest, locais, interfaces, ciclos de software, testes de bugs, repositórios. Ainda, foram desenvolvidos conceitos de programação POO, UML e gerência de projeto, tools como Eclipse, NetBeans, Visual Basic'
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
