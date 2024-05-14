import React,{ useEffect, useState} from 'react'

export default function DtntUseEffect(){
  const [count, setCount] = useState(0);
  const dtntHandleClick = ()=>{
    setCount(prev => prev +1)
  }
    useEffect(()=>{
      document.title =`Đào Ngọc Thắm You clicked ${count} times`
      console.log(`You clicked ${count} times`);
    });
    useEffect (()=>{
      console.log(`Chạy lần đầu tiên - Một lần`)
    },[count]);
    useEffect (()=>{
      console.log(`useEffect count click: {count}`);
    })
  return(
    <div>
      <h2>Demo - useEffect: You clicked {count} times </h2>
      <button onClick={dtntHandleClick}>
        Click here
      </button>
    </div>
  )
}