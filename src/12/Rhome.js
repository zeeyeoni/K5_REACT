import { Link, useNavigate } from "react-router-dom";
import TailBlueButton from "../UI/TailBlueButton";

export default function Rhome() {

  const navigate = useNavigate();

  return (
    <div className="grow justify-center items-end">
    <div> Home</div>
    <div>
      <div>Page1 이동</div>
      <ul>
        <li><Link to='/page1/햄버거'>🍔</Link></li>
        <li><Link to='/page1/케이크'>🍰</Link></li>
        <li><Link to='/page1/아이스크림'>🧁</Link></li>
      </ul>
    </div>
    <div className="flex">
      <div className="mx-30">Page1 이동</div>
      <div>
        <TailBlueButton caption={'햄버거'} bcolor={'sky'} handleClick={()=>navigate('/page1/햄버거')} />
        <TailBlueButton caption={'케이크'} bcolor={'sky'} handleClick={()=>navigate('/page1/케이크')} />
        <TailBlueButton caption={'아이스크림'} bcolor={'sky'} handleClick={()=>navigate('/page1/아이스크림')} />
      </div>
    </div>
    <div className="flex">
      <div className="mx-30">Page2 이동</div>
      <div>
        <TailBlueButton caption={'햄버거'} bcolor={'red'} handleClick={()=>navigate('/page2?item1=햄버거&item2=케이크')} />
        <TailBlueButton caption={'케이크'} bcolor={'red'} handleClick={()=>navigate('/page2?item1=케이크')} />
        <TailBlueButton caption={'아이스크림'} bcolor={'red'} handleClick={()=>navigate('/page2?item1=아이스크림')} />
      </div>
    </div>
    </div>
  )
}
