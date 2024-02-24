import React from 'react'
import {ProductContext} from '../../context/ProductContext'
import { useContext } from 'react'
import './ProductFilter.css';

function ProductFilter() {
  const { search, company, handleChange, storeProducts } = useContext(ProductContext);

  let companies = new Set();
  companies.add('all');
  for (let product in storeProducts) {
    companies.add(storeProducts[product]['company']);
  }

  companies = [...companies];

  return (
    <div className="row my-5">
      <div className="col-10 mx-auto">
        <div className="filter-wrapper">
          {/* text search */}
          <div>
            <label htmlFor="search">Search Products</label>
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleChange}
              value={search}
              className="filter-item"
            />
          </div>

          {/* category search */}
          <div>
            <label htmlFor="company">Company</label>
            <select
              name="company"
              id="company"
              className="filter-item"
              onChange={handleChange}
              value={company}
            >
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          {/* end of category search */}

          {/* Other filter options can be added here */}
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;