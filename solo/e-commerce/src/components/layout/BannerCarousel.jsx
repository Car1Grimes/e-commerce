import { SlideIndicators } from "../common/SlideIndicators";
import { Dot } from "../common/Dot";

export function BannerCarousel({ children }) {
  return (
    <div className="p-10 flex-1">
      <div className="relative w-full h-100 bg-gray-300">
        {children}
        <SlideIndicators>
          <Dot />
          <Dot />
          <Dot />
        </SlideIndicators>
      </div>
    </div>
  );
}
