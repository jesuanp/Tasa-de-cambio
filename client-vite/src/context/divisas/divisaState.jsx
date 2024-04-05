import React, {useReducer, useCallback} from "react";

import divisaContext from "./divisaContext";
import divisaReducer from "./divisaReducer";

import clienteAxios from "../../config/axios";

import {
    ABBREVIATION_COINS,
    GET_CHANGE,
    GET_HISTORICAL,
} from '../../types';

const DivisaState = (props) => {

    const initialState = {
        abbreviation: null,
        coinchange: 0,
    };

    const [state, dispatch] = useReducer(divisaReducer, initialState);

    const getAbbreviatioCoins = useCallback(async () => {
        
        const response = await clienteAxios('/api/abbreviationCoins');

        dispatch({
            type: ABBREVIATION_COINS,
            payload: response.data
        })
    }, [10]);

    const getChange = async (coin, amount, currencyToDollar) => {

        const response = await clienteAxios(`/api/getChange/${coin}/${amount}?currencyToDollar=${currencyToDollar}`);

        dispatch({
            type: GET_CHANGE,
            payload: response.data
        })
    };

    const getHistorical = async (coin, amount, date, currencyToDollar) => {

        const response = await clienteAxios(`/api/historical/${coin}/${amount}/${date}?currencyToDollar=${currencyToDollar}`);

        dispatch({
            type: GET_HISTORICAL,
            payload: response.data
        })
    }

    return (
        <divisaContext.Provider
            value = {{
                abbreviation: state.abbreviation,
                getAbbreviatioCoins,

                coinchange: state.coinchange,
                getChange,
                getHistorical,
            }}
        >
            {props.children}
        </divisaContext.Provider>
    )

}

export default DivisaState;
