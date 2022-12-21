import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPrice, sortHighToLow, sortLowToHigh, availability } from '../../redux/actions/productAction';
import data from '../../data.json';
import './Filters.scss';

const Filters = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.allProducts.products);
  const priceRange = [
    {
      displayName: '$0 - $25',
      min: 0,
      max: 25
    },
    {
      displayName: '$25 - $50',
      min: 25,
      max: 50
    },
    {
      displayName: '$50 - $100',
      min: 50,
      max: 100
    },
    {
      displayName: '$100 - $150',
      min: 100,
      max: 150
    },
    {
      displayName: '$150 - $300',
      min: 150,
      max: 300
    },
    {
      displayName: '$300+',
      min: 300,
      max: null
    }
  ];
  return (
    <div className="filters mb-4">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Sort By
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sort" id="flexRadioDefault1" onClick={() => dispatch(sortHighToLow(productData))} />
                <label className="form-check-label" for="flexRadioDefault1">
                  Price High To Low
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sort" id="flexRadioDefault2" onClick={() => dispatch(sortLowToHigh(productData))} />
                <label className="form-check-label" for="flexRadioDefault2">
                  Price Low To High
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Price
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {priceRange.map((range, index) => {
                return (
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="sort" id={"priceRange_" + index} onClick={() => dispatch(filterPrice(data, range))} />
                    <label className="form-check-label" for={"priceRange_" + index}>
                      {range.displayName}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Availibility
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="form-check">
                <input className="form-check-input" type="radio" id="availibility1" name="availability" onClick={() => dispatch(availability(data, 'InStock'))} />
                <label className="form-check-label" for="availibility1">
                  In Stock
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="availability" id="availibility2" onClick={() => dispatch(availability(data, 'OutOfStock'))} />
                <label className="form-check-label" for="availibility2">
                  Out of Stock
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
