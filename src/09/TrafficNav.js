import TailBlueButton from "../UI/TailBlueButton"

// 타이틀, 대분류 목록, 선택된 항목, c1을 바꾸는 함수
export default function TrafficNav({title, carr, sel, setSelect}) {


    // 대분류 버튼을 만들었을 때 버튼이 바뀜
    const handleClick = (item) => {
        setSelect(item);
    }

    // 대분류의 카테고리를 하나씩 가져와서 버튼으로 만듬
    const tags = carr.map((item, idx) =>
        <TailBlueButton caption={item} 
                        bcolor={item === sel ? 'red' : 'sky'}
                        key={`button${idx}`}
                        handleClick={() => handleClick(item)}/>
    );



  return (
    <div className="flex w-full bg-slate-100 p-3 my-4">
        <div className="flex justify-center items-center text-xl w-1/6">
            {title}
        </div>
        <div className="flex justify-end items-center w-5/6">
            {tags}
        </div>
    </div>
  )
}
