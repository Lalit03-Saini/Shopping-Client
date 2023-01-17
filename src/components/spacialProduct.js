import React from 'react'
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

const SpacialProduct = () => {
    return (
        <div className='col-6 mb-3'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>SamSung</h5>
                        <h6 className='title'>
                            Samsung Galaxy Note10+ Mobile Phone; Sim
                        </h6>
                        <Rating
                            initialValue={4}
                            allowFraction={true}
                            allowHover={false}
                            size={25}
                        />
                        <p className='price'><span className='red-p'>₹70,000 </span>&nbsp;<small>M.R.P:<strike>90,000</strike></small></p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'><b>7</b>Days</p>
                            <div className='d-flex align-items-center gap-10'>
                                <span className='badge rounded-circle p-3 bg-danger'>20</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>0</span>
                            </div>
                        </div>
                        <div className='prod-count my-3'>
                            <p>Products: 120 left</p>
                            <div className='progress'>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25"
                                    aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <Link className='button'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpacialProduct;
