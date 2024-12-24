'use client'
import React from 'react';
import { Provider } from 'react-redux'

import store from '../store'

import RouterProvider from "./RouterProvider"
export default function Providers() {
  return (
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  )
} 