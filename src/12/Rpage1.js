import { useParams } from "react-router-dom"

export default function Rpage1() {

  const item = useParams().item;

  const hi = { 
    아이스크림 : '🧁',
    햄버거 : '🍔',
    케이크 : '🍰',
  }
  return (
    <div>
      page1 : {hi[item]}
    </div>
  )
}
