import React from 'react';
import { Link } from 'react-router-dom';
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';
import Custominput from '../components/customInput';

const Login = () => {
    return (
        <>
            <Meta title={"Login your Account"} />
            <BrandCrumb title="Login" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <Custominput type='email' name='email' placeholder='Email' />
                                <Custominput type='password' name='password' placeholder='Password' />
                                <div>
                                    <Link to='/forgotpassword'>Forgot Password?</Link>
                                </div>
                                <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                                    <button className='button border-0'>Login</button>
                                    <Link to='/signup' className='button signup'>SignUp</Link>
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
