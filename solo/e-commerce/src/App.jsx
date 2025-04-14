//
import { Routes, Route } from "react-router-dom";
import { PromoBar } from "./components/common/PromoBar";
import { Navbar } from "./components/layout/Navbar";
export default function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
    </>
  );
}
