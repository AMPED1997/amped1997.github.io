// ============================================
// AMPED UP ELECTRICARE SOLUTION - SCRIPTS
// ============================================

// ============================================
// MOBILE MENU TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const hamb = document.querySelector('.hamb');
  const nav = document.querySelector('nav');

  if (hamb) {
    hamb.addEventListener('click', function() {
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });
  }
});

// ============================================
// FORM SUBMISSION (WHATSAPP INTEGRATION)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value.trim();
      const details = document.getElementById('details').value.trim();

      // Validate
      if (!name || !phone || !service || !details) {
        alert('Please fill in all fields');
        return;
      }

      // Format phone number (remove spaces, special chars, ensure it starts with country code or 0)
      let cleanPhone = phone.replace(/\D/g, '');
      if (cleanPhone.startsWith('0')) {
        cleanPhone = '254' + cleanPhone.substring(1);
      } else if (!cleanPhone.startsWith('254')) {
        cleanPhone = '254' + cleanPhone;
      }

      // BUSINESS WHATSAPP NUMBER (Kenya): replace with your preferred contact if needed
      const BUSINESS_WHATSAPP = '254797608704'; // 0797608704 -> +254797608704

      // Create WhatsApp message
      const message = `Hello AMPED UP ELECTRICARE SOLUTION,\n\nI would like a quotation for the following:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n\n*Project Details:*\n${details}\n\nPlease get back to me with a quote at your earliest convenience.\n\nThank you!`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);

      // Open WhatsApp to BUSINESS number with the customer's details prefilled
      window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodedMessage}`, '_blank');

      // Reset form
      form.reset();
    });
  }
});

// ============================================
// SET CURRENT YEAR IN FOOTER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============================================
// ANIMATE ELEMENTS ON SCROLL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards, articles, and other elements
document.querySelectorAll('article, .projectCard, .steps div, .solutions div').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// PHONE INPUT FORMATTING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      // Allow only numbers
      let value = e.target.value.replace(/\D/g, '');
      
      // Limit to reasonable length
      if (value.length > 12) {
        value = value.slice(0, 12);
      }
      
      e.target.value = value;
    });
  }
});

// ============================================
// LAZY LOAD IMAGES
// ============================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
          current = link.getAttribute('href');
        }
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  });
});

// ============================================
// ADD ACTIVE STYLE FOR CURRENT LINK
// ============================================

const style = document.createElement('style');
style.textContent = `
  nav a.active {
    color: var(--gold);
    border-bottom: 2px solid var(--gold);
    padding-bottom: 0.25rem;
  }
`;
document.head.appendChild(style);

// ============================================
// FORM VALIDATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  
  if (form) {
    // Add real-time validation feedback
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('change', function() {
        if (this.value.trim()) {
          this.style.borderColor = '#4caf50';
        } else {
          this.style.borderColor = '#ddd';
        }
      });
    });
  }
});

// ============================================
// CONTACT FORM ACCESSIBILITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  
  if (form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input, index) => {
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && this.tagName !== 'TEXTAREA') {
          e.preventDefault();
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });
    });
  }
});

// ============================================
// PERFORMANCE: DEFER NON-CRITICAL SCRIPTS
// ============================================

window.addEventListener('load', function() {
  // Any heavy operations after page load
  console.log('AMPED UP ELECTRICARE SOLUTION website loaded');
});
