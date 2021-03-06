import React from 'react'
import createTokensProvider from './tokensProvider'
import createLinearProvider from './linearProvider'
import createStateProvider from './stateProvider'

export const createTokensContext = (url) => {
    const context = React.createContext()

    return {
        tokensContext: context,
        TokensProvider: createTokensProvider(url, context)
    }
}

export const createLinearContext = (url, stateClass) => {
    const context = React.createContext()

    return {
        linearContext: context,
        LinearProvider: createLinearProvider(url, stateClass, context)
    }
}

export const createStateContext = (url, stateClass) => {
    const context = React.createContext()

    return {
        stateContext: context,
        StateProvider: createStateProvider(url, stateClass, context)
    }
}