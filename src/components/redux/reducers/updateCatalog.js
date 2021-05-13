import * as actionType from '../../Constants/actionType';

export default  (catalog = [] , action ) => {
    switch (action.type ) {
        case actionType.CATALOG:
            return action.payload

        default:
            return catalog;
    }
}