export  default (state, action) => {
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transacation:state.transacation.filter(transacation => transacation.id !==
                    action.payload)
                }
                break;
        default:
            return state;
    }

}
