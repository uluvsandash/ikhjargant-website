import { motion } from 'motion/react';

const navItems = [
  { id: 'intro', label: 'Төслийн танилцуулга' },
  { id: 'layouts', label: 'Өрөөний зохион байгуулалт' },
  { id: 'calculator', label: 'Үнийн тооцоолол' },
  { id: 'contact', label: 'Холбоо барих' },
];

export default function Navigation() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-beige-50 py-6 sticky top-20 z-40 border-b border-beige-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollTo(item.id)}
                className="px-6 py-3 rounded-full bg-white text-beige-900 font-medium shadow-sm hover:shadow-md hover:bg-beige-100 transition-all duration-300 active:scale-95"
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
