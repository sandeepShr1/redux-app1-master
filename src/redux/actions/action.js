import { ActionTypes } from '../constant/actionTypes';
import axios from 'axios';

const fetchProductStart = () => {
    return {
        type: ActionTypes.FETCH_DATA_START
    };
};

const fetchProductSuccess = (products) => {
    return {
        type: ActionTypes.FETCH_DATA_SUCCESS,
        payload: products
    };
};
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const fetchProductFailed = (error) => {
    return {
        type: ActionTypes.FETCH_DATA_FAILED,
        payload: error
    }
};

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchProductStart())
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const products = response.data
                dispatch(fetchProductSuccess(products))
            })
            .catch(error => {
                dispatch(fetchProductFailed(error.message))
            });
    };
};

export const filterByCategory = (products, category) => {
    return dispatch => {
        dispatch(fetchProductStart())
        dispatch({
            type: ActionTypes.FILTER_DATA_BY_CATEGORY,
            payload: {
                category: category,
                items:
                    category === ""
                        ? products
                        : products.filter((x) => x.category.indexOf(category) >= 0),
            },
        })

    }
}

export const filterByPrice = (products, sort) => {
    return dispatch => {
        dispatch(fetchProductStart());
        const sortedProducts = products.slice();
        if (sort === "latest") {
            sortedProducts.sort((a, b) => (a.id - b.id))
        }
        else {
            sortedProducts.sort((a, b) => sort === "lowest"
                ? a.price - b.price
                : b.price - a.price

            );
        }
        dispatch({
            type: ActionTypes.FILTER_DATA_BY_PRICE,
            payload: {
                sort: sort,
                items: sortedProducts,
            }
        })

    }
}