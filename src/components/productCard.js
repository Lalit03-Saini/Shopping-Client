import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.png";
import addcard from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/ourStore" ? `gr-${grid}` : "col-3"}`}>
                <Link to='/product/:id'className='product-card position-relative mb-5'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'><img src={wish} alt='wishlist' /></button>
                    </div>
                    <div className='product-image'>
                        <img src={watch} className='img-fluid' alt='product image' />
                        <img src={watch2} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Kids headphone bulk 10  <br />
                            pack muilt colored fro student
                        </h5>
                        <Rating
                            initialValue={2.5}
                            allowFraction={true}
                            allowHover={false}
                            size={20}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Express yourself with a watch face that fits your look and mood. When you snap a picture of your outfit for the day Galaxy Watch Active2 will put together a watch face to match.
                        </p>
                        <p className='price'>₹18,990</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'><img src={view} alt='view' /></button>
                            <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare' /></button>
                            <button className='border-0 bg-transparent'><img src={addcard} alt='addcard' /></button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/ourStore" ? `gr-${grid}` : "col-3"}`}>
                <Link  to='/product/:id' className='product-card position-relative mb-5'>
                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'><img src={wish} alt='wishlist' /></button>
                    </div>
                    <div className='product-image'>
                        <img src={watch} className='img-fluid' alt='product image' />
                        <img src={watch2} className='img-fluid' alt='product image' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Kids headphone bulk 10  <br />
                            pack muilt colored fro student
                        </h5>
                        <Rating
                            initialValue={2.5}
                            allowFraction={true}
                            allowHover={false}
                            size={20}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Express yourself with a watch face that fits your look and mood. When you snap a picture of your outfit for the day Galaxy Watch Active2 will put together a watch face to match.
                        </p>
                        <p className='price'>₹18,990</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'><img src={view} alt='view' /></button>
                            <button className='border-0 bg-transparent'><img src={prodcompare} alt='compare' /></button>
                            <button><img src={addcard} alt='addcard' /></button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard
