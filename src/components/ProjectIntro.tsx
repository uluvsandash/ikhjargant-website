import { motion } from 'motion/react';

export default function ProjectIntro() {
  return (
    <section id="intro" className="relative py-32 lg:py-48 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/building.jpg.png"
          alt="Төслийн 3D зураг"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Төслийн танилцуулга</h2>
          <div className="w-20 h-1 bg-beige-500 rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-gray-900 leading-relaxed mb-10">
            Их Жаргант ХХК-ий бүтээн босгож буй Гэрэл Апартмент нь 312 айлын 3 блок орон сууц юм. Төслийн эхний барилга нь 15 давхар 1-р давхартаа үйлчилгээний төвтэй 102 айлын орон сууц. Эхний блок ашиглалтад орох хугацаа 2026 оны 9-р сар.
          </p>
          <ul className="space-y-4 text-gray-900">
            <li className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-beige-500 shadow-[0_0_10px_rgba(184,149,91,0.8)]"></div>
              <span className="text-lg">Европ стандартын тоноглол</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-beige-500 shadow-[0_0_10px_rgba(184,149,91,0.8)]"></div>
              <span className="text-lg">24 цагийн харуул хамгаалалт</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-beige-500 shadow-[0_0_10px_rgba(184,149,91,0.8)]"></div>
              <span className="text-lg">Ногоон байгууламж, хүүхдийн тоглоомын талбай</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
