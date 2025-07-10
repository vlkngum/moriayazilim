import { FiArrowRight } from "react-icons/fi"; 

export default function Header_Short() {
    

  return (
    <div 
      style={{ backgroundImage: `url('/main.jpg')` }}
      className="relative w-full h-screen object-cover bg-cover bg-center flex items-center pt-20 md:pt-0"
    >
      <div className="flex flex-col justify-center items-center text-center text-white px-2 w-full h-full md:bg-transparent md:w-auto md:h-auto">
        <h2 className="text-3xl font-extrabold leading-tight mb-4 md:text-6xl md:font-semibold md:px-[10%] px-[2%] md:mb-10" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
        Hayalindeki projeyi birlikte hayata geçirelim. Moria Yazılım, güçlü ve yenilikçi çözümlerle her zaman yanında!
        </h2>
        <button
          className="px-10 py-2 bg-blue-700 cursor-pointer text-white rounded-md hover:bg-blue-800 transition text-2xl shadow-md shadow-black flex items-center justify-center  md:mt-4 md:w-auto md:max-w-none"
         
        >
          Teklif Al
          <span className="ml-2 flex items-center text-md">
            <FiArrowRight />
          </span>
        </button> 
      </div>
    </div>
  );
}