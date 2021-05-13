import * as actionType from '../../Constants/actionType';

export default  (products = [] , action ) => {
    switch (action.type ) {
        case actionType.GET_PRODUCT:
            return action.payload

        default:
            return products;
    }
}