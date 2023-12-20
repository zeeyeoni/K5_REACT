import TailH1 from '../UI/TailH1';
import TailCard from '../UI/TailCard';
import TailBlueButton from '../UI/TailBlueButton';
import { FcPicture } from "react-icons/fc";
import { useState, useEffect, useRef } from 'react';

export default function Gallery() {
  //환경변수값 가져오기
  let apikey = process.env.REACT_APP_APIKEY;

  //fetch 데이터 저장(// useState 값이 바뀔때 마다 재 랜더링 됨)
  const [tdata, setTdata] = useState([]);

  // 화면에 재 랜더링 (키워드를 검색해서 데이터가 채워졌을 때, 키워드의 갯수만큼 tailcard를 만들어내야함.) 
  const [detail, setDetail] = useState([]);

  //키워드 입력(//키워드 입력 (사용자가 뭘 입력했는지 알기위해서 useRef 라는 속성을 사용한 것 ))
  const keywordInput = useRef();

  const handleGetData = async (e) => {
    if (e.key !== "Enter") e.preventDefault();
    //키워드 인코딩(//키워드 인코딩(사이트에 한글은 인코딩 하라고 적혀있어서 인코딩한 것))
    let enkw = encodeURI(keywordInput.current.value);
    if (enkw === '') {
      alert('키워드를 입력하세요.') ;
      keywordInput.current.focus();
      return;
    }

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = `${url}serviceKey=${apikey}`
    url = `${url}&numOfRows=10`;
    url = `${url}&pageNo=1`;
    url = `${url}&MobileOS=ETC`;
    url = `${url}&MobileApp=AppTest`;
    url = `${url}&arrange=A`;
    url = `${url}&keyword=${enkw}`;
    url = `${url}&_type=json`;

    // console.log(url)

    const resp = await fetch(url);
    const data = await resp.json();

    //console.log(data.response.body.items.item)
    //json object로 되어 있어서 가져올 정보만 추출하기
    setTdata(data.response.body.items.item);
  }

  // ref로 입력받은 값은 current에 저장되어 있음.
  const handleResetData = (e) => {
    e.preventDefault();
    keywordInput.current.value = '';
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") handleGetData(e);
  };

  //tdata변경 (키워드를 검색해서 데이터가 채워졌을 때, 키워드의 갯수만큼 tailcard를 만들어내야함.)
  useEffect(() => {
    console.log("tdata=", tdata);

    // 두번째 index, map filter 사용시 무조건 key 값 지정해줘야함
    let tm = tdata.map((item, idx) => <TailCard key={`gal${idx}`}
                                                imgSrc={item.galWebImageUrl.replace('http://', 'https://')}
                                                title={item.galTitle}
                                                subtitle={item.galPhotographyLocation}
                                                tags={item.galSearchKeyword}
                                        />
    
    )
    setDetail(tm);

  }, [tdata])

  return (
    <div className="container mx-auto w-full h-screen">
      <div className="flex flex-col justify-top items-center w-full my-8">
        <div className='flex'>
          <TailH1 title={'한국관광공사 사진정보'} />
          <FcPicture className='text-4xl mx-5' />
        </div>
        {/* 사용자가 뭘 입력했는지 알기위해서 useRef 라는 속성을 사용한 것  */}
        {/* onKeyDown은 키보드를 누를때마다 enterKey인지 아닌지 확인함 (textbox의 onChange와 비슷함) */}
        <form name="kform" className="my-8 w-4/5 flex justify-center items-center">
          <div className='w-1/2 mx-4'>
            <input type="text" ref={keywordInput} id="txt1" className="shadow-sm 
                                                   bg-gray-50 border border-gray-300
                                                   text-gray-900 text-sm rounded-lg
                                                   focus:ring-blue-500 focus:border-blue-500 
                                                   block w-full p-2.5"
              onKeyDown={handleEnter}
              placeholder="키워드입력" required />
          </div>
          <TailBlueButton caption=' 확 인 ' bcolor='sky' handleClick={(e) => handleGetData(e)} />
          <TailBlueButton caption=' 취 소 ' bcolor='sky' handleClick={(e) => handleResetData(e)} />
        </form>
        {/* <div className='grid grid-cols-3 grid-rows-3 gap-4 rounded-md'> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {/* <TailCard imgSrc={"https://tong.visitkorea.or.kr/cms2/website/61/2952361.jpg"}
            title={"광안리해수욕장"}
            subtitle={"부산광역시 수영구 광안동"}
            tags={"광안리해수욕장, 부산광역시 수영구, 광안리해변, 바닷가, 바다, 부산 광안대교, 다이아몬드 브릿지, 별바다부산, 부산야간관광"} /> */}
            {detail}
        </div>
      </div>

    </div>
  )
}