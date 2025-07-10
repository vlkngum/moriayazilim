import React from "react";
import Image from "next/image";

const DreamSection: React.FC = () => {
  const DREAM_DATA = {
    title: {
      subtitle: "Nasıl Başladık?",
      mainTitle: "Hayal, Tutku ve \nKodlarla \nMoria'nın Doğuşu"
    },
    description: {
      mobile: "Hayal ve tutku ile başlayan yolculuğumuzda, küçük bir ekip olarak ilk projelerimizi büyük bir heyecanla geliştirdik. Bugün hâlâ aynı tutkuyla çalışıyoruz.",
      desktop: "Moria Yazılım, birkaç gencin yazılıma duyduğu tutku ve hayallerle doğdu.Kod yazmak bizim için sadece iş değil, bir yaşam biçimiydi. Küçük bir odada, eski bilgisayarlarla ilk projelerimizi geliştirdik. İmkânlarımız kısıtlıydı ama heyecanımız ve öğrenme isteğimiz sonsuzdu. Geceleri kod yazar, gündüzleri araştırırdık; çok şey öğrendik, hatalar yaptık ama yılmadık. Her deneme bizi geliştirdi. Zamanla küçük işler aldık, ilk müşterilerimiz bize güvendi. Bu güvenle ekibimizi büyüttük. Amacımız hep kaliteli ve hızlı çözümler sunmaktı. Her satır kodda bir hayali gerçeğe dönüştürüyoruz. Bugün hâlâ ilk günkü heyecanla çalışıyoruz. Moria ismini hayal gücümüzden aldık. Sadece yazılım değil, bir vizyon kuruyoruz. Sabır ve azimle her şeyin mümkün olduğunu öğrendik. Artık daha güçlüyüz; bir ekip, bir aileyiz. Ve biliyoruz ki en güzel projelerimiz henüz gelmedi."
    },
    image: {
      src: "/about_us.jpg",
      alt: "Dream Section Görseli"
    },
    stats: [
      { value: "5+", label: "Yıllık Tecrübe" },
      { value: "20+", label: "Tamamlanan Proje" },
      { value: "10+", label: "Mutlu Müşteri" },
      { value: "4", label: "Kişilik Ekip" },
    ]
  };

  return (
    <div className="w-full  p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Sol: Başlık ve Açıklama */}
        <div className="flex-1 bg-white shadow-lg border border-gray-200 rounded-2xl p-8  md:min-h-[70vh] flex flex-col h-full">
          <div>
            <div className="text-orange-500 text-xl mb-3">{DREAM_DATA.title.subtitle}</div>
            <div className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
              {DREAM_DATA.title.mainTitle}
            </div>
          </div>
          <p className="text-gray-700 text-base md:text-lg mt-auto whitespace-pre-line">
            <span className="block md:hidden">{DREAM_DATA.description.mobile}</span>
            <span className="hidden md:block">{DREAM_DATA.description.desktop}</span>
          </p>
        </div>

        {/* Sağ: Görsel + 2x2 Grid */}
        <div className="flex-1 flex flex-col gap-6 md:min-h-[70vh] bg-white shadow-lg border border-gray-200 rounded-2xl p-2">
          {/* Üst: Görsel */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-1/2 shadow-lg border border-gray-200 rounded-2xl overflow-hidden ">
            <Image
              src={DREAM_DATA.image.src}
              alt={DREAM_DATA.image.alt}
              className="w-full h-full object-cover"
              fill
              priority
            />
          </div>

          {/* Alt: 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 h-1/2">
            {DREAM_DATA.stats.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center h-full"
              >
                <span className="text-xl md:text-3xl font-bold">{card.value}</span>
                <span className="text-gray-600 mt-2 text-md md:text-xl">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamSection;
