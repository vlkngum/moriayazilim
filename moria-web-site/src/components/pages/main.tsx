import Header_Long from "../components/header_long";

import Portfolio_Cut from '../components/pages_cut';

import ScrollVelocity from '../../utils/ScrollVelocity/ScrollVelocity';

export default function Main() {
    return (
      <main className="bg-white"> 
        <Header_Long/>

        <Portfolio_Cut/>

        

        
        <div className="relative w-full h-[30lvh] flex flex-col p-4 justify-center">
          <ScrollVelocity
            texts={['VOLKAN GUMUS YAHYA SEVINC TUNA AKTAS', 'SALIM OZturk EFE CABAOGLU MERIC KIZILSU']} 
            velocity={100} 
            className="custom-scroll-text"
          />
        </div>
      </main>
    );
}
