import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (          
            <div className="section slide-personal-Intro-sixth slide-dark" id="contact">                
                <footer id="footer" className="footer footer-s1 footer-s1-home1">
                    <div id="footer-widget" className="footer-widget-s1 footer-widget-line bg-s1 position-relative">
                    <div className="container">
                        <div className="row d-lg-flex align-items-center text-center">
                        <div className="col-lg-12">
                            <h3 className="widget-title larger lt-sp06" style={{color:'yellow'}}>Stay Connected</h3>
                        </div>
                        <div className="col-lg-12">
                            <div className="widget-info">
                            <p className="address"style={{color:'white'}}>Campinas, Brasil</p>
                            <p className="mail" style={{color:'white'}}>ernanisan_hv.metals@hotmail.com</p>
                            <p className="phone"style={{color:'white'}}>+55 19 984206416</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="site-list site-list-pdl text-center">
                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div id="bottom" className="bottom-s1">
                    <div className="container d-lg-flex justify-content-between" >
                        <div className="copyright lt-sp02" style={{color:'yellow'}}>
                        © Ernani developer, 2023 All rights reserved.
                        </div>
                        <div className="socials-list color-s1">
                        <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                        <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                        <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                        </div>
                    </div>
                    </div>
                </footer>             
            </div>
        );
    }
}

export default Footer;
