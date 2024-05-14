import React,{createContext, useContext, useState} from 'react'
import DtntUseContext2 from './DtntUseContext2';
import DtntUseContext1 from './DtntUseContext1';
export const ThemeContext = createContext();

export default function DtntUseContext(){
  const [theme,setTheme]= useState('red');
  const dtntHandleChange =(toggle)=>{
    setTheme(theme==='red'?'blue':'blue')
  }
  return(
    <ThemeContext.Provider value ={theme}>
    <div className='alert'>
      <h2> Demo useContext</h2>
      <DtntUseContext1/>
      <button onClick={dtntHandleChange}>Change bgColor</button>
    </div>
    </ThemeContext.Provider>
  )

}