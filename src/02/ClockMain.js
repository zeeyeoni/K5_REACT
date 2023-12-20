import LogoImg from "../01/LogoImg";
// 리액트가 상태를 감지하는 것. 원래는 function 함수에서 사용할 수 없는데 생명주기를 주는 것(다시 그려주게 만드는 것 = hook)
import { useState } from "react";

function ClockMain() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // 1초에 한 번씩 다시 그려지게 만들기(state 변수를 사용하기)
    setInterval(()=>{
        setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    // let currentTime = new Date().toLocaleTimeString();
    return(
        <div className="App-header">
            <LogoImg />
            <div>
                현재시간 : {currentTime}
            </div>
        </div>
    );
}

export default ClockMain;
