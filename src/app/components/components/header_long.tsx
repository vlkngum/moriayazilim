export default function Header_Short() {
   
  return (
    <div 
      style={{ backgroundImage: `url('/main.png')` }}
      className="relative w-full h-screen object-cover bg-cover bg-center flex items-center"
    >
      <div className="flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-2xl md:text-4xl font-semibold px-[20%]">
          Dijital dünyada markanızı öne çıkarmak için profesyonel web tasarım ve geliştirme hizmetleri sunuyoruz. Modern, kullanıcı dostu ve SEO uyumlu web siteleri ile işinizi büyütün.
        </h2>
        <button  
          className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition text-xl shadow-xl shadow-black"
        >
          Teklif Al
        </button>
        
      </div>
    </div>
  );
}