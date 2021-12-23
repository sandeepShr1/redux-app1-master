import { ActionTypes } from "../constant/actionTypes";
const initialState = {
    products: [],
    loading: false,
    error: null
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_DATA_START:
            return { ...state, loading: true }

        case ActionTypes.FETCH_DATA_SUCCESS:
            return { ...state, products: payload, loading: false }

        case ActionTypes.FETCH_DATA_FAILED:
            return { ...state, error: payload }

        default:
            return state;
    }
}