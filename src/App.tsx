/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import ProjectIntro from './components/ProjectIntro';
import RoomLayouts from './components/RoomLayouts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-beige-200 selection:text-beige-900">
      <Header />
      <main className="pt-20">
        <ProjectIntro />
        <RoomLayouts />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
