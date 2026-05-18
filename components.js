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
        <img src="assets/logo/bloom-clan-logo.svg" alt="Bloom Clan logo" class="brand-logo" width="180" height="180" />
        <span class="brand-text-wrap">
          <span class="brand-name">Bloom Clan</span>
          <span class="brand-tagline">Handcrafted Botanical Atelier</span>
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
  return `<footer class="site-footer"><div class="container footer-grid"><section><img src="assets/bloom-clan-logo.svg" alt="Bloom Clan logo" class="footer-logo" width="220" height="55" /><p class="small">Handmade details, botanical calm, and premium editorial craftsmanship for meaningful gifting and home styling.</p></section><section><h3>Studio</h3><ul><li>Small-batch handmade collections</li><li>Custom gifting design</li><li>Seasonal botanical curation</li></ul></section><section><h3>Visit</h3><p class="small">By appointment only<br/>United States</p><p class="small">© ${new Date().getFullYear()} Bloom Clan Atelier</p></section></div></footer>`;
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
