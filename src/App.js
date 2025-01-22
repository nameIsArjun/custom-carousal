import React from 'react';
import EmblaCarousel from './EmblaCarousal';
import './embla.css'; // Keep Embla's default styles

// Sample images and data
const slides = [
  { id: 1, src: 'https://picsum.photos/id/1/200/300', title: 'Slide 1' },
  { id: 2, src: 'https://picsum.photos/id/2/200/300', title: 'Slide 2' },
  { id: 3, src: 'https://picsum.photos/id/3/200/300', title: 'Slide 3' },
  { id: 4, src: 'https://picsum.photos/id/4/200/300', title: 'Slide 4' },
];

function App() {
  
  // Manual 
  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default App;
