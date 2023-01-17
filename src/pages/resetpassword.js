import React from 'react'
import { Link } from 'react-router-dom'
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';
import Custominput from '../components/customInput';

const Resetpassword = () => {
    return (
        <>
            <Meta title={"Get All Here"} />
            <BrandCrumb title="Reset Password" />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <Custominput type='password' name='password' placeholder='Password' />
                                <Custominput type='text' name='confpassowrd' placeholder='Confirm Password' />
                                <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                                    <button className='button border-0' type='submit'>Reset</button>
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

export default Resetpassword;
