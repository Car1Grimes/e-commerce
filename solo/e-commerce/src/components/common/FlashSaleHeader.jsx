export function FlashSaleHeader() {
  return (
    <div className="flex gap-30 items-end grow">
      <span className="text-5xl font-bold">Flash Sale</span>
      <div className="flex justify-between items-end">
        <div>
          <span className="block text-xl">Days</span>
          <span className="block text-5xl font-bold">03</span>
        </div>
        <span className="text-5xl ml-10 mr-10">:</span>
        <div>
          <span className="block text-xl">Hours</span>
          <span className="block text-5xl font-bold">12</span>
        </div>
        <span className="text-5xl ml-10 mr-10">:</span>
        <div>
          <span className="block text-xl">Minutes</span>
          <span className="block text-5xl font-bold">56</span>
        </div>
        <span className="text-5xl ml-10 mr-10">:</span>
        <div>
          <span className="block text-xl">Seconds</span>
          <span className="block text-5xl font-bold">34</span>
        </div>
      </div>
    </div>
  );
}
