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
        payload : products
    };
};

export const fetchProductFailed =(error) => {
    return {
        type: ActionTypes.FETCH_DATA_FAILED,
        payload: error
    }
};

export const fetchData =() => {
    return dispatch => {
        dispatch(fetchProductStart())
        axios.get( 'https://fakestoreapi.com/products' )
            .then( response => {
                const products = response.data
                dispatch(fetchProductSuccess(products))
            } )
            .catch( error => {
                dispatch(fetchProductFailed(error.message))
            } );
    };
};