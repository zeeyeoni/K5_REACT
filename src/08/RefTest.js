import { useState, useRef } from "react";
import TailBlueButton from "../UI/TailBlueButton";
import TailH1 from "../UI/TailH1";
import TailInputNum from "../UI/TailInputNum";

export default function RefTest() {
  // 증가하면 화면에 렌더링이 안됨
  let cnt = 0;
  const [stCnt, setStCnt] = useState(0);
  const rfCnt = useRef(0);
  const rfNum1 = useRef();
  const rfNum2 = useRef();
  const rfNum3 = useRef();

  // 증가하는 시점에 화면에 바로 반영이 됨
  const handleCntUp = () => {
    cnt = cnt + 1;
    console.log(cnt);
  }

  // 증가하면 화면이 다시 렌더링 되는 시점에 화면에 적용됨.
  // form의 값을 가져올 때 사용 함.
  const handleStCntUp = () => {
    setStCnt(stCnt + 1);
    console.log(stCnt);
  }

  const handleRfCntUp = () => {
    // current 무조건 써줘야 함
    rfCnt.current = rfCnt.current + 1;
    console.log(rfCnt.current);
  }

  const handleSum = () => {
    let n1 = parseInt(rfNum1.current.value)      
    let n2 = parseInt(rfNum2.current.value)
    rfNum3.current.value = n1 + n2;      
  }

  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto">
      <div className="flex justify-center items-center bg-teal-100 text-white h-20">
        <TailH1 title={"useRef Hook"} />
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div> cnt = {cnt} </div>
          <div><TailBlueButton caption={'cnt증가'} handleClick={handleCntUp} /></div>
          <div />

          <div className="flex flex-col justify-center items-center">
            <div>Stcnt = {stCnt}</div>
            <div><TailBlueButton caption={'stCnt증가'} handleClick={handleStCntUp} /></div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div>rfCnt = {rfCnt.current}</div>
            <div><TailBlueButton caption={'rfCnt증가'} handleClick={handleRfCntUp} /></div>
          </div>

          <div className="flex flex-coljustify-center items-center">
            <div>
              <TailInputNum id={'num1'} name={'num1'} rf={rfNum1} />
            </div>
            <div>
              +
            </div>
            <div>             
            <TailInputNum id={'num2'} name={'num2'} rf={rfNum2} />
            </div>
            <div>
            <TailBlueButton caption={'='} handleClick={handleSum} />
            </div>
            <div>
            <TailInputNum id={'num3'} name={'num3'} rf={rfNum3} readOnly/>
            </div>
          </div>
        </div>
      
    </ div>
  )
}
