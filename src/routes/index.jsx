import { Routes, Route } from "react-router-dom";
import { PageHome } from "../page/Home";
import { PageRegisters } from "../page/Registers";
import { PageSchedule } from "../page/Schedule";
import { Examples } from "../components/examples";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />}></Route>
      <Route path="*" element={<PageHome />}></Route>
      <Route path="/exemplos" element={<Examples />}></Route>
      <Route path="/registers" element={<PageRegisters />}></Route>
      <Route path="/schedule" element={<PageSchedule />}></Route>
    </Routes>
  );
}
