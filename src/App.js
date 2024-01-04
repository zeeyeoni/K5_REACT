import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import LogoMain from './01/LogoMain';
import ClockMain from './02/ClockMain';
// import FrontEnd from './03/FrontEnd';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import RefTest from './08/RefTest';
import Frcst from './07/Frcst';
import Traffic from './09/Traffic';
import Gallery from './10/Gallery';
import BusanFestival from './11/BusanFestival';
// import Rmain from './12/Rmain';
import Fcst from './13/Fcst';
import Ex01 from './90/Ex01';
import DivMain from './14/DivMain';
import DivRecoilMain from './15/DivRecoilMain';


function App() {
  return (
<BrowserRouter>
    <div className='flex flex-col w-full max-w-screen-xl mx-auto h-screen'>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-xl tracking-tight">K-Digital 5</span>
        </div>  
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">

            <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[LogoMain]</Link>  
            <Link to='/clock' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[ClockMain]</Link>  
            <Link to='/Lotto' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Lotto]</Link> 
            <Link to='/BoxOffice' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[BoxOffice]</Link>  
            <Link to='/RefTest' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Calculator]</Link>  
            <Link to='/Frcst' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Weather]</Link> 
            <Link to='/Traffic' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Traffic]</Link>  
            <Link to='/Gallery' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Gallery]</Link>  
            <Link to='/BusanFestival' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[BusanFestival]</Link> 
            <Link to='/Fcst' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Short-term wheather]</Link>  
            <Link to='/Ex01' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Study]</Link> 
            <Link to='/DivMain' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Props]</Link>      
            <Link to='/DivRecoilMain' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">[Recoil]</Link>         
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">지연</a>
          </div>
        </div>
      </nav>
      <main className='grow w-full overflow-y-auto'>
          <Routes>
            <Route path='/' element={<LogoMain />} />
            <Route path='/clock' element={<ClockMain />} />
            <Route path='/Lotto' element={<Lotto />} />
            <Route path='/BoxOffice' element={<BoxOffice />} />
            <Route path='/RefTest' element={<RefTest />} />
            <Route path='/Frcst' element={<Frcst />} />
            <Route path='/Traffic' element={<Traffic />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/BusanFestival' element={<BusanFestival />} />
            <Route path='/clock' element={<ClockMain />} />
            <Route path='/Fcst' element={<Fcst />} />
            <Route path='/Ex01' element={<Ex01 />} />
            <Route path='/DivMain' element={<DivMain />} />
            <Route path='/DivRecoilMain' element={<DivRecoilMain />} />
          </Routes>
      </main>
    </div>
    </BrowserRouter>


    // Component(= 함수) 이름은 대문자로 시작 해야 한다.
    // view로 나갈 return이 무조건 존재해야 함, return 루트 태그 하나만 나가야함(부모노드 하나만 가능, 자식노드는 여러개 가능)
    // class는 예약어가 있기 때문에 사용 x, className 사용하기   

    // 중간에 아무것도 적을게 없을때만 <~~~/>
    // <LogoMain />
    // <ClockMain />
    // <FrontEnd />
    // <Lotto />
    // <BoxOffice />
    // <Frcst />
    // <RefTest />
    // <Traffic />
    // <Gallery />
    // <BusanFestival />
    // <Rmain />
    // <Fcst />
    // <FcstMain />
    // <Ex01 />
  );
}

export default App;
