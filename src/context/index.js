import React from 'react';
import { themes } from '../utils';


export const ThemeContext = React.createContext({
    name: themes.default,
    setTheme: () => null
});

export const AuthContext = React.createContext({
    user: {},
    setAuth: () => null
})

export const AlertContext = React.createContext({
    open: false,
    type: '',
    msg: '',
    vertical: 'top',
    horizontal: 'center',
    onclose: () => null,
    setSnack: () => null
})