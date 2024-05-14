import React from 'react'
import DtntUseState from './components/DtntUseState'
import DtntUseEffect from './components/DtntUseEffect'
import DtntUseContext from './components/DtntUseContext'
import './App.css'

export default function App(){
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Đào Ngọc Thắm</h1>
        <hr/>
        <DtntUseState/>
        <hr/>
        <DtntUseEffect/>
        <hr/>
        <DtntUseContext/>
    </div>
  )
}