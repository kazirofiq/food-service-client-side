import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<footer className="footer p-10 bg-slate-900 text-white">
  <div>
  <Link><img className='w-100 h-12' src="https://i.ibb.co/LSHpYD1/logo.png" alt="" /></Link>
  <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
  <span className="footer-title">Services</span> 
  <Link className="link link-hover">Branding</Link> 
  <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
    </div> 
    <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
    </div> 
    <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
    </div>
  </footer>
    );
};

export default Footer;