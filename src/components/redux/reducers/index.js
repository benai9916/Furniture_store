import { combineReducers } from 'redux';
import products from './productsReducer';
import catalog from './updateCatalog'

export default combineReducers({
    products,
    catalog,
}) 