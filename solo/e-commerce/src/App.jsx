//
import { Routes, Route, Outlet } from "react-router-dom";
import { PromoBar } from "./components/common/PromoBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
export default function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
