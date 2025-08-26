// CaseStudyGallery.jsx
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/dist/styles.css";
import Zoom from "yet-another-react-lightbox/dist/plugins/zoom";
// Optional zoom plugin
// import Zoom from 'yet-another-react-lightbox/plugins/zoom';

export default function CaseStudyGallery({
  items = [
    { thumb: '/images/Returns1.png', full: '/images/Returns1.png', alt: 'Returns portal — dashboard' },
    { thumb: '/images/Returns2.png', full: '/images/Returns2.png', alt: 'List view' },
  ],
  thumbW = 600,
  thumbH = 360,
}) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="cs-gallery-grid">
        {items.map((img, i) => (
          <button key={i} className="cs-thumb-wrap" onClick={() => setIndex(i)} aria-label={`Open ${img.alt || 'image'}`}>
            <img
              className="cs-thumb"
              src={img.thumb}
              alt={img.alt || ''}
              width={thumbW}
              height={thumbH}
              style={{ width: thumbW, height: thumbH, objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={items.map(i => ({ src: i.full || i.thumb, alt: i.alt }))}
        plugins={[Zoom]}
      />
    </>
  );
}
