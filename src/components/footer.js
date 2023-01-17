import React from 'react'
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';
import Newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-item-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={Newsletter} alt='newsletter-icon' />
                <h2 className='mb-0 text-white'>Sign Up for newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group mb-3'>
                <input type="text" className="form-control py-1" placeholder="Put You Email Address.." aria-label="Put You Email Address.." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>Hno.318 Near Roharu Road,<br />Pilani,Rajasthan <br />
                  PinCode: 333031
                </address>
                <a className='text-white mt-4 d-block mb-1' href='tel:+91 00000 33333'>+91 00000 33333</a>
                <a className='text-white mt-4 d-block mb-1' href='mailto:lalitdhaiya123@gmail.com'>lalitdhaiya123@gmail.com</a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='https://www.linkedin.com/in/lalit-saini03/'><BsLinkedin /></a>
                  <a className='text-white' href='https://github.com/Lalit03-Saini'><BsGithub /></a>
                  <a className='text-white' href='https://www.instagram.com/r.lalit03/'><BsInstagram /></a>
                  <a className='text-white' href='https://www.youtube.com/'><BsYoutube /></a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to="/privacyPolicy">Privacy Policy</Link>
                <Link className='text-white py-2 mb-1' to="/refundPolicy">Refund Policy</Link>
                <Link className='text-white py-2 mb-1' to="/shippingPolicy">Shiping Policy</Link>
                <Link className='text-white py-2 mb-1' to="Term-condtion">Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1' to="blogs/:id">Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to="">About Us</Link>
                <Link className='text-white py-2 mb-1' to="">Faq</Link>
                <Link className='text-white py-2 mb-1' to="">Contact</Link>
                <Link className='text-white py-2 mb-1' to="">Watch</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1' to="">Laptop</Link>
                <Link className='text-white py-2 mb-1' to="">Headphone</Link>
                <Link className='text-white py-2 mb-1' to="">Smartphone</Link>
                <Link className='text-white py-2 mb-1' to="">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()},Powerd by Lalit (full Stack devloper)</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
