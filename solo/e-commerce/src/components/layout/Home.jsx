import { BannerCarousel } from "./BannerCarousel";
import { Sidebar } from "./SideBar";

//
export function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <BannerCarousel />
    </div>
  );
}
