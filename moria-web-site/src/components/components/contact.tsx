
export default function Contact () {

return(
        <div className="relative w-full h-[80vh] flex items-center justify-center p-4 ">
          <div className="w-full h-full flex flex-row items-center justify-center  rounded-xl border border-gray-300">
          {/* Form Alanı */}
          <div className="flex flex-col justify-center h-full w-[40%] px-8 py-10 gap-6 rounded-bl-xl rounded-tl-">
            
            <input
              type="text"
              placeholder="Adınız"
              className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200"
            />
            <input
              type="email"
              placeholder="E-posta"
              className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200"
            />
            <input
              type="text"
              placeholder="Konu"
              className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200"
            />
            <textarea
              placeholder="Mesajınız"
              className="bg-white text-gray-700 border-b border-gray-600 focus:outline-none focus:border-black px-4 py-2 transition duration-200 "
            ></textarea>

            <button className="bg-fuchsia-800 text-white py-3 rounded-md hover:bg-fuchsia-900 transition duration-200 shadow-xl shadow-gray-700 mt-8 text-2xl">
              Gönder
            </button>
          </div>

          {/* Görsel Alanı */}
          <div className="h-full w-[60%] bg-cover bg-center rounded-br-xl rounded-tr-xl items-top justify-center flex px-10 py-20"
            style={{ backgroundImage: `url('/contactbg.jpg')` }}
            >
            <h2 className="text-8xl font-semibold text-white text-center opacity-80">Bize Ulaşın</h2>
          </div>
          </div>
        </div>

);

}

