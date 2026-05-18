const navItems = [
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
    <div class="container">
      <a href="index.html" class="brand">Bloom Clan</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation">Menu</button>
      <nav class="nav-links" id="navLinks">
        <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
        ${navItems.map((n) => `<a href="${n.href}" class="${currentPage === n.href ? 'active' : ''}">${n.label}</a>`).join('')}
      </nav>
    </div>
  </header>`;
}

function Footer() {
  return `<footer class="site-footer"><div class="container"><div><strong>Bloom Clan</strong><div class="small">Soft handmade gifting, keepsakes, cards, and green moments for thoughtful giving.</div></div><div class="small">© ${new Date().getFullYear()} Bloom Clan</div></div></footer>`;
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
      <label>Order Type<select><option>Gift Set</option><option>Wedding Favors</option><option>Home Decor</option></select></label>
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
  toggle?.addEventListener('click', () => nav.classList.toggle('show'));
});
