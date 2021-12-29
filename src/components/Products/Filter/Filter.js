import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategory, filterByPrice } from '../../../redux/actions/action';
import './Filter.css'

const Filter = () => {
    const products = useSelector(state => state.data.items);
    const category = useSelector(state => state.data.category);
    const sort = useSelector(state => state.data.sort);
    const filterProducts = useSelector(state => state.data.products);
    const dispatch = useDispatch();
    return (
        <div className='filter'>
            <div className="filter-result">
                {filterProducts.length} Products
            </div>
            <div className='filter-sort' >
                Order{" "}
                <select
                    value={sort}
                    onChange={(e) =>
                        dispatch(filterByPrice(
                            filterProducts,
                            e.target.value
                        ))
                    }
                >
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>


            <div className="filter-size">
                Filter{" "}
                <select
                    value={category}
                    onChange={(e) =>
                        dispatch(filterByCategory(products, e.target.value))}>
                    <option value="">ALL</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="jewelery">Jewelry</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
