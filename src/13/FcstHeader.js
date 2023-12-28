import TailH1 from "../UI/TailH1";
import { FcLandscape } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function FcstHeader() {
    return (

        <div className="container mx-auto w-full">
            <div className='flex flex-col justify-top item-center w-full my-8'>
                <div className='flex'>
                    <FcLandscape className='text-4xl mx-5' />
                    <TailH1 title="단기예보 선택" color='orange' />
                    <FcLandscape className='text-4xl mx-5' />
                </div>
                <div className="flex w-2/3 justify-end bg-slate-100">
                    <div>
                        <Link to='/'>홈으로</Link>
                        {/* <Link to='/detail'>상세페이지</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
