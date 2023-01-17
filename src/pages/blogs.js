import React from 'react'
import Meta from '../components/meta';
import BrandCrumb from '../components/brandCrumb';
import BlogCard from "../components/blogCard";
import Container from '../components/container';

const Blogs = () => {
    return (
        <>
            <Meta title={"Blogs"} />
            <BrandCrumb title="Blogs" />
            <Container class1='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>find By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Home</li>
                                    <li>Our Store</li>
                                    <li>Blogs</li>
                                    <li>content</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blogs;
