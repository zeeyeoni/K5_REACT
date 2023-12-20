import Like from "../04/Like";
import FrontArticle from "./FrontArticle";

function FrontEnd() {
    // 배열 안의 항목은 Object(key value)
    const data = [
        {title : 'HTML',
         href : "./images/html.png",
         content : "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
        },

        {title : 'CSS',
         href : "./images/css.png",
         content : "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
        },
        
        {title : 'JS',
         href : "./images/js.png",
         content : "웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원"
        },

        {title : 'REACT',
         href : "./images/react.png",
         content : "사용자 인터페이스를 만들기 위한 JavaScript 라이브러리"
        },

        {title : 'NEXT.JS',
         href : "./images/nextjs.png",
         content : " React 기능을 확장하고 가장 빠른 빌드를 위해 강력한 Rust 기반 JavaScript 도구를 통합하여 풀 스택 웹 애플리케이션"
        },
    ];
    return (
        <>
           

            {/* 동시에 여러개를 받으면 key 값을 넣어줘야함 */}
            {data.map((item, idx)=>
            <>
                 <FrontArticle 
                 key = {`article${idx}`}
                 title = {item.title}
                 href = {item.href}
                 content = {item.content}
                 />
                <Like key ={`like${idx}`}/>
            </>   
            )
            }
        </>
    );
}

export default FrontEnd;