'use client';

import Link from 'next/link';
import { useState } from 'react';
import Modal from '@/components/components/priceModal';

export default function Header_Short() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div 
      style={{ backgroundImage: `url('/main.png')` }}
      className="relative w-full h-screen object-cover bg-cover bg-center flex items-center"
    >
      <div className="flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-2xl md:text-4xl font-semibold px-[20%]">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </h2>
        <button 
          onClick={openModal}
          className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition text-xl shadow-xl shadow-black"
        >
          Teklif Al
        </button>
        
      </div>
    </div>
  );
}