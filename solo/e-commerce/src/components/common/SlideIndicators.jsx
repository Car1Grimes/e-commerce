export function SlideIndicators({ children }) {
  return (
    <div className="absolute flex gap-5 p-6 bottom-0 left-1/2 -translate-x-1/2">
      {children}
    </div>
  );
}
