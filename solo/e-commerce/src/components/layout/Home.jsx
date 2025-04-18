import { BannerCarousel } from "./BannerCarousel";
import { Sidebar } from "./SideBar";
import { FlashSaleHeader } from "../common/FlashSaleHeader";
import { LeftArrow, RightArrow } from "../common/Arrows";
//
export function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <BannerCarousel />
      </div>
      <section className="mt-20 pt-10 pb-10">
        <div className="relative">
          <span className="tag ml-10 text-3xl font-bold text-red-600">
            Today's
          </span>
        </div>
        <div className="flex justify-between items-center mt-10 mb-10">
          <FlashSaleHeader />
          <div className="flex grow justify-end">
            <LeftArrow />
            <RightArrow />
          </div>
        </div>
      </section>
    </>
  );
}
