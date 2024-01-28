export default (state, action) => {
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transacations.filter(transaction => transaction.id !==
                    action.payload)
                };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.payload,...state.transacations]
            };
        default:
            return state;
    }
}
