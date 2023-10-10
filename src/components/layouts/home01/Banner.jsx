import React, { Component } from 'react';
import {Link} from 'react-router-dom' 
import './InitialPic/index.scss'
import './AnimatedLetters'
import Style from './InitialPic/Home.module.scss';
import me from './InitialPic/img/self.jpg';
import classNames from 'classnames';
import EmojiBullet from "./InitialPic/EmojiBullet";
import SocialIcon from "./InitialPic/SocialIcon";
import {Box} from "@mui/material";
import {info} from "./InitialPic/info/Info";



class Banner extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-first">   
            
                      
            <section className="banner-section s1" id="home">
            <div className="container">
                            

                            <div className="content-text position-relative"> 
    
                            
                                   
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
    
                                
                               
                                <h1 className="cd-headline clip is-full-width title mg-b29 text-white">    
                                <span className="cd-words-wrapper color-d4">
                                
                              
                                <b className="is-visible">Welcome!
                                </b>
    
                                
                                
    
                                <b>I'm Ernani</b>
                                
    
    
                                </span>
                                
                                
                            </h1>
                            <p className="lt-sp03 mg-b60 text-white">
                                I am Java Junior Developer with React or Angular <br />         
                                <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="fl-btn btn-general btn-hv-border">
                                    <Link to="#" className="border-corner5 f-w500 lt-sp095 text-white ">Download Resume</Link>
                                </div>
                            </div>   
                                <Box component={'main'}   style={{position: 'relative',  // We are now ready to move the element
            top: '-250px',         // 100px from top relative to its old position
            left: '700px'        // 100px from left
            }}
        alignItems={'left'}
           justifyContent={'left'} >
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}}  component={'img'} src={me} 
            width={{xs: '25vh', md: '35vh'}}
            height={{xs: '50vh', md: '35vh'}}
              borderRadius={'50%'} p={'0.8rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '3rem'}}/>
              
         <Box>
         <span style={{  position: 'relative',left: '300px',top: '0px'}}>
          <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span>
          <span className={Style.hand}><h1>🤚</h1></span>
            
             </span>
            <Box component={'ul'} p={'1rem'} color={'white'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'3rem'} justifyContent={'center'} fontSize={{xs: '3rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
            
         </Box>
  
      </Box>    
               
              

    
                            </p>
    
    
                            
                            </div>
    
    
                          
    
                            
    
                        </div>
       
                        </div>
                        
                        
                    </section>
                    </div>
     
                
          

            

        );
    }
}

export default Banner;

