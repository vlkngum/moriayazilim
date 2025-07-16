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
  // {
  //   name: "Portfolyomuz",
  //   path: "/portfolio",
  //   description: "Tamamlanan projeler"
  // },
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
    name: "Instagram",
    url: "https://www.instagram.com/moriayazilim",
    icon: "FaInstagram",
    color: "hover:text-pink-600"
  },
  {
    name: "E-Posta",
    url: "mailto:moriayazilim.com",
    icon: "MdEmail",
    color: "hover:text-black"
  },
  
];

export const contactInfo = {
  phone: "0551 966 78 36",
  email: "iletisim@moriayazilim.com",
  address: "İstanbul, Türkiye",
  workingHours: "Pazartesi - Cuma: 09:00 - 18:00"
}; 