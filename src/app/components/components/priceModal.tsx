'use client';
import {useState } from 'react';

import { IoCheckmarkCircle, IoCloseSharp  } from "react-icons/io5";

export default function PricingTable() {


  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;
    const plans = [
      {
        name: "Basit Plan",
        price: "1000 TL",
        recommended: false,
        features: [true, true, true, true, true, false, false, false, false, false],
      },
      {
        name: "Orta Plan",
        price: "2250 TL",
        recommended: true,
        features: [true, true, true, true, true, true, true, true, false, false],
      },
      {
        name: "Yüksek Plan",
        price: "3500 TL",
        recommended: false,
        features: [true, true, true, true, true, true, true, true, true, true],
      },
    ];
  
    return (
      <div className="fixed top-0 w-full z-50 bg-black/40 min-h-screen flex items-center justify-center gap-6" onClick={closeModal} >
        {plans.map((plan, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-xl p-6 w-96 gap-6 text-black items-start text-start">
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-black text-white text-md px-3 py-1 rounded-tr-xl rounded-bl-xl">
                *Önerilen
              </div>
            )}
            <h2 className="text-3xl font-semibold">{plan.name}</h2>
            <p className="text-xs text-gray-600">Düşük Bütçe için önerilen paketimizdir.</p>
            <p className="text-3xl font-bold mt-2">{plan.price}</p>
            <button className="bg-fuchsia-800 text-white w-full py-2 rounded-lg mt-4 hover:bg-fuchsia-900">
              Bilgi Al
            </button>
            <hr className="my-4 border-1 rounded-2xl" />
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 mb-4">
                  {feature ? (
                    <IoCheckmarkCircle color="#76AA20" className="text-2xl"/>
                  ) : (
                    <IoCloseSharp color="#000000" className="text-2xl"/>
                  )}
                  Web sitesi hizmeti
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }