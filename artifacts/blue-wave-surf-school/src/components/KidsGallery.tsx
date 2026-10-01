import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { KIDS_PHOTOS } from '../lib/blue-wave';

export default function KidsGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const openPhoto = (index: number) => {
    setActivePhoto(index);
    dialogRef.current?.showModal();
  };
  const movePhoto = (direction: number) => {
    setActivePhoto((current) => (current + direction + KIDS_PHOTOS.length) % KIDS_PHOTOS.length);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') movePhoto(-1);
      if (event.key === 'ArrowRight') movePhoto(1);
    };
    dialog.addEventListener('keydown', handleKeys);
    return () => dialog.removeEventListener('keydown', handleKeys);
  }, []);

  return (
    <>
      <div className="kids-mini" aria-label="Photos from kids surf sessions">
        {KIDS_PHOTOS.slice(0, 3).map((photo, index) => (
          <button key={photo.src} type="button" onClick={() => openPhoto(index)} aria-label={`Enlarge photo: ${photo.caption}`} data-testid={`button-kids-photo-${index}`}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <div className="kids-actions">
        <button className="button button-dark" type="button" onClick={() => openPhoto(0)}>View kids photos <ArrowUpRight size={15} /></button>
        <span className="kids-caption">4 photographs · Jack Beach</span>
      </div>
      <dialog
        ref={dialogRef}
        className="photo-dialog"
        aria-label="Kids class photo gallery"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="lightbox">
          <button className="lightbox-close" type="button" aria-label="Close photo viewer" onClick={() => dialogRef.current?.close()}><X size={19} /></button>
          <button type="button" aria-label="Previous photo" onClick={() => movePhoto(-1)}><ArrowLeft size={19} /></button>
          <figure>
            <img src={KIDS_PHOTOS[activePhoto].src} alt={KIDS_PHOTOS[activePhoto].alt} />
            <figcaption>{KIDS_PHOTOS[activePhoto].caption} · {activePhoto + 1} / {KIDS_PHOTOS.length}</figcaption>
          </figure>
          <button type="button" aria-label="Next photo" onClick={() => movePhoto(1)}><ArrowRight size={19} /></button>
        </div>
      </dialog>
    </>
  );
}