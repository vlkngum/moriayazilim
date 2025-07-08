"use client";

import "@/app/globals.css";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Volkan Gümüş",
      role: "Kurucu & CEO",
      image: "/team/volkan.png",
      description: "10+ yıllık sektör deneyimi ile projelerin başarıyla tamamlanmasını sağlıyor.",
      href: "https://www.linkedin.com/in/volkan-g%C3%BCm%C3%BC%C5%9F-987617304/",
    },
    {
      name: "Yahya Sevinç",
      role: "Teknik Direktör",
      image: "/team/yahya.png",
      description: "Teknik ekibin lideri olarak projelerin kalitesini garanti ediyor.",
      href: "https://www.linkedin.com/in/yahya-emin-sevin%C3%A7-00280625a/",
    },
    {
      name: "Efe Mert Cabaoğlu",
      role: "Proje Yöneticisi",
      image: "/team/efe.png",
      description: "Projelerin zamanında ve bütçe dahilinde tamamlanmasını sağlıyor.",
      href: "https://www.linkedin.com/in/efe-mert-cabao%C4%9Flu-a72585303/",
    },
    {
      name: "SİKKO",
      role: "",
      image: "/team/sikko.png",
      description: "",
      href: "https://www.linkedin.com/in/efe-mert-cabao%C4%9Flu-a72585303/",
    }
  ];

  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  return (
    <div className="min-h-screen bg-white">
      

      {/* Mission & Vision Section - Card Tasarım */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {[{
            key: 'mission',
            title: 'Misyonumuz',
            desc: 'Müşterilerimize en yüksek kalitede hizmet sunarak, teknoloji ve inovasyonu bir araya getiriyoruz. Her projemizde sürdürülebilirlik ve müşteri memnuniyetini ön planda tutuyoruz.'
          }, {
            key: 'vision',
            title: 'Vizyonumuz',
            desc: 'Sektörde öncü, yenilikçi ve güvenilir bir marka olarak, dijital dönüşümde ilham kaynağı olmayı hedefliyoruz. Teknolojiyi insan odaklı çözümlerle buluşturarak, sürdürülebilir başarıya ulaşmak vizyonumuzdur.'
          }].map((item) => (
            <motion.button
              key={item.key}
              onClick={() => setActiveTab(item.key as 'mission' | 'vision')}
              type="button"
              whileHover={{ scale: 1.04, boxShadow: '0px 8px 32px #a21caf22' }}
              whileTap={{ scale: 0.98 }}
              animate={activeTab === item.key ? { scale: 1.08, boxShadow: '0px 12px 40px #a21caf33', backgroundColor: '#faf5ff', borderColor: '#a21caf' } : { scale: 1, boxShadow: '0px 2px 8px #aaa2', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`flex-1 min-w-[220px] max-w-md p-8 rounded-2xl border-2 outline-none focus:ring-2 focus:ring-fuchsia-400 cursor-pointer text-left relative overflow-hidden transition-all duration-300 ${activeTab === item.key ? 'text-fuchsia-900 font-bold' : 'text-gray-500 font-semibold'}`}
              style={{ zIndex: activeTab === item.key ? 2 : 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl mb-4">{item.title}</h2>
                <p className="text-base md:text-lg leading-relaxed">{item.desc}</p>
                {activeTab === item.key && (
                  <motion.div layoutId="active-underline" className="h-1 w-16 bg-fuchsia-700 rounded-full mt-6" />
                )}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full mx-auto px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Ekibimiz
          </motion.h2>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 px-[10%]">
            {teamMembers.map((member, index) => (
              <a
                href={member.href}
                target="_blank"
                rel="noopener noreferrer"
                key={member.name}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-fuchsia-800 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 tracking-tight text-black drop-shadow-lg"
        >
          Değerlerimiz
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 cu">
          {[
            {
              title: "Yenilikçilik",
              description: "Sürekli gelişim ve yenilikçi çözümler üretiyoruz.",
              icon: (
                <svg className="mx-auto mb-4 h-12 w-12 text-fuchsia-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
              )
            },
            {
              title: "Kalite",
              description: "Her projede en yüksek kalite standartlarını hedefliyoruz.",
              icon: (
                <svg className="mx-auto mb-4 h-12 w-12 text-fuchsia-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a1.5 1.5 0 012.04 0l1.518 1.36a1.5 1.5 0 001.06.44h1.8a1.5 1.5 0 011.5 1.5v1.8a1.5 1.5 0 00.44 1.06l1.36 1.518a1.5 1.5 0 010 2.04l-1.36 1.518a1.5 1.5 0 00-.44 1.06v1.8a1.5 1.5 0 01-1.5 1.5h-1.8a1.5 1.5 0 00-1.06.44l-1.518 1.36a1.5 1.5 0 01-2.04 0l-1.518-1.36a1.5 1.5 0 00-1.06-.44h-1.8a1.5 1.5 0 01-1.5-1.5v-1.8a1.5 1.5 0 00-.44-1.06l-1.36-1.518a1.5 1.5 0 010-2.04l1.36-1.518a1.5 1.5 0 00.44-1.06v-1.8a1.5 1.5 0 011.5-1.5h1.8a1.5 1.5 0 001.06-.44l1.518-1.36z" /></svg>
              )
            },
            {
              title: "Güven",
              description: "Müşterilerimizle güvene dayalı ilişkiler kuruyoruz.",
              icon: (
                <svg className="mx-auto mb-4 h-12 w-12 text-fuchsia-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3V7a3 3 0 10-6 0v1c0 1.657 1.343 3 3 3zm6 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5a6 6 0 1112 0z" /></svg>
              )
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 cursor-pointer rounded-2xl bg-gradient-to-br from-fuchsia-50 to-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-fuchsia-100"
            >
              {value.icon}
              <h3 className="text-2xl font-extrabold mb-3 text-fuchsia-800 tracking-tight drop-shadow-sm">{value.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
