import style from './Like.module.css';
// 컴포넌트가 새로 생성되면 저절로 실행되는 함수=> useEffect
// hook => useState, useEffect => component가 생성될 때 걸리는 것
import { useState, useEffect } from 'react';

export default function Like() {

    // let count = 0; => 이렇게 쓰면 안됨
    const[count, setCount] = useState(0);

    const handleUp = () => {
        // count += 1;
        setCount(count + 1);
        console.log(count);
    }
    
    const handleDown = () => {
        // count -= 1;

        if (count > 0) {
            setCount(count - 1);
        }  
        console.log(count);
    }
    // 처음 컴포넌트 생성 시 한 번만 실행(호출 안해도 자동으로 실행)
    // dependency array가 없으면 처음만 실행
    useEffect(() => {
        console.log("Like 생성");
    }, []);

    // state변수에 의해 컴포넌트가 업데이트 될 때 실행
    useEffect(() => {
        console.log("Like update", count);
    }, [count]);

  return (
    <div>
        <div className={style.likediv}>
        <span onClick={handleUp()}>👍🏻</span>
        <span>{count}</span>
        <span onClick={() => handleDown()}>👎🏻</span>
        </div>
    </div>
  )
}
