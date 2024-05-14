import React,{useState} from 'react'

export default function DtntUseState(){
  const [count, setCount]= useState(0);
  const [list,setlist]=useState([1,5]);
  const dtntHandleList =() => {
    let num = parseInt(Math.random()*100);
    setlist([
      ...list,
      num
    ])
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick ={() => setCount(count +1)}>
        Click me
      </button>  
      <hr/>
      <h3> List: {list.toString()} </h3>
      <button onClick ={dtntHandleList}>
          Thêm ngẫu nhiên
      </button>
  </div>
  )
}