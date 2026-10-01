import KidsGallery from './KidsGallery';
import KidsRegistration from './KidsRegistration';

export default function KidsSection() {
  return (
    <section className="section kids" id="kids" aria-labelledby="kids-title">
      <div className="section-index"><span>04</span> / KIDS CLASSES</div>
      <div className="kids-head">
        <div>
          <p className="kicker">SURF FOR THE LITTLE ONES</p>
          <h2 id="kids-title">Little surfers,<br />big smiles.</h2>
        </div>
        <p>Patient coaching on the sand and in the water. Take a look at a kids class, then register your child directly below.</p>
      </div>
      <div className="kids-feature">
        <div className="kids-feature-photo">
          <img src="/images/kids/kids-training.jpg" alt="Children practise paddling on surfboards at Jack Beach" loading="lazy" />
          <span className="photo-count">KIDS CLASSES · JACK BEACH</span>
        </div>
        <div className="kids-panel">
          <div className="section-index"><span>01</span> / ON THE BEACH</div>
          <h3>First paddles.<br />First waves.</h3>
          <p>Warm-ups, paddling practice and first waves: a look at our sessions with the youngest surfers.</p>
          <KidsGallery />
        </div>
      </div>
      <KidsRegistration />
    </section>
  );
}