import { BiCameraMovie } from "react-icons/bi";
import TailH1 from "../UI/TailH1";
import { useEffect, useState, useRef } from "react";

export default function BoxOffice() {

  const [trs, setTrs] = useState();
  const [boxlist, setboxlist] = useState([]);
  const [yeterday, setYesterday] = useState();
  const rfDate = useRef();


  const getFetchData = (dt) => {

    //환경 변수 가져오기 => .gitignore에서 .env 하면 정보 노출 x, .env에서 REACT_APP_ 이름 설정하기
    let apikey = process.env.REACT_APP_BOXOFFICE;
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
    url += `key=${apikey}`
    url += `&targetDt=${dt}`;

    console.log(url);

    fetch(url)
      .then(resp => resp.json())
      .then(data => setboxlist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))

  };

  // 어제 날짜를 구해서 getFetch
  useEffect(() => {

    let tmYeterday = new Date();
    tmYeterday.setDate(tmYeterday.getDate() - 1);
    console.log(tmYeterday);


    tmYeterday = tmYeterday.toISOString().slice(0, 10);
    setYesterday(tmYeterday);
    console.log(tmYeterday);
    getFetchData(tmYeterday.replaceAll('-', ''))

  }, []);


  // onChange가 발생하면 현재 선택 된 날짜를 가져와야함 => 현재 선택 된 날짜는 useRef()로 가져옴
  // useRef()의 변수를 만들고 input에 끼워줌

  // 날짜 변경 시 호출 2가지 방법
  const handleDtChange = () => {
    getFetchData(rfDate.current.value.replaceAll('-', ''));

  }

  // const handleDtChange = (e) => {
  //     getFetchData(e.target.value.replaceAll('-', ''));

  // }



  // boxlist 변경 시 실행
  useEffect(() => {

    (boxlist === undefined) ?
      setTrs(
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>) :
      setTrs(boxlist.map((item) =>

        <tr key={item.movieCd} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 hover:font-extrabold dark:hover:bg-gray-600">
          <td className="px-6 py-4">
            <span className="inline-flex justify-center items-center w-5 h-5 bg-slate-500 text-white m-5">{item.rank}</span>{item.movieNm}
          </td>
          <td className="px-6 py-4">
            {parseInt(item.salesAcc).toLocaleString("ko-KR")}원
          </td>
          <td className="px-6 py-4">
            {parseInt(item.audiCnt).toLocaleString("ko-KR")}명
          </td>
          <td className="px-6 py-4">
            {
              (parseInt(item.rankInten) > 0) ? <span className="text-red-600">▲{item.rankInten}</span> : <span className="text-sky-600">▼{Math.abs(item.rankInten)}</span>
            }
          </td>
        </tr>)
      );
  }, [boxlist]);

  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex m-8">
          <BiCameraMovie className="text-5xl text-sky-800 mx-3" />
          <TailH1 title="박스오피스" />

          <div className="flex m-4">
            <label htmlFor="dt">날짜 선택</label>
            <input type="date"
              id="dt"
              max={yeterday}
              ref={rfDate}
              onChange={handleDtChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto w-3/4 shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  영화명
                </th>
                <th scope="col" className="px-6 py-3">
                  매출액
                </th>
                <th scope="col" className="px-6 py-3">
                  관객수
                </th>
                <th scope="col" className="px-6 py-3">
                  증감율
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {trs}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}