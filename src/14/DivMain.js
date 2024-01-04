import { useEffect, useState } from "react"
import Div1 from "./Div1";

export default function DivMain() {

    const [n, setN] = useState(0);

    const [n2, setN2] = useState(0);

    useEffect (()=>{
      setN2(n*2);
    },[n])
    
  return (
    <div className='w-full h-full flex justify-center items-center bg-lime-100'>
        <div className='w-5/6 h-5/6 rounded-xl p-10 flex flex-col justify-center items-center bg-purple-100'>
            <div className='text-xl text-gray-700'>DivMain n = {n}, n2 = {n2}</div>       
            {/* 내가 만든 컴포넌트에 속성값을 넣어서 전달하는 것 */}
            <Div1 n={n} setN={setN}/>
        </div>
    </div>
  )
}
