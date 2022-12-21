import React from 'react';
import './ProductDetail.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { productId } = useParams();
  const updatedProducts = useSelector((state) => state.allProducts);
  const productObject = updatedProducts.products.find((item) => {
    return item.sku == productId;
  });
  return (
    <div className="card border-0">
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-6 d-none d-md-block">
            <div className="row">
              {productObject.images.map((item) => {
                return (
                  <div className="col-md-6 mb-4">
                    <img src={item} />
                  </div>)
              })}
            </div>
          </div>
          <div className="details col-md-6">
            <h3 className="product-title mb-3">{productObject.title}</h3>
            <div className="preview col-md-6 d-block d-md-none mb-3">
            <div className="row">
            <img src={productObject.images[0]} />
            </div>
          </div>
            <div className="rating mb-3">
              <span className="review-no">{productObject.reviews_count} reviews</span>
            </div>
            <p><b>Average Rating:</b> {productObject.average_rating.toFixed(2)}</p>
            <p className="product-description mb-3">{productObject.description}</p>
            <h4 className="price mb-3">current price: <span>${productObject.price}</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
