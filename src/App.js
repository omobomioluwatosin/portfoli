import React from 'react';
import './bootstrap.min.css';
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
<header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

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


<div className="site-blocks-cover overlay bg-light" id="home-section">

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

  <img src="images/face.png" alt="Image" className="img-face" data-aos="fade"/>

  
</div>  




<div className="site-section" id="services-section">
  <div className="container">
    <div className="row ">
      <div className="col-12 mb-5 position-relative">
        <h2 className="section-title text-center mb-5">My Services</h2>
      </div>
      
      <div className="col-md-6 mb-4">
        <div className="service d-flex h-100">
          <div className="service-number mr-4"><span className="icon-style"></span></div>
          <div className="service-about">
            <h3>UI/UX Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="service d-flex h-100">
          <div className="service-number mr-4"><span className="icon-business_center"></span></div>
          <div className="service-about">
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="service d-flex h-100">
          <div className="service-number mr-4"><span className="icon-desktop_windows"></span></div>
          <div className="service-about">
            <h3>Brand &amp; Logo Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="service d-flex h-100">
          <div className="service-number mr-4"><span className="icon-layers"></span></div>
          <div className="service-about">
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
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
        <div className="bg-light pt-5">
        <img src="../images/face.png" alt="Image" />
       

        </div>
      </div>
      <div className="col-lg-4 order-2 order-lg-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
      </div>
      <div className="col-lg-4 order-3 order-lg-3">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum error eligendi molestiae eaque quas, ducimus sequi excepturi?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam qui maiores, ipsa quibusdam distinctio! Expedita ipsum ex porro obcaecati.</p>
        <p><a href="#contact-section" className="btn smoothscroll btn-primary">Contact Me</a></p>
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
        <a href="images/post_2.jpg" className="item-wrap fancybox">
          <span className="icon-search2"></span>
          <img className="img-fluid" src="images/post_2.jpg"/>
        </a>
      </div>
      <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
        <a href="images/post_3.jpg" className="item-wrap fancybox">
          <span className="icon-search2"></span>
          <img className="img-fluid" src="images/post_3.jpg"/>
        </a>
      </div>

      <div className="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
        <a href="images/post_4.jpg" className="item-wrap fancybox">
          <span className="icon-search2"></span>
          <img className="img-fluid" src="images/post_4.jpg"/>
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
        <div className="form-group col-6">
          <input type="text" className="form-control" placeholder="First name" required/>
        </div>
        <div className="form-group col-6">
          <input type="text" className="form-control" placeholder="Last name" required required/>
        </div>
      </div>

      <div className="row mb-4">
        <div className="form-group col-12">
          <input type="email" className="form-control" placeholder="Email address" required/>
        </div>
      </div>


      <div className="row mb-4">
        <div className="form-group col-12">
          <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Type your message here.." required></textarea>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <input type="submit" className="btn btn-primary" value="Send Message" />
        </div>
      </div>
      
    </form>
  </div>
</section>

<footer className="site-section bg-light footer">
  <div className="container">

     
      
      <div className="col-md-3">
        <h3 className="footer-title">Follow Me</h3>
        <a href="#" className="social-circle"><span className="icon-twitter"></span></a>
        <a href="#" className="social-circle"><span className="icon-facebook"></span></a>
        <a href="#" className="social-circle"><span className="icon-instagram"></span></a>
        <a href="#" className="social-circle"><span className="icon-dribbble"></span></a>
        <a href="#" className="social-circle"><span className="icon-linkedin"></span></a>
      </div>
    </div>


 
</footer>

</div>
    </div>
  );
}

export default App;
