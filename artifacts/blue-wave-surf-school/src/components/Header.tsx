import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS, whatsappLink } from '../lib/blue-wave';

export default function Header() {
  const [open, setOpen] = useState(false);
  const bookingUrl = whatsappLink('Hello Blue Wave! I would like to book a surf lesson.');

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Blue Wave Surf School home">
        <img src="/images/brand/blue-wave-logo.jpeg" alt="Blue Wave Surf School" />
        <span className="brand-copy">
          <strong>BLUE WAVE</strong>
          <span>SURF SCHOOL · DAR BOUAZZA</span>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {NAV_ITEMS.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        <a className="nav-book" href={bookingUrl} target="_blank" rel="noopener noreferrer">
          Book a lesson <ArrowUpRight size={14} />
        </a>
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">
          {NAV_ITEMS.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-book" href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book a lesson <ArrowUpRight size={14} />
          </a>
        </nav>
      )}
    </header>
  );
}