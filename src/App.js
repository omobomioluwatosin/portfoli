import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDesktop, faBusinessTime, faLayerGroup, faBorderStyle, faSearch} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './bootstrap.min.css';
import ContactForm from './ContactForm'
import './App.css';

function App() {
  return (
    <div className="App">

<div className="site-wrap">

<div className="site-mobile-menu site-navbar-target">
  <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close mt-3">
      <span className="icon-close2 js-menu-toggle"></span>
    </div>
  </div>
  <div className="site-mobile-menu-body"></div>
</div>
<header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

  <div className="container-fluid">
    <div className="row align-items-center justify-content-center">
      
      <div className="">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li><a href="#home-section" className="nav-link">Home</a></li>
            <li><a href="#services-section" className="nav-link">Services</a></li>
            <li><a href="#about-section" className="nav-link">About</a></li>
            
          </ul>
        </nav>
      </div>

   
      <div className="text-left">

       

        <nav className="site-navigation position-relative" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
    
            <li><a href="#contact-section" className="nav-link">Contact</a></li>
          </ul>
        </nav>


        <div className="d-inline-block d-lg-none" style={{position: 'relative'}}><a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a></div>

      </div>

    </div>
  </div>
  
</header>


<div  className="site-blocks-cover overlay bg-light" id="home-section" >

  <div className="container">
    
    <div className="row justify-content-center">

      <div className="col-md-12 mt-lg-5 text-left align-self-center text-intro">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-black">I'm Omobomi Oluwatosin</h1>
            <p className="lead">I'm Web Developer Based on Nigeria.</p>
            <p><a href="#portfolio-section" className="btn smoothscroll btn-primary">Portfolio</a></p>

          </div>
        </div>
      </div>
        
    </div>
  </div>

  <div className="img-face"></div>

</div>  

<div className="site-section" id="services-section">
  <div className="container">
    <div className="row ">
      <div className="col-12 mb-5 position-relative">
        <h2 className="section-title text-center mb-5">My Services</h2>
      </div>
      
      <div className="col-md-6 mb-4">
        <div className="service d-flex h-100">
          <div className="service-number mr-4"><span className="icon-style"><FontAwesomeIcon icon={faDesktop} />
</span></div>
          <div className="service-about">
            <h3>UI/UX Designer</h3>
            <p>Let me take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="service d-flex h-100">
          <div className="service-number mr-4"><span className="icon-business_center"><FontAwesomeIcon icon={faBusinessTime} /></span></div>
          <div className="service-about">
            <h3>Web Development</h3>
            <p>
The true ENTREPRENEUR is a risk taker, not an excuse maker.</p>
          </div>
        </div>
      </div>

  

      <div className="col-md-6 mb-4">
        <div className="service d-flex h-100">
          <div className="service-number mr-4"><span className="icon-layers"><FontAwesomeIcon icon={faLayerGroup} /></span></div>
          <div className="service-about">
            <h3>Web Design</h3>
            <p>
Make things as simple as possible, but not simpler.

</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="site-section" id="about-section">
  <div className="container">
    <div className="row ">
      <div className="col-12 mb-4 position-relative">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
        <div className="some">
       
        </div>
      </div>
      <div className="col-lg-4 order-2 order-lg-1">
        <p>My name is Omobomi oluwatosin, i'm 20 years old front End
Developer based in Nigeria (Akure). i describe myself as a
developer who love coding,open source, and web platform.
currently searching for a internship as a Font End Engineer. I
had a great tutor/mentor, who taught so much about code
organisation, which i'm still very passionate about today (can't
thank you enough Akintunde!􀆣.</p>
      </div>
      <div className="col-lg-4 order-3 order-lg-3">
     <p>As a junior i was thrown in at
the deep end, and for me it was the best way to learn.
other people can sometimes struggle to know which tasks are
frontend and which are backend. sometimes i feel as thought
people don't entirely realize the amount of work that involved
in frontend development.we're in a sort of hybrid role that
works between designers and backend developers to make
sure your website looks awesome and performs well.</p>
        <a href="#contact-section" className="btn smoothscroll btn-primary">Contact Me</a>
      </div>
      
    </div>
  </div>
</div>




<section className="site-section block__62272" id="portfolio-section">
  

  <div className="container">
    <div className="row mb-5">
      <div className="col-12 position-relative">
        <h2 className="section-title text-center mb-5">My Portfolio</h2>
      </div>
    </div>

    
    <div id="posts" className="row no-gutter">
      <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
        <a href="http://twitterfrontpage.herokuapp.com/" className="item-wrap fancybox">
          <span className="icon-search2"><FontAwesomeIcon icon={faSearch}  size={'lg'}/></span>
          <div className="img-fluid"></div>
        </a>
      </div>
      <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
        <a href="http://beautybytaye.herokuapp.com/"  className="item-wrap fancybox">
          <span className="icon-search2"><FontAwesomeIcon icon={faSearch}  size={'lg'}/></span>
          <div className="img-fluid1"></div>
        </a>
      </div>

      <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
        <a href="images/post_4.jpg" className="item-wrap fancybox">
          <span className="icon-search2"><FontAwesomeIcon icon={faSearch}  size={'lg'}/></span>
          <div className="img-fluid2"></div>
        </a>
      </div>
  
    </div>
  </div>
</section>
<section className="site-section" id="contact-section">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-5 position-relative">
        <h2 className="section-title text-center mb-5">Contact Form</h2>
      </div>
    </div>
    <form action="#" className="form">
      <div className="row mb-4">

      <ContactForm/> 
      </div> 
    </form>
  </div>
</section>

<footer className="site-section bg-light footer">
  <div className="container">

     
      
      <div className="col-md-3">
        <h3 className="footer-title">Follow Me</h3>
        <a href="https://twitter.com/omobomi oluwatosin/" target="_blank" className="social-circle"><span className="icon-twitter"><FontAwesomeIcon icon={faTwitter}  size={'lg'}/></span></a>
        <a href="https://facebook.com/omobomi oluwatosin/" target="_blank" className="social-circle"><span className="icon-facebook"><FontAwesomeIcon icon={faFacebook}size={'lg'} /></span></a>
        <a href="https://instagram.com/somebody-i-love1/" target="_blank" className="social-circle"><span className="icon-instagram"><FontAwesomeIcon icon={faInstagram} size={'lg'}/></span></a>
        <a href="https://linkedin.com/Omobomi oluwatosin/" target="_blank" className="social-circle"><span className="icon-linkedin"><FontAwesomeIcon icon={faLinkedin}size={'lg'} /></span></a>
       
      </div>
    </div>

<div className='copy'>Copyright ©2020 All rights reserved |sombebodyilove</div>
 
</footer>

</div>
    </div>
  );
}

export default App;
