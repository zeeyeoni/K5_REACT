import Div3 from "./Div3"
import { divN3 } from "./DivAtoms"
import { useRecoilValue } from "recoil"

export default function Div2() {

  const n3 = useRecoilValue(divN3);

  return (
    <div className='w-5/6 h-5/6 rounded-xl p-10 flex justify-center items-center bg-sky-500'>
            <div className='text-xl text-gray-700'>
            Div2(3배 증가) , n = {n3}</div>
            <Div3 />
    </div>
  )
}
