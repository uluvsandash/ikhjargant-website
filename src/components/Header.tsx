import { motion } from 'motion/react';

const navItems = [
  { id: 'intro', label: 'Төслийн танилцуулга' },
  { id: 'layouts', label: 'Өрөөний зохион байгуулалт' },
  { id: 'layouts', label: 'Давхрын зохион байгуулалт' },
  { id: 'contact', label: 'Холбоо барих' },
];

export default function Header() {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src="/images/logo.png.png"
            alt="Их Жаргант ХХК лого"
            className="w-10 h-10 rounded-full object-cover shrink-0"
          />
          <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight whitespace-nowrap">Гэрэл Апартмент</span>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-4 lg:gap-6"
        >
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-gray-600 hover:text-beige-600 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
