import React, { useContext } from 'react'
import { ThemeContext } from './DtntUseContext'

export default function DtntUseContext2(){
  const theme=useContext(ThemeContext);
  return(
    <div className={theme = 'm-3'}>
      <h2>DtntUseContext2</h2>
      <p>
        <b>2210900124</b>
        <b>Đào Ngọc Thắm</b>
        <i> K22CNT2 </i>
      </p>
    </div>
  )
}