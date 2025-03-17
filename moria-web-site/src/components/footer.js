export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center border-t border-black">
        
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        <nav className="flex space-x-6 text-gray-800 font-medium">
          <a href="#">Anasayfa</a>
          <a href="#">Hakkımızda</a>
          <a href="#">Portfolyomuz</a>
          <a href="#">İletişim</a>
        </nav>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-500">
            <i className="fab fa-youtube text-2xl">G</i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-500">
            <i className="fab fa-twitter text-2xl">F</i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-500">
            <i className="fab fa-facebook text-2xl">X</i>
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-500">
            <i className="fab fa-instagram text-2xl">İ</i>
          </a>
        </div>
      </div>

      
    </footer>
  );
}
