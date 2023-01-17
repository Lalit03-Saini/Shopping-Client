import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import Compareicon from "../images/compare.svg";
import Wishlist from "../images/wishlist.svg";
import Usericon from "../images/user.svg";
import Cart from "../images/cart.svg";
import Menuicon from "../images/menu.svg";

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping with delivery over &#8377; 500</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>hotline:<a className='text-white' href='tel:+91 00000 33333'>+91 00000 33333</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-item-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>Get All Here</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className='input-group mb-3'>
                <input type="text" className="form-control" placeholder="Search for product..." aria-label="Search for product..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to="/compareproduct" className='d-flex align-item-center gap-10 text-white'>
                    <img src={Compareicon} className='Compareicon' alt='compare-icon' />
                    <p className='mb-0'>compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className='d-flex align-item-center gap-10 text-white'>
                    <img src={Wishlist} className='Wishicon' alt='wishlist-icon' />
                    <p className='mb-0'>Favourite <br /> wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className='d-flex align-item-center gap-10 text-white'>
                    <img src={Usericon} className='Usericon' alt='user-icon' />
                    <p className='mb-0'>Login <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to="cart" className='d-flex align-item-center gap-10 text-white'>
                    <img src={Cart} className='Cart' alt='Cart_icon' />
                    <div className='d-flex flex-column gap-10'><span className='badge bg-white text-dark'>0</span><p className='mb-0'>&#8377; 5000</p></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bttom d-flex align-item-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-item-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={Menuicon} alt='menu-icon' /><span className=' me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="">Action </Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-item-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/ourStore">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
