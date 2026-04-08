import { useState } from 'react';
import { motion } from 'motion/react';
import LayoutModal from './LayoutModal';

export interface LayoutData {
  id: number;
  name: string;
  size: number;
  description: string;
  image: string;
  features: string[];
  views: string;
  pricePerSq: number;
}

const layouts: LayoutData[] = [
  { id: 0, name: 'Давхрын ерөнхий зохион байгуулалт', size: 0, description: 'Нэг давхарт байрлах бүх өрөөний нэгдсэн зохион байгуулалт.', image: '/images/floor-plan.jpg.png', features: ['Нийт 7 айл', '2 лифт', 'Орчин үеийн коридор'], views: 'Бүх зүг рүү', pricePerSq: 0 },
  { id: 1, name: 'Байрлал А - 2 өрөө', size: 41.1, description: 'Орчин үеийн шийдэлтэй, тав тухтай 2 өрөө байр.', image: '/images/layout-a.jpg.png', features: ['Унтлагын өрөө - 1', 'Зочны өрөө болон гал тогоо - 1', 'Ариун цэврийн өрөө - 1', 'Тагт - 1'], views: 'Хойшоо харсан 2 цонх, тагт зүүн тийшээ', pricePerSq: 3590000 },
  { id: 2, name: 'Байрлал B - 2 өрөө', size: 43.23, description: 'Орчин үеийн шийдэлтэй, тав тухтай 2 өрөө байр.', image: '/images/layout-b.jpg.png', features: ['Унтлагын өрөө - 1', 'Зочны өрөө болон гал тогоо - 1', 'Ариун цэврийн өрөө - 1', 'Тагт - 1'], views: 'Зүүн тийшээ харсан 2 цонх, тагт зүүн тийшээ', pricePerSq: 3590000 },
  { id: 3, name: 'Байрлал C - 2 өрөө', size: 48.52, description: 'Орчин үеийн шийдэлтэй, тав тухтай 2 өрөө байр.', image: '/images/layout-c.jpg.png', features: ['Унтлагын өрөө - 1', 'Зочны өрөө болон гал тогоо - 1', 'Ариун цэврийн өрөө - 1', 'Тагт - 1'], views: 'Зүүн тийш харсан 2 цонхтой, тагт урагшаа харсан', pricePerSq: 3590000 },
  { id: 4, name: 'Байрлал D - 2 өрөө', size: 38.38, description: 'Орчин үеийн шийдэлтэй, тав тухтай 2 өрөө байр.', image: '/images/layout-d.jpg.png', features: ['Унтлагын өрөө - 1', 'Зочны өрөө болон гал тогоо - 1', 'Ариун цэврийн өрөө - 1', 'Тагт - 1'], views: '2 цонх урагшаа харсан, тагт урагшаа харсан', pricePerSq: 3590000 },
  { id: 5, name: 'Байрлал E - 2 өрөө', size: 49.06, description: 'Орчин үеийн шийдэлтэй, тав тухтай 2 өрөө байр.', image: '/images/layout-e.jpg.png', features: ['Унтлагын өрөө - 1', 'Зочны өрөө болон гал тогоо - 1', 'Ариун цэврийн өрөө - 1', 'Тагт - 1'], views: '2 цонх урагшаа харсан, тагт баруун тийш харсан', pricePerSq: 3590000 },
  { id: 6, name: 'Байрлал F - 2 өрөө', size: 43.23, description: 'Орчин үеийн шийдэлтэй, тав тухтай 2 өрөө байр.', image: '/images/layout-f.jpg.png', features: ['Унтлагын өрөө - 1', 'Зочны өрөө болон гал тогоо - 1', 'Ариун цэврийн өрөө - 1', 'Тагт - 1'], views: '2 цонх баруун тийшээ харсан, тагт баруун тийш харсан', pricePerSq: 3590000 },
  { id: 7, name: 'Байрлал G - 2 өрөө', size: 41.82, description: 'Орчин үеийн шийдэлтэй, тав тухтай 2 өрөө байр.', image: '/images/layout-g.jpg.png', features: ['Унтлагын өрөө - 1', 'Зочны өрөө болон гал тогоо - 1', 'Ариун цэврийн өрөө - 1', 'Тагт - 1'], views: '1 цонх баруун тийш, 1 цонх хойшоо харсан, тагт хойшоо харсан', pricePerSq: 3590000 },
];

export default function RoomLayouts() {
  const [selectedLayout, setSelectedLayout] = useState<LayoutData | null>(null);

  return (
    <section id="layouts" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Давхрын болон өрөөний зохион байгуулалт</h2>
          <div className="w-24 h-1 bg-beige-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Та өөрийн гэр бүлийн хэрэгцээ шаардлагад нийцүүлэн манай 7 төрлийн зохион байгуулалтаас сонголтоо хийх боломжтой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {layouts.map((layout, index) => (
            <LayoutCard key={layout.id} layout={layout} index={index} onClick={() => setSelectedLayout(layout)} />
          ))}
        </div>
      </div>

      <LayoutModal layout={selectedLayout} onClose={() => setSelectedLayout(null)} />
    </section>
  );
}

function LayoutCard({ layout, index, onClick }: { key?: number | string; layout: LayoutData; index: number; onClick: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={layout.image} 
          alt={layout.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {layout.size > 0 && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-beige-700">
            {layout.size} м²
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{layout.name}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow">{layout.description}</p>
        <div className="flex justify-end mt-auto">
          {layout.pricePerSq > 0 ? (
            <button 
              className="px-6 py-2 bg-beige-500 hover:bg-beige-600 text-white rounded-full font-medium transition-colors duration-300 active:scale-95 flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              Тооцоолол
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          ) : (
            <button 
              className="px-6 py-2 bg-beige-100 hover:bg-beige-200 text-beige-800 rounded-full font-medium transition-colors duration-300 active:scale-95 flex items-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
            >
              Дэлгэрэнгүй
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
