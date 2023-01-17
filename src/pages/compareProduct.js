import React from 'react'
import Color from '../components/color';
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';

const CompareProduct = () => {
    return (
        <>
            <Meta title={"Get All Here"} />
            <BrandCrumb title="Compare your favorite Product" />
            <Container class1='compare-product-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' className='position-absolute cross img-fluid' alt='crpss' />
                            <div className='product-card-image'>
                                <img src='images/tab.jpg' className='img-fluid' alt='tab' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title mb-3'>Honor T1 6GB RAM 32GB ROM 7 inch with wi-fi6+ 5G Tablet </h5>
                                <h6 className='price mb-3 mt-4'>₹28,990</h6>
                            </div>
                            <div className='product-detail'>
                                <h5>brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Smartphone</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availablity:</h5>
                                <p>Out of Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Color:</h5>
                                < Color />
                            </div>
                            <div className='product-detail'>
                                <h5>Size:</h5>
                                <div className='d-flex gap-10'>
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' className='position-absolute cross img-fluid' alt='crpss' />
                            <div className='product-card-image'>
                                <img src='images/tab.jpg' className='img-fluid' alt='tab' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title mb-3'>Honor T1 6GB RAM 32GB ROM 7 inch with wi-fi6+ 5G Tablet </h5>
                                <h6 className='price mb-3 mt-4'>₹28,990</h6>
                            </div>
                            <div className='product-detail'>
                                <h5>brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Smartphone</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availablity:</h5>
                                <p>Out of Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Color:</h5>
                                < Color />
                            </div>
                            <div className='product-detail'>
                                <h5>Size:</h5>
                                <div className='d-flex gap-10'>
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' className='position-absolute cross img-fluid' alt='crpss' />
                            <div className='product-card-image'>
                                <img src='images/tab.jpg' className='img-fluid' alt='tab' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title mb-3'>Honor T1 6GB RAM 32GB ROM 7 inch with wi-fi6+ 5G Tablet </h5>
                                <h6 className='price mb-3 mt-4'>₹28,990</h6>
                            </div>
                            <div className='product-detail'>
                                <h5>brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Smartphone</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availablity:</h5>
                                <p>Out of Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Color:</h5>
                                < Color />
                            </div>
                            <div className='product-detail'>
                                <h5>Size:</h5>
                                <div className='d-flex gap-10'>
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' className='position-absolute cross img-fluid' alt='crpss' />
                            <div className='product-card-image'>
                                <img src='images/tab.jpg' className='img-fluid' alt='tab' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title mb-3'>Honor T1 6GB RAM 32GB ROM 7 inch with wi-fi6+ 5G Tablet </h5>
                                <h6 className='price mb-3 mt-4'>₹28,990</h6>
                            </div>
                            <div className='product-detail'>
                                <h5>brand:</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Type:</h5>
                                <p>Smartphone</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Availablity:</h5>
                                <p>Out of Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5>Color:</h5>
                                < Color />
                            </div>
                            <div className='product-detail'>
                                <h5>Size:</h5>
                                <div className='d-flex gap-10'>
                                    <p>S</p>
                                    <p>M</p>
                                    <p>L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CompareProduct
