import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/blogCard';
import ProductCard from '../components/productCard';
import SpacialProduct from '../components/spacialProduct';
import BrandCrumb from '../components/brandCrumb';
import Meta from '../components/meta';
import Container from '../components/container';
import { services } from '../utils/data';

const Home = () => {
  return (
    <>
      <Meta title={"Get All Here"} />
      <BrandCrumb title="Wellcome to Get All Here" />
      <Container class1='home-wrapper-1 py-5' >
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERECHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From ₹9639.00/mo.<br /> with EMI, or ₹81900.00 </p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>BEST SALE.</h4>
                  <h5>Laptop Max..</h5>
                  <p>From ₹9539.00/mo. <br />with EMI, or ₹80900.00 </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>15% OFF.</h4>
                  <h5>Smartwatch 7.</h5>
                  <p>Shop the latest brand <br />style and colirs </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>NEW ARRIVEL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From ₹12000.00/mo.<br /> with EMI, or ₹81900.00 </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>FREE ENGAVING.</h4>
                  <h5>Airpods Max.</h5>
                  <p>High-fidelity playback & <br /> ulter-low distotion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='servies d-flex align-items-center justify-content-between'>
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt='services' />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  );
                })
              };
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-item-center'>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/camera.jpg' alt='camera-images' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/tv.jpg' alt='camera-images' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/headphone.jpg' alt='camera-images' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/speaker.jpg' alt='camera-images' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/camera.jpg' alt='camera-images' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/tv.jpg' alt='camera-images' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Headphone</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/headphone.jpg' alt='camera-images' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Item</p>
                </div>
                <img src='images/speaker.jpg' alt='camera-images' />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='featured-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1='famous-wrapper home-wrapper py-5'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card bg-dark position-relative'>
              <img className='img-fluid' src='images/watch-1.png' alt='watch' />
              <div className='famous-content position-absolute'>
                <h5>BIG SCRREN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From ₹3500/mo.for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img className='img-fluid align-items-center' style={{ marginLeft: "5%" }} src='images/laptop.jpg' alt='laptop' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>STUDIO DISPLAY</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img className='img-fluid align-items-center' style={{ marginLeft: "5%" }} src='images/tab1.jpg' alt='smartphone' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>SMARTPHONES</h5>
                <h6 className='text-dark'>Smartphone 14 pro</h6>
                <p className='text-dark'>Now in Green from ₹150000 or ₹2500/mo. for24mo.</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img className='img-fluid align-items-center' style={{ marginLeft: "5%" }} src='images/speaker.jpg' alt='speaker' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Home speaker</h5>
                <h6 className='text-dark'>Room-filling sound.</h6>
                <p className='text-dark'>from ₹70000 or ₹1500/mo.for 24mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='special-wrapper home-wrapper py-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Spacial Products</h3>
          </div>
        </div>
      </Container>
      <Container class1='popular-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
      <Container class1='marque-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt='brand-Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt='brand-Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt='brand-Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt='brand-Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt='brand-Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt='brand-Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt='brand-Logo' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt='brand-Logo' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Latest News Blogs</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div><div className='col-3'>
            <BlogCard />
          </div><div className='col-3'>
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home;
