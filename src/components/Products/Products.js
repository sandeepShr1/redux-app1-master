import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions/action';

const Products = () => {
    const products = useSelector(state => state.data.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="product">
        <h3>Products</h3>
        <section className='grid'>
            {products.map((product) => {
                return <div className='items' key={product.id}>
                    <div className="title">{product.title}</div>
                    <div className="img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="details">
                        <h4>Rs. {product.price}</h4>
                        <h5>Category: {product.category}</h5>
                    </div>
                    <div className="button">
                        <button className='cart-btn' >Add to cart</button>
                    </div>

                </div>
            })}
        </section>
        </div>
    )
}

export default Products;
