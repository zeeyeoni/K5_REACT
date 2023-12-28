import TailBlueButton from "../UI/TailBlueButton";
import TailSelect from "../UI/TailSelect";
import getxy from "./getxy.json";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Fcst() {
  const area = getxy.map(item => item['1단계']);
    console.log(area); 

  //상태변수
  const [tag, setTag] = useState('') ;
  const [dt, setDt] = useState('') ;
  const [sel, setSel] = useState('') ;
  
  //이동 객체 생성
  const navigate = useNavigate() ;

  const handleDt = (e) => {
    setDt(e.target.value.replaceAll('-','')) ;
  }
  const handleSelChange = (e) =>{
    setSel(e.target.value)
  }
 
  return (
   
      <div className="flex flex-col justify-top items-center w-full my-8">
        {/* <form name="kform" className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"> */}
          <div className='flex justify-center items-center mx-4'>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 
                                                        text-sm rounded-lg
                                                        focus:ring-blue-500 focus:border-blue-500 
                                                        block w-full ps-10 p-2.5"
                                                        placeholder="Select date" 
                                                        onChange={handleDt}/>
            </div>
          </div>
          <div className='flext justify-center items-end'>
            <TailSelect optionItem ={area}  handleChange={handleSelChange} />
          </div> 
          <div className='flext justify-center items-center'>
            <TailBlueButton caption={"초단기예보"} 
                        bcolor={"sky"} 
                        handleClick ={() => navigate(`/detail?gubun=${1}&dt=${dt}&area=${sel}`)} />
          </div>
          <div className='flext justify-center items-center'>
            <TailBlueButton caption={"단기예보"} 
                        bcolor={"sky"} 
                        handleClick ={() => navigate(`/detail?gubun=${2}&dt=${dt}&area=${sel}`)} />
          </div>
        {/* </form>  */}
      </div>
      
     

  )
}