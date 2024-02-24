import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import singleProductImg from '../images/singleProductBcg.jpeg'
import {ProductContext} from '../context/ProductContext'


function SingleProductPage() {
    
        const value = useContext(ProductContext);
        const { singleProduct, addToCart, loading } = value;
      
        return (
          <>
            <Hero img={singleProductImg} title="SINGLE PRODUCT"></Hero>
            {loading ? (
              <h1>Product Loading...</h1>
            ) : (
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <img src={singleProduct.image} alt="single Product" className="img-fluid" />
                    </div>
      
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <h5 className="text-title mb-4">Model: {singleProduct.title}</h5>
                      <h5 className="text-capitalize text-muted mb-4">Brand: {singleProduct.company}</h5>
                      <h5 className="text-main text-capitalize">Price: Rs.{singleProduct.price}</h5>
      
                      <p className="text-capitalize text-title mt-3">Some info about Product:</p>
                      <p>{singleProduct.description}</p>
      
                      <button
                        type="button"
                        className="main-link"
                        style={{ margin: '0.75rem' }}
                        onClick={() => addToCart(singleProduct.id)}
                      >
                        Add To Cart
                      </button>
      
                      <Link to="/products" className="main-link" style={{ margin: '0.75rem' }}>
                        Back to Products
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        );
}

export default SingleProductPage
