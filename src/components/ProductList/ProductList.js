import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Filters from '../Filters/Filters';
import './ProductList.scss';
const ProductList = () => {
  const updatedProducts = useSelector((state) => state.allProducts);
  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = updatedProducts.products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(updatedProducts.products.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % updatedProducts.products.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="row">
        <div className='col-md-3'>
          <Filters />
        </div>
        <div className='col-md-9'>
          <div className='row'>
            {currentItems.map((item) => {
              return (
                <div className="col-md-4 col-6 mb-4">
                  <Link to={`/product/${item.sku}`} class="productTile">
                    <div className="bbb_deals">
                      <div className="bbb_deals_slider_container">
                        <div className="bbb_deals_item">
                          <div className="bbb_deals_image">
                            <img src={item.images[0]} alt="" />
                          </div>
                          <div className="bbb_deals_content">
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                              <div className="bbb_deals_item_category"><a href="#">{item.category}</a></div>
                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start mb-3">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tileBottom">
                        <div className="bbb_deals_info_line">
                          <div className="bbb_deals_item_name">{item.item}</div>
                          <div className="bbb_deals_item_price ml-auto">${item.price}</div>
                        </div>
                        <div className="available_line">
                          <div className="available_title">{item.availability}</div>
                          <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
            <div className='pagination-wrap'>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ProductList;
