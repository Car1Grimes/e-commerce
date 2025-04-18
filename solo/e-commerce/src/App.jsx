//
import { Routes, Route, Outlet } from "react-router-dom";
import { PromoBar } from "./components/common/PromoBar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PageContent } from "./components/layout/PageContent";
export default function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <PageContent>
        <Outlet />{" "}
      </PageContent>
      <Footer />
    </>
  );
}
