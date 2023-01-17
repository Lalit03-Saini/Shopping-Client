import React from 'react'
import { Link } from 'react-router-dom';
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';
import Custominput from '../components/customInput';

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Get All Here"} />
      <BrandCrumb title="Create Your New Password" />
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Reset Your Password</h3>
              <p className='text-center mt-2 mb-3'>
                We will send you an email to reset your password.
              </p>
              <form action='' className='d-flex flex-column gap-15'>

                <Custominput type='email' name='email' placeholder='Email' />
                <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                  <button className='button border-0' type='submit'>Submit</button>
                </div>
                <div className='d-flex justify-content-center'><Link className='d-flex' to="/login">Cancel</Link></div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Forgotpassword;
