export default function Header_Short() {
   
  return (
    <div 
      style={{ backgroundImage: `url('/main.png')` }}
      className="relative w-full h-screen object-cover bg-cover bg-center flex items-center"
    >
      <div className="flex flex-col justify-center items-center text-center text-white px-2 w-full h-full md:bg-transparent md:w-auto md:h-auto">
        <h2 className="text-3xl font-extrabold leading-tight mb-4 md:text-4xl md:font-semibold md:px-[20%] md:mb-0" style={{textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </h2>
        <button  
          className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition text-base font-bold shadow-md shadow-black flex items-center justify-center md:text-xl md:mt-4 md:w-auto md:max-w-none"
        >
          Teklif Al! <span className='ml-2'>→</span>
        </button>
      </div>
    </div>
  );
}