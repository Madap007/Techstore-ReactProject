import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {FaSearch,FaCartPlus} from 'react-icons/fa'
import {ProductContext} from '../context/ProductContext'
import './Product.css'

function Product({ product }) {
  const value = useContext(ProductContext);
  const { addToCart, setSingleProduct } = value;

  const handleAddToCart = (productId) => {
    console.log('Adding to cart:', productId);
    addToCart(productId);
  };

  const handleSetSingleProduct = (productId) => {
    console.log('Setting single:', productId);
    setSingleProduct(productId);
  };

  return (
    <div className="product-wrapper col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img
            src={product.image}
            alt="Pro"
            className="card-img-top p-5"
            style={{ height: '320px' }}
          />

          <div className="product-icons">
            <Link
              to={`/products/${product.id}`}
              onClick={() => handleSetSingleProduct(product.id)}
            >
              <FaSearch className="icon"></FaSearch>
            </Link>
            <FaCartPlus
              className="icon"
              onClick={() => handleAddToCart(product.id)}
            ></FaCartPlus>
          </div>
        </div>

        <div className="card-body d-flex justify-content-between">
          <p className="mb-0">{product.title}</p>
          <p className="mb-0 text-main">Rs.{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;