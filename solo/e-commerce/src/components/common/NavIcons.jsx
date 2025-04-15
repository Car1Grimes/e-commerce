import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export function NavIcons({ auth }) {
  return (
    <div className="flex items-center space-x-6 text-gray-700 ml-6">
      <div className="cursor-pointer hover:text-red-500 transition-colors">
        <FontAwesomeIcon icon={faHeart} size="2xl" />
      </div>
      <div className="cursor-pointer hover:text-green-500 transition-colors">
        <FontAwesomeIcon icon={faCartShopping} size="2xl" />
      </div>
      {auth && (
        <div className="cursor-pointer hover:text-blue-500 transition-colors">
          <FontAwesomeIcon icon={faUser} size="2xl" />
        </div>
      )}
    </div>
  );
}
