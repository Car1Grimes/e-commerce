//
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex justify-center items-center py-20">
        <div className="w-4/5 flex gap-20 justify-between">
          <div>
            <div>
              <a className="inline-block text-5xl px-2 py-4" href="/">
                Exclusive
              </a>
            </div>
            <div>
              <a className="inline-block text-4xl px-2 py-4" href="#!">
                Subscribe
              </a>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">
                Get 10% off your first order
              </span>
            </div>
            <div className="flex items-center border border-gray-200 rounded-lg pr-6">
              <input
                className="text-3xl p-6"
                type="text"
                placeholder="Enter your email"
              />
              <button>
                <FontAwesomeIcon icon={faPaperPlane} size="2xl" />
              </button>
            </div>
          </div>
          <div>
            <div>
              <span className="inline-block text-4xl px-2 py-6">Support</span>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">
                111 Bijoy sarani, Dhaka, DH1515, Bangladesh
              </span>
            </div>
            <div>
              <a
                className="inline-block text-3xl px-2 py-6"
                href="mailto:notarealemail@gmail.com"
              >
                notarealemail@gmail.com
              </a>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">
                +0999-8888-7777
              </span>
            </div>
          </div>
          <div>
            <div>
              <span className="inline-block text-4xl px-2 py-6">Account</span>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">
                My Account
              </span>
            </div>
            <div>
              <a className="inline-block text-3xl px-2 py-6" href="/signup">
                Login / Register
              </a>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">Cart</span>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">Wishlist</span>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">Shop</span>
            </div>
          </div>
          <div>
            <div>
              <span className="inline-block text-4xl px-2 py-6">Quicklink</span>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">
                Privacy Policy
              </span>
            </div>
            <div>
              <a className="inline-block text-3xl px-2 py-6" href="#!">
                Terms of use
              </a>
            </div>
            <div>
              <span className="inline-block text-3xl px-2 py-6">FAQ</span>
            </div>
            <div>
              <a className="inline-block text-3xl px-2 py-6" href="/contact">
                Contact
              </a>
            </div>
          </div>
          <div>
            <div>
              <span className="inline-block text-4xl px-2 py-6">
                Download App
              </span>
            </div>
            <div>
              <span className="inline-block text-lg px-2 py-6 text-gray-500">
                Save 3% with App New User Only
              </span>
            </div>
            <div className="flex gap-5">
              <div className="flex justify-center items-center w-32 h-32 bg-white text-black">
                <p>QR Code</p>
              </div>
              <div className="flex flex-col justify-between w-32 h-32 text-black">
                <div className="flex justify-center items-center bg-white h-2/5">
                  <p>Google play</p>
                </div>

                <div className="flex justify-center items-center bg-white h-2/5 mt-auto">
                  <p>App store</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-5 mt-6">
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <div className="w-10 h-10 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-t-gray-800">
        <span className="block text-center text-3xl text-gray-700">
          &copy; Copyright Rimel 2022. All rights reserved
        </span>
      </div>
    </footer>
  );
}
