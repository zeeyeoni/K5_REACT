import { useEffect, useState } from "react"
import TailH1 from "../UI/TailH1";
import TailBlueButton from "../UI/TailBlueButton";

export default function Frcst() {

  // 상태변수
  const [dataF, setDataF] = useState();
  const [dtTags, setDtTags] = useState();
  const [cnTags, setCnTags] = useState();
  

  // 키 배열
  const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
  const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
  

  // fetch 해서 가져오는 사용자 정의 함수
  const getData = () => {

    // fetch 주소
    let url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustWeekFrcstDspth?`
    url += `serviceKey=${process.env.REACT_APP_APIKEY}`;
    url += `&returnType=json&numOfRows=100&pageNo=1`
    url += `&searchDate=2023-11-30`;

    console.log(url);
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDataF(data.response.body.items[0]))      // 여기서 data 넣어줌
      .catch(err => console.log(err))



  }

  // 날짜를 선택했을 때 실행되는 사용자 정의 함수
  const handleDtClick = (idx) => {
    console.log(dataF[cnKey[idx]]);

    let tm = dataF[cnKey[idx]].split(",");
    tm = tm.map((item) => item.split(":"));

    tm = tm.map((item, idx) => 
      <div>{item}</div>
    );


    console.log(tm);
    setCnTags(tm);
  }


  // component 생성될 때 처음 한 번만 실행
  useEffect(() => {

    //API키 확인
    // console.log(process.env.REACT_APP_APIKEY);


    //fetch 해서 가져오는 사용자 정의 함수 호출
    getData();

  }, []);

  // state 변수 dataF 변경되었을 때 실행
  useEffect(() => {
    if (dataF === undefined) {
      return;
    }
    // 데이터가 존재할 때,
    let tm = dtKey.map((k, idx) =>
      // <div key={`dt${idx}`} onClick={() => handleDtClick(idx)}>
      //   {dataF[k]}
      // </div>
      <TailBlueButton key={`dt${idx}`} caption={dataF[k]} handleClick={() => handleDtClick(idx)} />
    );

    setDtTags(tm);
  }, [dataF]);


  return (

    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto">
      <div className="flex justify-center items-center bg-teal-100 text-white h-20">
        <TailH1 title={"초미세먼지예보"} />
      </div>
      <div className="grow flex flex-col justify-top">
        <div className="flex justify-center items-center p-10">
          {dtTags}
        </div>
        <div className="flex justify-center items-center p-10 w-full">
          <div className="grid grid-cols-4 gap-4 ">
          {cnTags}
          </div>
        </div>
      </div>

    </div>
  )
}
