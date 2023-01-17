import React from 'react'
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';
import Custominput from '../components/customInput';

const Login = () => {
    return (
        <>
            <Meta title={"Get All Here"} />
            <BrandCrumb title="Create Your New Account" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <Custominput type='text' name='name' placeholder='Name'/> 
                                <Custominput type='email' name='email' placeholder='Email'/> 
                                <Custominput className='mt-1' type='tel' name='mobile' placeholder='Contact Number'/> 
                                <Custominput className='mt-1' type='password' name='password' placeholder='Password'/> 
                                <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                                    <button className='button border-0'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login;
