import { useSearchParams } from "react-router-dom"

export default function Rpage2() {

  const hi = { 
    아이스크림 : '🧁',
    햄버거 : '🍔',
    케이크 : '🍰',
  }

  const [sParams, setSParams] = useSearchParams();

  console.log(sParams.get('item1'));
  // console.log(sParams.get('item1'&'item2'));
  

  return (
    <div>
        {hi[sParams.get('item1')] + hi[sParams.get('item2')]}

        {/* page2 : {item1 && hi[item1]} {item2 && hi[item2]} */}
    </div>
  )
}
