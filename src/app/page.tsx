import DreamSection from  "@/app/components/main/DreamSection";

import Portfolio_Cut from '@/app/components/main/pages_cut';

import Our_Services from '@/app/components/main/our_services';

import ScrollVelocity from  "@/app/utils/ScrollVelocity/ScrollVelocity";

import { motion } from "framer-motion";

export default function IndexPage() {
 

  return (
   
    
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between max-w-full overflow-hidden">
  
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <DreamSection/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Portfolio_Cut/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Our_Services/>
      </motion.div>

      <motion.div 
        className="relative w-full h-[30lvh] flex flex-col p-4 justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ScrollVelocity
          texts={['VOLKAN GUMUS YAHYA SEVINC TUNA AKTAS', 'SALIM OZturk EFE CABAOGLU MERIC KIZILSU']} 
          velocity={100} 
          className="custom-scroll-text"
        />
      </motion.div>
    </div>
 
  );
}
