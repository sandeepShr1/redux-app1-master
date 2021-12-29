import { ActionTypes } from "../constant/actionTypes";
const initialState = {
    products: [],
    sort: "",
    category: "",
    items: [],
    loading: false,
    error: null
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_DATA_START:
            return { ...state, loading: true }

        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload, loading: false }

        case ActionTypes.FETCH_DATA_SUCCESS:
            return { ...state, items: payload, products: payload, loading: false }

        case ActionTypes.FETCH_DATA_FAILED:
            return { ...state, error: payload }

        case ActionTypes.FILTER_DATA_BY_CATEGORY:
            return { ...state, category: payload.category, products: payload.items, loading: false }

        case ActionTypes.FILTER_DATA_BY_PRICE:
            return { ...state, sort: payload.sort, products: payload.items, loading: false }

        default:
            return state;
    }
}