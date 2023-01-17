import React from 'react'
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';

const Wishlist = () => {
    return (
        <>
            <Meta title={"Get All Here"} />
            <BrandCrumb title="Check Your Wishlist." />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='cross' />
                            <div className='wishlist-card-image'>
                                <img className='img-fluid w-100' src='images/watch.jpg' alt='watch' />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title mb-3'>Watch </h5>
                                <h6 className='price mb-3 mt-4'>₹3,990</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='cross' />
                            <div className='wishlist-card-image'>
                                <img className='img-fluid w-100' src='images/watch.jpg' alt='watch' />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title mb-3'>Watch </h5>
                                <h6 className='price mb-3 mt-4'>₹3,990</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='cross' />
                            <div className='wishlist-card-image'>
                                <img className='img-fluid w-100' src='images/watch.jpg' alt='watch' />
                            </div>
                            <div className='py-3 px-3'>
                                <h5 className='title mb-3'>Watch </h5>
                                <h6 className='price mb-3 mt-4'>₹3,990</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Wishlist;
