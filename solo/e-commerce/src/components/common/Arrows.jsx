//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function RightArrow() {
  return (
    <button
      className="bg-white/70 hover:bg-white text-gray-800 hover:text-black p-2 rounded-full shadow-md transition duration-300 
             backdrop-blur-sm"
    >
      <FontAwesomeIcon icon={faArrowRight} size="3x" />
    </button>
  );
}

export function LeftArrow() {
  return (
    <button
      className="bg-white/70 hover:bg-white text-gray-800 hover:text-black 
             p-2 rounded-full shadow-md transition duration-300 
             backdrop-blur-sm"
    >
      <FontAwesomeIcon icon={faArrowLeft} size="3x" />
    </button>
  );
}
