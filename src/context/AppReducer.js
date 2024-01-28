export default (state, action) => {
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transacation.filter(transaction => transaction.id !==
                    action.payload)
                };
        default:
            return state;
    }

};
