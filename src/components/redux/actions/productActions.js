import { GET_PRODUCT } from '../../Constants/actionType';
import * as api from '../../../API';

export const getAllProducts = () => async (dispatch) => { 
    try {
        const { data } = await api.getProducts();

        dispatch({ type: GET_PRODUCT, payload: data })
       
    } catch (error) {
        console.log('get error ==> ', error)
    }
}
