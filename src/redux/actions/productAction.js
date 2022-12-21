import { ActionTypes } from '../constants/actionTypes';

export const sortLowToHigh = (products) => {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    return {
        type: ActionTypes.SORT_LOW_TO_HIGH,
        payload: products
    }
}

export const sortHighToLow = (products) => {
    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    return {
        type: ActionTypes.SORT_HIGH_TO_LOW,
        payload: products
    }
}

export const filterPrice = (products, range) => {
    var filteredProducts = products.filter((product) => {
        if (range.max !== null) {
            return product.price > range.min && product.price < range.max
        } else {
            return product.price > range.min
        }
    });
    return {
        type: ActionTypes.FILTER_PRICE,
        payload: filteredProducts
    }
}

export const availability = (products, availability) => {
    var filteredProducts = products.filter((product) => {
        return product.availability === availability
    });
    return {
        type: ActionTypes.FILTER_PRICE,
        payload: filteredProducts
    }
}

export const getProducts = (products) => {
    return {
        type: ActionTypes.GET_PRODUCTS,
        payload: products
    }
}