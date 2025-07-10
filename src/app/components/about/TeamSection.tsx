"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamSection() {
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
                  className="relative h-80"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
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
                  <p className="text-fuchsia-800 font-semibold mb-4">{member.role}</p>
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