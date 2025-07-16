"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Yahya Sevinç",
      role: "Arayüz Tasarımcısı",
      image: "/logo.png",
      description: "Kullanıcı dostu, estetik ve işlevsel arayüzler oluşturarak dijital deneyimi en üst seviyeye taşıyor.",
      href: "mailto:yahya@moriayazilim.com",
    },
    {
      name: "Volkan Gümüş",
      role: "Full-Stack Developer",
      image: "/logo.png",
      description: "Tasarımı modern web teknolojileriyle hayata geçirerek tüm cihazlarda sorunsuz çalışan arayüzler sunuyor.",
      href: "mailto:volkan@moriayazilim.com",
    },
    {
      name: "Efe Mert Cabaoğlu",
      role: "Backend Geliştirici",
      image: "/logo.png",
      description: "Veri güvenliği ve sistem performansını ön planda tutarak güçlü ve ölçeklenebilir altyapılar geliştiriyor.",
      href: "mailto:efe@moriayazilim.com",
    },
    {
      name: "Salim Öztürk",
      role: "Grafik Tasarımcı",
      image: "/logo.png",
      description: "Marka kimliğini yansıtan yaratıcı görseller ve özgün tasarımlar üreterek projelere estetik değer katıyor.",
      href: "mailto:salim@moriayazilim.com",
    }
  ];

  return (
    <section className="py-20">
      <div className="w-full mx-auto px-4 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Ekibimiz
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 px-[10%]"
        >
          {teamMembers.map((member, index) => (
            <a
              href={member.href}
              target="_blank"
              rel="noopener noreferrer"
              key={member.name}
              className="block"
            >
               <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: '0px 20px 40px #2563eb55'
                  }}
                  transition={{ 
                    duration: 0.6, 
                    type: 'spring',
                    stiffness: 100,
                    y: { duration: 0.15, type: 'spring', stiffness: 400 },
                    scale: { duration: 0.15, type: 'spring', stiffness: 400 }
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                >
                <motion.div 
                  className="relative h-80 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale opacity-80 p-4 group-hover:grayscale-0 scale-100 group-hover:scale-105 shadow-none group-hover:shadow-xl transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#1c398e] font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 