import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fcst from "./Fcst";
import FcstDetail from "./FcstDetail";
import FcstHeader from "./FcstHeader";

export default function FcstMain() {
  return (
    <BrowserRouter>
        <FcstHeader />
        <Routes>
            <Route path="/" element={<Fcst />} />
            <Route path="/detail" element={<FcstDetail />} />
        </Routes>
    </BrowserRouter>
  )
}
