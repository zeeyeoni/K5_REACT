import Div3 from "./Div3"

export default function Div2({n, setN}) {

  return (
    <div className='w-5/6 h-5/6 rounded-xl p-10 flex justify-center items-center bg-purple-500'>
            <div className='text-xl text-gray-700'>Div3</div>
            <Div3 n={n} setN={setN}/>
        </div>
  )
}
