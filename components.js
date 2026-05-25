const navItems = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'products.html', label: 'Products' },
  { href: 'gallery.html', label: 'Gallery' },
  { href: 'custom-orders.html', label: 'Custom Orders' },
  { href: 'contact.html', label: 'Contact' },
];

const currentPage = location.pathname.split('/').pop() || 'index.html';

function Header() {
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand" aria-label="Bloom Clan home">
        <span class="brand-logo-wrap" aria-hidden="true">
          <img src="assets/logo/BloomClan Logo.png" alt="Bloom Clan logo" class="brand-logo" width="96" height="96" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" />
          <span class="brand-logo-fallback" style="display:none;">Bloom Clan</span>
        </span>
        <span class="brand-text-wrap">
          <span class="brand-name">BLOOM CLAN</span>
          <span class="brand-tagline">stories curated with love</span>
        </span>
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navLinks">Menu</button>
      <nav class="nav-links" id="navLinks" aria-label="Primary navigation">
        ${navItems.map((n) => `<a href="${n.href}" class="${currentPage === n.href ? 'active' : ''}">${n.label}</a>`).join('')}
      </nav>
    </div>
  </header>`;
}

function Footer() {
  return `<footer class="site-footer">
    <div class="footer-paper-grain" aria-hidden="true"></div>
    <div class="footer-decor" aria-hidden="true">
      <span class="decor-star">✦</span>
      <span class="decor-line decor-line--left"></span>
      <span class="decor-mushroom">❀</span>
      <span class="decor-tape"></span>
      <span class="decor-line decor-line--right"></span>
    </div>
    <div class="container footer-shell">
      <div class="footer-grid">
        <section class="footer-block footer-brand">
          <a href="index.html" class="footer-logo-link" aria-label="Bloom Clan home">
            <img src="assets/logo/BloomClan Logo.png" alt="Bloom Clan logo" class="footer-logo" width="110" height="110" />
          </a>
          <p class="footer-philosophy">curated slowly, kept closely</p>
        </section>
        <nav class="footer-block footer-nav" aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="products.html">Products</a>
          <a href="gallery.html">Gallery</a>
          <a href="custom-orders.html">Custom Orders</a>
          <a href="contact.html">Contact</a>
        </nav>
        <section class="footer-block footer-social">
          <p class="footer-label">Instagram</p>
          <p><a href="https://instagram.com/bloomclan_stories" target="_blank" rel="noopener noreferrer">@bloomclan_stories</a></p>
          <p class="footer-note">stories gathered, memories shared</p>
        </section>
      </div>
      <p class="footer-copyright">JAS Nest Australia</p>
    </div>
  </footer>`;
}

function SectionTitle(title, subtitle) {
  return `<div class="section-title"><h2>${title}</h2><p>${subtitle}</p></div>`;
}

function CTAButton(text, href = '#') {
  return `<a href="${href}" class="cta-btn">${text}</a>`;
}

function ProductCard({ image, name, description, price }) {
  return `<article class="product-card"><img src="${image}" alt="${name}"><div class="content"><h3>${name}</h3><p>${description}</p><div class="price">${price}</div></div></article>`;
}

function GalleryGrid(images) {
  return `<div class="gallery-grid">${images.map((src, idx) => `<img src="${src}" alt="Gallery handmade item ${idx + 1}"/>`).join('')}</div>`;
}

function ContactForm(type = 'contact') {
  const extra = type === 'custom' ? `
      <label>Order Type<select><option>Gift Set</option><option>Wedding Favors</option><option>Home Decor</option><option>Plant Gift Bundle</option></select></label>
      <label>Desired Delivery Date<input type="date"></label>` : '';
  return `<div class="form-card"><form>${extra}
      <label>Name<input type="text" required></label>
      <label>Email<input type="email" required></label>
      <label>Phone<input type="tel"></label>
      <label>${type === 'custom' ? 'Project Details' : 'Message'}<textarea required></textarea></label>
      <button type="submit" class="cta-btn">Send Enquiry</button>
    </form></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', Header());
  document.body.insertAdjacentHTML('beforeend', Footer());
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});
