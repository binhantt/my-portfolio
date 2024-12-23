'use client'
import React from 'react';
 import { Provider } from 'react-redux'
//  import dynamic from 'next/dynamic'
 import store from '../store'
// import { ThemeProvider, createTheme } from '@mui/material/styles'
// import CssBaseline from '@mui/material/CssBaseline'

// const RouterProvider = dynamic(
//   () => import('./RouterProvider').then(mod => mod.RouterProvider),
//   { ssr: false }
// )
import RouterProvider from "./RouterProvider"
export default function Providers({ children }) {
  return (
       <Provider store={store}>
        <RouterProvider />
        {children}  
     </Provider>
  )
} 