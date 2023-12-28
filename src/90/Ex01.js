import MyButton from "./MyButton";
import { useEffect, useState, useRef } from "react";

export default function Ex01() {

    const arr = ['hi', 'hello', 'hoho :)'];

    const arrColor = ['sky', 'orange', 'lime'];

    const [tagMessage, setTagMessage] = useState(arr[0]);

    const inRef = useRef();

    // body에서 일어나는 일이 없으면 {} , return 생략가능
    // 리액트가 어떤 컴포넌트를 불러올지 모르기 때문에 key를 지정해주는 것
    const tagArr = arr.map((item, idx) => {

        <MyButton key={`item${idx}`} caption={item} 
        buttonColor={arrColor[idx]}
        buttonOnClick={() => {buttonClick(item)}}/>

        return <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"onClick={() => buttonClick(item)}>{item}</button>      
    });

    // 보통 변수는 상수, 문자열을 저장하는데 js는 함수를 저장할 수 있음
    // 보여줄 내용이 바뀔 때마다 다시 그려주는것 useState(얘는 변수, 화면에 다시 그리는 장치)
    // 비동기로 일어나고 있어서 => useEffect를 사용해줌 (얘는 함수, 화면이 바뀔때 제어해주는 것)
    // useRef => 변수를 저장하는 곳 (inputbox의 입력 값을 내가 화면에 뿌리고 싶어서 사용)
    // inputbox 랑 연결 시켜야함 => ref 속성으로
    const buttonClick = (message) => {
        inRef.current.value === '' ? setTagMessage(message)
                                    : setTagMessage(`${inRef.current.value}님 ${message}`);
        
    }



    // 바뀔때마다 그냥 자동으로 나타나게 하려면 dependencyArray [] 생략하고, 
    // [] 공백이면 한 번만 실행 
    // 상태 변화에 따라 실행되게 하려면 [] 안에 변수 넣어주기
    useEffect(()=>{
        console.log(tagMessage);
    },[tagMessage]);

    



    // return은 내보내는 기능만 구동
    return (
        // 리액트는 ssr (x), 실제 구동은 client local 환경에서 실행되는 것(js 번역을 즉시 해줌)
        // 리액트 = CSR (Client-Side-Rendering), SSR(Server-Side-Rendering)
        <>
            {/* 방법1: 태그는 하나만 나와야하기 때문에 div로 묶어서 실행 */}
            <div className="container mx-auto px-4">
                {/* h1 태그는 block 요소이기 때문에 전체가 다 꾸며짐 */}
                <h1 className="bg-orange-200 h-10 
                            flex justify-center items-center
                            text-lg
                            m-5
                            p-5">React</h1>
                <div className="flex justify-center items-center w-full">
                    <button onClick={() => buttonClick("hi~")}>{arr[0]}</button>      
                    <button onClick={() => buttonClick("hello~")}>{arr[1]}</button>
                    <button onClick={buttonClick}>{arr[2]}</button>
                </div>
            </div>

            {/* 방법2: fragment로 묶으면 계층이 사라짐 */}
            <>
                <h1>React</h1>
                <MyButton caption={arr[0]} buttonOnClick={buttonClick}/>
                <button onClick={() => buttonClick(arr[2])}>button2</button>
                <button onClick={buttonClick}>button3</button>
            </>
            <div className="flex justify-center items-center w-full">
                <form>
                    <input type="text"
                            ref={inRef}
                            placeholder="이름입력" />
                </form>
                {tagArr}
            </div>

            <div className="h-20
                            flex justify-center items-center
                            text-lg
                            m-5
                            p-5">
                                {tagMessage}
            </div>
        </>
    )
}
