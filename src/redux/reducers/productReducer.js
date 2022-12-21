import { ActionTypes } from '../constants/actionTypes';
import data from '../../data.json';

const initialState = {
    products: data
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        case ActionTypes.SORT_LOW_TO_HIGH:
            return {
                ...state,
                products: payload
            };
        case ActionTypes.SORT_HIGH_TO_LOW:
            return {
                ...state,
                products: payload
            };
        case ActionTypes.FILTER_PRICE:
            return {
                ...state,
                products: payload
            };
        case ActionTypes.FILTER_AVAILABILITY:
            return {
                ...state,
                products:payload
            }
        default:
            return state;
    }
}