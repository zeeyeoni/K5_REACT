import Div2 from './Div2';
import { useRecoilValue } from 'recoil';
import { divN4 } from './DivAtoms';

export default function Div1() {

    const n4 = useRecoilValue(divN4);

    return (
        <div className='w-5/6 h-5/6 rounded-xl p-10 flex justify-center items-center bg-sky-300'>
            <div className='text-xl text-gray-700'>
                Div1(4배 증가) ,n={n4}</div>
            <Div2 />
        </div>
    )
}
