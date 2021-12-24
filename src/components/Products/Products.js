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
        <section>
            {products.map((product) => {
                return <div key={product.id}>
                    <p>{product.title}</p>
                </div>
            })}
        </section>
    )
}

export default Products;
