import React from 'react'
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BsInfoLg } from 'react-icons/bs'
import Container from '../components/container';

const Contact = () => {
  return (
    <>
      <Meta title={"Get All Here Contact Us"} />
      <BrandCrumb title="How,May help you" />
      <Container class1='contact-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.3918499457318!2d75.61093815811167!3d28.36538834563108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391319571d6f822d%3A0x9b292d28a0d269de!2sChoudhary%20Colony%2C%20Nayako%20Ka%20Mohalla%2C%20Pilani%2C%20Rajasthan%20333031!5e0!3m2!1sen!2sin!4v1672918788047!5m2!1sen!2sin" className='border-0 w-100' style={{ height: "500px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div className=''>
                <h3 className='contact-title mb-4'>Contact Us</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className='form-control' placeholder='Name*' />
                  </div>
                  <div>
                    <input type="email" className='form-control' placeholder='Email*' />
                  </div>
                  <div>
                    <input type="tel" className='form-control' placeholder='Contact Number*' />
                  </div>
                  <div>
                    <textarea type="text" cols="30" rows="4" className='form-control w-100' placeholder='Comments*'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5' />
                      <address className='mb-0'>House no. 29,Behind Water Work,Pilani,Rajasthan</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5' />
                      <a href='tel: +91 7877097203'>+91 7877097203</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5' />
                      <a href='mailto:lalitdaiya54@gmail.com'>lalitdaiya54@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BsInfoLg className='fs-5' />
                      <p className='mb-0'>Monday - friday 10AM - 6PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact;


