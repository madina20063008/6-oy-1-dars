import './App.css';
import phone from './phone.png';
import first from './1.png';
import second from './2.png';

function App() {
  return (
    <div className="App">

      <div className="min-h-screen bg-[#1B1B1B] text-white flex flex-col justify-center px-10">
        <nav className="flex justify-between w-full max-w-6xl py-6 pt-[53px]">
          <h1 className=" text-gray-400 text-lg font-semibold">APPSTORE.UZ <br />Uzbekistan</h1>
          <ul className="flex space-x-6">
            <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">Home</li>
            <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">Gallery</li>
            <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">News</li>
            <li className="text-gray-400 hover:text-white hover:underline cursor-pointer">About us</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">🛒</li>
          </ul>
        </nav>

        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-7xl font-bold mt-[250px]">iPhone 12 pro</h2>
            <p className="text-gray-400 w-[460px] mt-[31px]">
              The iPhone 12 Pro and iPhone 12 Pro Max are part of Apple's latest generation of smartphones,
              offering 5G connectivity, the A14 chip for better performance.
            </p>
            <div className="mt-40 flex space-x-20 ">
              <button className="bg-linear-to-r from-[#6EADE8] to-[#2200F0] px-10 py-4 text-white rounded-2xl">Order now</button>
              <button className="border border-gray-400 px-10 py-4 text-white rounded-2xl">Learn more</button>
            </div>
            <ul className="flex space-x-6 mt-[183px]">
              <li className="group text-gray-400 hover:text-white cursor-pointer">
                <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-blue-500">01</span>
              </li>
              <li className="group text-gray-400 hover:text-white cursor-pointer">
                <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-blue-500">02</span>
              </li>
              <li className="group text-gray-400 hover:text-white cursor-pointer">
                <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-blue-500">03</span>
              </li>
              <li className="group text-gray-400 hover:text-white cursor-pointer">
                <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-blue-500">04</span>
              </li>
              <li><img src={first} className="w-[20px] mt-[4px]" /></li>
              <li><img src={second} className="w-[20px] mt-[3px]" /></li>
            </ul>

          </div>

          <div className="flex justify-center">
            <img
              src={phone}
              alt="iPhone 12 Pro"
            />
          </div>
        </div>



      </div>
    </div>


  );
}

export default App;
