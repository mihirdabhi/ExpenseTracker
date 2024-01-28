import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//Initial sate;
const intialState = {
    transaction: [
        { id: 1, text: 'Flower', amount:-20 },
        { id: 2, text: 'Salary', amount:320 },
        { id: 3, text: 'Book', amount:-20 },
        { id: 4, text: 'Camera', amount:150 },
    ],
};

// Create context
export const GlobalContext = createContext(intialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AppReducer, intialState);

//Actions 
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}


    return(
        <GlobalContext.Provider value={{transaction:state.transaction, 
        deleteTransaction,addTransaction}}>
            {
                children
            }
        </GlobalContext.Provider>
    );
}