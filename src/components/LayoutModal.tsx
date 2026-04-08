import { motion, AnimatePresence } from 'motion/react';
import { LayoutData } from './RoomLayouts';
import { X, CheckCircle2, Calculator } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

interface LayoutModalProps {
  layout: LayoutData | null;
  onClose: () => void;
}

export default function LayoutModal({ layout, onClose }: LayoutModalProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [imgScale, setImgScale] = useState(1);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const imgPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (layout) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [layout]);

  useEffect(() => {
    setImgScale(1);
    setImgPos({ x: 0, y: 0 });
    imgPosRef.current = { x: 0, y: 0 };
  }, [layout]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX - imgPosRef.current.x, y: e.clientY - imgPosRef.current.y };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const newPos = { x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y };
    imgPosRef.current = newPos;
    setImgPos(newPos);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setImgScale(prev => Math.min(Math.max(prev - e.deltaY * 0.005, 0.5), 5));
  }, []);

  if (!layout) return null;

  const LOAN_MONTHS = 36;
  const totalPrice = layout.size * layout.pricePerSq;
  const downPayment = totalPrice * (downPaymentPercent / 100);
  const loanAmount = totalPrice - downPayment;
  const monthlyPayment = loanAmount / LOAN_MONTHS;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="overflow-y-auto flex-grow">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[500px]">
              <div
                className="relative overflow-hidden bg-beige-50 flex items-center justify-center"
                style={{
                  cursor: isDragging ? 'grabbing' : imgScale > 1 ? 'grab' : 'zoom-in',
                  minHeight: '320px',
                  height: '100%',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
              >
                <img
                  src={layout.image}
                  alt={layout.name}
                  draggable={false}
                  style={{
                    transform: `translate(${imgPos.x}px, ${imgPos.y}px) scale(${imgScale})`,
                    transformOrigin: 'center center',
                    transition: isDragging ? 'none' : 'transform 0.15s ease',
                    userSelect: 'none',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="text-xs text-gray-400 bg-white/70 rounded px-2 py-1">
                    Scroll — томруул / жижигсгэ · Чирэх — хөдлүүл
                  </span>
                  {imgScale > 1 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setImgScale(1); setImgPos({ x: 0, y: 0 }); imgPosRef.current = { x: 0, y: 0 }; }}
                      className="pointer-events-auto px-2 py-1 bg-white/80 hover:bg-white rounded-lg text-xs text-gray-600 transition-colors"
                    >
                      Анхны байрлал
                    </button>
                  )}
                </div>
              </div>

              <div className="p-8 lg:p-10 space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-3xl font-bold text-gray-900">{layout.name}</h2>
                    <span className="px-4 py-1.5 bg-beige-100 text-beige-800 rounded-full font-bold text-lg">
                      {layout.size} м²
                    </span>
                  </div>
                  <p className="text-gray-600">{layout.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Цонхны харууц</h4>
                    <ul className="space-y-2">
                      {layout.views.split(', ').map((view, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={16} className="text-beige-500 mt-0.5 shrink-0" />
                          <span>{view}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Онцлог</h4>
                    <ul className="space-y-2">
                      {layout.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={16} className="text-beige-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {layout.pricePerSq > 0 && (
                  <div className="border-t border-gray-100 pt-8" id="calculator">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Calculator className="text-beige-500" />
                      Зээлийн тооцоолол
                    </h3>

                    <div className="space-y-6 bg-beige-50 p-6 rounded-2xl">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Урьдчилгаа төлбөр ({downPaymentPercent}%)</span>
                          <span className="font-bold text-gray-900">{downPayment.toLocaleString()} ₮</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="100"
                          step="10"
                          value={downPaymentPercent}
                          onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                          className="w-full accent-beige-500"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>20%</span>
                          <span>100%</span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-beige-200">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Нийт үнэ:</span>
                          <span className="font-bold text-gray-900">{totalPrice.toLocaleString()} ₮</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Зээлэх дүн:</span>
                          <span className="font-bold text-beige-700">{loanAmount.toLocaleString()} ₮</span>
                        </div>
                        <div className="flex justify-between text-sm pt-3 border-t border-beige-200">
                          <span className="text-gray-600">Сар тутмын төлбөр ({LOAN_MONTHS} сар):</span>
                          <span className="font-bold text-gray-900">{Math.ceil(monthlyPayment).toLocaleString()} ₮</span>
                        </div>
                      </div>

                      <button className="w-full py-3 bg-beige-600 hover:bg-beige-700 text-white rounded-xl font-medium transition-colors active:scale-[0.98]">
                        Захиалах
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
