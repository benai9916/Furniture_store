import { CATALOG } from '../../Constants/actionType';

export const updateCatalog = (data) => (dispatch) => { 
    try {
        dispatch({ type: CATALOG, payload: data })
       
    } catch (error) {
        console.log('get error ==> ', error)
    }
}