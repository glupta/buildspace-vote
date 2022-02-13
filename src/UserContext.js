import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

const reducer = (state, pair) => ({ ...state, ...pair })

const initialState = {
	address: null,
    allUri: [],
    loadingNft: true,
};

export function UserProvider(props) {
	const [state, update] = useReducer(reducer, initialState)

	return (
		<UserContext.Provider value={{ state, update }}>
			{props.children}
		</UserContext.Provider>
	)
}