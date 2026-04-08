import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-beige-100 text-beige-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png.png"
                alt="Их Жаргант ХХК лого"
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <span className="text-2xl font-bold tracking-tight">Их Жаргант ХХК</span>
            </div>
            <p className="text-beige-800 leading-relaxed">
              Их Жаргант ХХК нь 2003 онд байгуулагдсан цагаасаа эхлэн одоог хүртэл барилгын салбарт тасралтгүй тогтвортой үйл ажиллагаа явуулж байна. Энэ хугацаанд том жижиг нийт 23 төслийг амжилттай хэрэгжүүлсэн туршлагатай хамт олон юм.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-beige-700">Холбоо барих</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-beige-800">
                <MapPin className="text-beige-600 shrink-0 mt-1" size={20} />
                <span>Хан-Уул дүүрэг 16-р хороо, Буянт-Ухаа 1 хорооллын чанх хойно Гэрэл Апартмент</span>
              </li>
              <li className="flex items-center gap-3 text-beige-800">
                <Phone className="text-beige-600 shrink-0" size={20} />
                <span>8032-8888, 9896-3333</span>
              </li>
              <li className="flex items-center gap-3 text-beige-800">
                <Mail className="text-beige-600 shrink-0" size={20} />
                <span>info@ikhjargant.mn</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-beige-700">Сошиал холбоос</h3>
            <div className="flex flex-col gap-4">
              <a href="https://www.facebook.com/profile.php?id=61578257873658" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-beige-800 hover:text-beige-600 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-beige-200 flex items-center justify-center group-hover:bg-beige-500 group-hover:text-white transition-all duration-300">
                  <Facebook size={20} />
                </div>
                <span className="font-medium">Гэрэл Апартмент Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-beige-800 hover:text-beige-600 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full bg-beige-200 flex items-center justify-center group-hover:bg-beige-500 group-hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </div>
                <span className="font-medium">Гэрэл Апартмент Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beige-200 pt-8 text-center text-beige-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Их Жаргант ХХК. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}
