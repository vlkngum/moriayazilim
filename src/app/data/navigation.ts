export interface NavigationItem {
  name: string;
  path: string;
  description?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    name: "Anasayfa",
    path: "/",
    description: "Ana sayfa"
  },
  {
    name: "Hakkımızda",
    path: "/about",
    description: "Şirket hakkında bilgiler"
  },
  {
    name: "Portfolyomuz",
    path: "/portfolio",
    description: "Tamamlanan projeler"
  },
  {
    name: "Fiyatlandırma",
    path: "/pricing",
    description: "Paket fiyatları"
  },
  {
    name: "İletişim",
    path: "/contact",
    description: "İletişim bilgileri"
  }
];

export const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/moriayazilim",
    icon: "FaLinkedin",
    color: "hover:text-blue-500"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/moriayazilim",
    icon: "FaInstagram",
    color: "hover:text-pink-600"
  },
  {
    name: "E-Posta",
    url: "iletisim@moriayazilim.com",
    icon: "MdEmail",
    color: "hover:text-black"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@moriayazilim",
    icon: "FaYoutube",
    color: "hover:text-red-600"
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/moriayazilim",
    icon: "FaXTwitter",
    color: "hover:text-black"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/905555555555",
    icon: "FaWhatsapp",
    color: "hover:text-green-600"
  },
  
];

export const contactInfo = {
  phone: "0551 966 78 36",
  email: "iletisim@moriayazilim.com",
  address: "İstanbul, Türkiye",
  workingHours: "Pazartesi - Cuma: 09:00 - 18:00"
}; 