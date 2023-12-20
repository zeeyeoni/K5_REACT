import React from 'react'
import TailH1 from '../UI/TailH1'
import TrafficNav from './TrafficNav';
import { useState, useEffect } from 'react'
import TailBlueButton from '../UI/TailBlueButton';


export default function Traffic() {

  // 상태 변수
  const [totalData, setTotalData] = useState([]);   // 전체 데이터
  const [c1, setC1] = useState([]);                 // 대분류
  const [c2, setC2] = useState([]);                 // 중분류

  const [selectC1, setSelectC1] = useState([]);       // 선택 된 대분류
  const [selectC2, setSelectC2] = useState([]);       // 선택 된 중분류

  const [detail, setDetail] = useState([]);         // 상세정보

  // 상세정보 보기 키순으로 나열
  const detailKey = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];


  // 데이터 불러오기(rest api 불러오기 => fetch)
  // .then => async, await 변경
  // async => 비동기 함수
  const getData = async () => {
    let apiKey = process.env.REACT_APP_APIKEY;

    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
    url += `page=1&perPage=20&returnType=json`;
    url += `&serviceKey=${apiKey}`

    // fetch 될 때까지 기다림
    const resp = await fetch(url);
    const data = await resp.json();

    setTotalData(data.data);
  }

  


  // 컴포넌트 시작 시 한번 호출
  useEffect(()=>{
    getData();
  },[]);


  // 상태변수가 변경되었을 때 실행
  useEffect(()=>{

    // 초기값 설정이 안되있을 때 사용 , 초기값은 useState([]) 이렇게 설정
    if (totalData === undefined ) {
      return;
    }

    // 대분류 생성

    // 1. totalData 순회하면서 대분류 자료만 추출 (Array 데이터 항목이 Object(=item)), Object == 파이선 딕셔너리
    //let tm = totalData.map(item => item.사고유형_대분류);
    let tm = totalData.map(item => item[`사고유형_대분류`]);

    
    // 2. 중복 제거

    tm = new Set(tm);

    // 3. set => array 변경 
    tm = [...tm];

    // console.log(tm);

    // 4. state 변수에 저장
    setC1(tm);

  },[totalData]);

  useEffect(() =>{
    console.log(`${selectC1}`);

    // 중분류 만들기, 선택된 대분류를 filter 받아서 중분류 버튼 나열 해 주기
    let tm = totalData.filter((item) => item.사고유형_대분류 === selectC1)
                      .map((item) => item.사고유형_중분류);

    // c2가 만들어지면 선택된 selectC2는 공백 처리
    setC2(tm);
    setSelectC2('');
    setDetail('');

    // console.log("c2=", tm);

  }, [selectC1])

  useEffect(() => {

    let tm = totalData.filter((item) => item.사고유형_대분류 === selectC1 &&
                                        item.사고유형_중분류 === selectC2);

    console.log(tm);   

    //Object로 저장하기.                                    
    tm = tm[0];

    // Object 타입의 detail

    // filter 걸린게 없으면 undefined로 나오기 때문에
    if (tm === undefined) return;

    // key => list    
    // tm = Object.keys(tm).map((item, idx) => <>
    //                                         <div>{item}</div>
    //                                         <div>{tm[item]}</div>                             
    //                                         </>
    //                                         )

    tm = detailKey.map((k, idx) => <div className='flex flex-col' key={`d1${idx}`}>
                                   <div className='inline-flex justify-center items-center rounded-md mx-2 bg-red-200 text-white p-2'>{k}</div>
                                   <div className='inline-flex justify-center items-center mx-2 bg-white text-red-500 p-2'>{parseInt(tm[k]).toLocaleString('ko-KR')}</div>                             
                                   </div>
                                  )


    setDetail(tm)   
  }, [selectC2]);

  return (
    <div className='container mx-auto h-screen'>
      <div className='flex flex-col justify-top items-center w-full h-full my-8'>
        <TailH1 title={'도로교통공단_사고유형별 교통사고 통계'}></TailH1>
        <div className=' w-4/5 my-10'>
          {c1 && <TrafficNav title={'대분류'} carr={c1} sel={selectC1} setSelect={setSelectC1}></TrafficNav>}   
          {c2 && <TrafficNav title={'중분류'} carr={c2} sel={selectC2} setSelect={setSelectC2}></TrafficNav>}   
         
        </div>
        <div className='grid grid-cols-5 gap-2 w-4/5'>
          {detail}
        </div>
      </div>
    </div>
  )
}