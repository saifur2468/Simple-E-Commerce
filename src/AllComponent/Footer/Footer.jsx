import React from 'react';

const Footer = () => {
    return (
        <div>
             <footer className="footer sm:footer-horizontal  bg-slate-100 mt-10 p-10 m-auto ml-5">
             
           
            
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product And Support</a>
    <a className="link link-hover">Order And Tracking </a>
    <a className="link link-hover">Shipping and Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;