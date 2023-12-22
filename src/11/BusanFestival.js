import TailH1 from "../UI/TailH1";
import { FcLandscape } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
import TailCard from "../UI/TailCard";
import TailSelect from "../UI/TailSelect";

export default function BusanFestival() {


  // 전체 데이터
  const [totalData, setTotalData] = useState([]);
  // 수영구 구 추출
  const [locationList, setLocationList] = useState([]);
  
  // const [option, setOption] = useState([]);
  // 선택한 구에 대한 배열이 담긴다
  const [selectData, setSelectData] = useState([]);
  const [tag, setTag] = useState([]);

  const selectRef = useRef();

  let apikey = process.env.REACT_APP_APIKEY;

  const getData = async () => {
    
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = `${url}serviceKey=${apikey}`;
    url = `${url}&pageNo=1`;
    url = `${url}&numOfRows=40`;
    url = `${url}&resultType=json`;


    const response = await fetch(url);
    const data = await response.json();

    setTotalData(data.getFestivalKr.item);
    console.log(data);
  }

  useEffect (()=>{
    getData();
  }, [])

  // totalData의 값이 바뀔때마다 다시 호출됨(다시 그려짐)
  // 부산의 모든 구 추출하기
  useEffect(()=>{

    let tm = totalData.map(item => item[`GUGUN_NM`])
    
    tm = new Set(tm);

    // 집합이기때문에 array 변경
    tm = [...tm].sort();
    
    // tm = tm.map((gu, idx) => <option key={`gu${idx}`}
    //                                         value={`${gu}`}>{gu}</option>)

    // console.log(tm);

    setLocationList(tm);

  },[totalData])


  // useEffect(()=>{

  //     let tm = locationList.map((item, idx) => <option key={`option${idx}`} value={item}>{item}</option>);

  //     setOption(tm);

  // },[locationList])
    
  // useEffect (() => {

  //     </TailCard>)
  //     setSelect(tm);

  //     console.log(tm);


  // }, [option])

  // 선택한 구를 알려주는 것
  const handleChange = (e) => {
    // ref를 걸었을 때
    // console.log(selectRef.current.value);

    // ref를 걸지 않았을 때 
    console.log(e.target.value);

    let tm = totalData.filter((item) => item.GUGUN_NM === e.target.value);

    setSelectData(tm);

  }

  useEffect(()=> {
    let tm = selectData.map((item, idx) => <TailCard key={`sel${idx}`}
                                                      imgSrc={item.MAIN_IMG_THUMB}
                                                      title={item.TITLE}
                                                      subtitle={item.SUBTITLE}
                                                      tags={item.MAIN_PLACE} ></TailCard>)

    setTag(tm);
  
  }, [selectData])




  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className="flex">
          <FcLandscape className='text-4xl mx-5'/>
          <TailH1 title='부산 축제 정보' color='orange'/>
          <FcLandscape className='text-4xl mx-5'/>
        </div>
          <div>
            <TailSelect optionItem={locationList} handleChange={handleChange} />
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {tag}
            </div>
          </div>
      </div>
    </div>
  )
}
