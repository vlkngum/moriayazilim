import React from "react";

const DreamSection: React.FC = () => {
  const cards = [
    { value: "5+", label: "Yıllık Tecrübe" },
    { value: "20+", label: "Tamamlanan Proje" },
    { value: "10+", label: "Mutlu Müşteri" },
    { value: "4", label: "Kişilik Ekip" },
  ];

  return (
    <div className="w-full bg-[#f6f6f6] shadow-lg p-4 md:p-8 shadow-md">
      <div className="flex flex-col lg:flex-row gap-6 lg:h-[90vh]">
        {/* Sol: Başlık ve Açıklama */}
        <div className="flex-1 bg-white shadow-lg border border-gray-200 rounded-2xl p-8 shadow flex flex-col h-full">
          <div>
            <div className="text-orange-500 text-xl font-semibold mb-4">Nasıl Başladık?</div>
            <div className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hayal, Tutku ve <br />
            Kodlarla Başlayan <br />
            Moria Yazılım’ın Doğuş Hikayesi
            </div>
          </div>
          <p className="text-gray-700 text-base md:text-lg mt-auto">
          Moria Yazılım, birkaç gencin yazılıma duyduğu tutku ve hayallerle doğdu.
Kod yazmak bizim için sadece iş değil, bir yaşam biçimiydi.
Küçük bir odada, eski bilgisayarlarla ilk projelerimizi geliştirdik.
İmkânlarımız kısıtlıydı ama heyecanımız ve öğrenme isteğimiz sonsuzdu.
Geceleri kod yazar, gündüzleri araştırırdık; çok şey öğrendik, hatalar yaptık ama yılmadık.
Her deneme bizi geliştirdi.
Zamanla küçük işler aldık, ilk müşterilerimiz bize güvendi.
Bu güvenle ekibimizi büyüttük.
Amacımız hep kaliteli ve hızlı çözümler sunmaktı.
Her satır kodda bir hayali gerçeğe dönüştürüyoruz.
Bugün hâlâ ilk günkü heyecanla çalışıyoruz.
Moria ismini hayal gücümüzden aldık.
Sadece yazılım değil, bir vizyon kuruyoruz.
Sabır ve azimle her şeyin mümkün olduğunu öğrendik.
Artık daha güçlüyüz; bir ekip, bir aileyiz.
Ve biliyoruz ki en güzel projelerimiz henüz gelmedi.
          </p>
        </div>

        {/* Sağ: Görsel + 2x2 Grid */}
        <div className="flex-1 flex flex-col gap-6 h-[90vh]">
          {/* Üst: Görsel */}
          <div className="w-full h-1/2 shadow-lg border border-gray-200 rounded-2xl overflow-hidden shadow">
            <img
              src="/about_us.jpg"
              alt="Dream Section Görseli"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Alt: 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 h-1/2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center h-full"
              >
                <span className="text-2xl font-bold">{card.value}</span>
                <span className="text-gray-600 mt-2">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamSection;
