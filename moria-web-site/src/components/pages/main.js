export default function Main() {
    return (
      <main className="bg-white"> 
        <div className="relative w-full h-screen bg-black">
          <img src="/main.png" alt="Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-2xl md:text-4xl font-semibold px-[20%]">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </h2>
            <button className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition ">
              Teklif Al
            </button>
          </div>
        </div>
      </main>
    );
  }
  