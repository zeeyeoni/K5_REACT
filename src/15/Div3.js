import TailBlueButton from "../UI/TailBlueButton";
import { useRecoilState } from "recoil";
import { divN } from "./DivAtoms";

export default function Div3() {

    const [n, setN] = useRecoilState(divN);

    const handleUp = () => {
        setN(n + 2);
    }

    const handleDown = () => {
        setN(n - 2);
    }

  return (
    <div className='w-5/6 h-5/6 rounded-xl p-10 flex justify-center items-center bg-sky-700'>
            <div className='text-xl text-gray-700'>Div3</div>
            <div>
                <TailBlueButton caption="증가" bcolor="orange" handleClick={handleUp} />
                <TailBlueButton caption="감소" bcolor="red" handleClick={handleDown} />
            </div>
        </div>
  )
}
