import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import BrandCrumb from '../components/brandCrumb';
import Color from '../components/color';
import Meta from '../components/meta';
import ProductCard from "../components/productCard";
import Container from '../components/container';

const OurStore = () => {
    const [grid, setgrid] = useState(4);
    return (
        <>
            <Meta title={"Our Store"} />
            <BrandCrumb title="Our Store" />
            <Container class1='store-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Laptop</li>
                                    <li>Smartphone</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By </h3>
                            <div>
                                <h5 className='sub-title'>Availablity</h5>
                                <div className='form-check mb-3'>
                                    <input className='form-check-input' type="checkbox" value="" id='' />
                                    <label className='form-check-label' htmlFor="">In Stock (150)</label>
                                </div>
                                <div className='form-check mb-3'>
                                    <input className='form-check-input' type="checkbox" value="" id='' />
                                    <label className='form-check-label' htmlFor="">Out Stock (0)</label>
                                </div>
                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='form-floating'>
                                        <input type="email" className="form-control" id='floatingInput' placeholder="From" />
                                        <label htmlFor='floatingInput'>From</label>
                                    </div>
                                    <div className='form-floating'>
                                        <input type="email" className="form-control" id='floatingInput1' placeholder="To" />
                                        <label htmlFor='floatingInput'>To</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Colour</h5>
                                <div>
                                    <Color />
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div>
                                    <div className='form-check mb-3'>
                                        <input className='form-check-input' type="checkbox" value="" id='color-1' />
                                        <label className='form-check-label' htmlFor="color-1">S(5)</label>
                                    </div>
                                    <div className='form-check mb-3'>
                                        <input className='form-check-input' type="checkbox" value="" id='color-2' />
                                        <label className='form-check-label' htmlFor="color-2">M(2)</label>
                                    </div>
                                    <div className='form-check mb-3'>
                                        <input className='form-check-input' type="checkbox" value="" id='color-2' />
                                        <label className='form-check-label' htmlFor="color-2">X(20)</label>
                                    </div>
                                    <div className='form-check mb-3'>
                                        <input className='form-check-input' type="checkbox" value="" id='color-2' />
                                        <label className='form-check-label' htmlFor="color-2">XX(15)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className='bedge bg-light text-secondary rounded-3 py-2 px-2'>Headphone</span>
                                <span className='bedge bg-light text-secondary rounded-3 py-2 px-2'>Smartphone</span>
                                <span className='bedge bg-light text-secondary rounded-3 py-2 px-2'>Laptop</span>
                                <span className='bedge bg-light text-secondary rounded-3 py-2 px-2'>Tv</span>
                                <span className='bedge bg-light text-secondary rounded-3 py-2 px-2'>Home Product</span>
                                <span className='bedge bg-light text-secondary rounded-3 py-2 px-2'>Car Part</span>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Random Product</h3>
                            <div className='random-products d-flex'>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' className="img-fluid" alt='watch' />
                                </div>
                                <div className='w-50'>
                                    <h5>Samsung galaxy active 2 watch</h5>
                                    <Rating
                                        initialValue={4}
                                        allowFraction={true}
                                        allowHover={false}
                                        size={15}
                                    />
                                    <b className='d-block'>₹ 4,000</b>
                                </div>
                            </div>
                            <div className='random-products d-flex border-bottom-0'>
                                <div className='w-50'>
                                    <img src='images/watch.jpg' className="img-fluid" alt='watch' />
                                </div>
                                <div className='w-50'>
                                    <h5>Samsung galaxy active 2 watch</h5>
                                    <Rating
                                        initialValue={4}
                                        allowFraction={true}
                                        allowHover={false}
                                        size={15}
                                    />
                                    <b className='d-block'>₹ 4,000</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex  align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                                    <select className='form-control form-select' id='' name=''>
                                        <option value="DEFAULT" select="selected">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-ascending">Alphabetically, Z-A</option>
                                        <option value="title-ascending">Price,low-high</option>
                                        <option value="title-ascending">Price.High-low</option>
                                        <option value="title-ascending">Date,Old-New</option>
                                        <option value="title-ascending">Date,New-Old</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>21 Products</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={() => { setgrid(3) }} className='d-block img-fluid' src='images/gr4.svg' alt='grid' />
                                        <img onClick={() => { setgrid(4) }} className='d-block img-fluid' src='images/gr3.svg' alt='grid' />
                                        <img onClick={() => { setgrid(6) }} className='d-block img-fluid' src='images/gr2.svg' alt='grid' />
                                        <img onClick={() => { setgrid(12) }} className='d-block img-fluid' src='images/gr.svg' alt='grid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurStore;
