import TailH1 from '../UI/TailH1';
import { FcLandscape } from "react-icons/fc";
import weather from "../13/getxy.json";
import { useEffect, useRef, useState } from 'react';
import TailSelect from '../UI/TailSelect';
import TailBlueButton from '../UI/TailBlueButton';

export default function Fcst() {
    // !!!!! useState 정보가 바뀔 때만 사용하고, 지정된 정보일 경우 바로 뿌려주기

    // 전체 데이터 담는 곳
    const [totalData, setTotalData] = useState([]);
    // 선택한 날짜 담는 곳
    const [selectDate, setSelectDate] = useState([]);
    // 선택한 지역 담는 곳
    const [selectLocation, setSelectLocation] = useState([]);
    // 선택한 날짜 
    const refDate = useRef();

    // !!!!! 바로 selectBox에 넣어주면 됨, Effect 필요 없음
    const getData = () => {

        const data = weather;

        setTotalData(data);
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(()=> {

        let tm = totalData.map(item => item[`1단계`])

        // 1단계는 중복되는 부분이 없어서 set에 
        tm = new Set(tm);

        tm = [...tm].sort();

        setSelectLocation(tm);

    }, [totalData])


    const handleDateChange = () => {

        console.log(refDate.current.value);
    }

    const handleLocationChange = (e) => {
        console.log(e.target.value);
    }


    return (
        <div className="container mx-auto w-full h-screen">
            <div className='flex flex-col justify-top item-center w-full my-8'>
                <div className='flex'>
                    <FcLandscape className='text-4xl mx-5' />
                    <TailH1 title="단기예보 선택" color='orange' />
                    <FcLandscape className='text-4xl mx-5' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="flex m-7">
                        <input type="date"
                            id="date"
                            ref={refDate}
                            onChange={handleDateChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"
                        />
                    </div>
                    <div>
                        <TailSelect optionItem={selectLocation} handleChange={handleLocationChange} />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div>
                        <TailBlueButton caption={"초단기예보"} bcolor={'sky'} handleClick={''}/>
                        </div>
                        <div>
                        <TailBlueButton caption={"단기예보"} bcolor={'sky'} handleClick={''}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
