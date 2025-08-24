// -----------------------------
// Smooth scroll for navigation
// -----------------------------
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// -----------------------------
// Typing effect for hero title
// -----------------------------
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
}

// -----------------------------
// Fade-in animation on scroll
// -----------------------------
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  sectionObserver.observe(section);
});

// -----------------------------
// Highlight active nav link
// -----------------------------
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// -----------------------------
// Parallax effect for background text
// -----------------------------
window.addEventListener('scroll', () => {
  const backgroundText = document.querySelector('.background-text');
  if (backgroundText) {
    const scrolled = window.pageYOffset;
    backgroundText.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.1}px))`;
  }
});

// -----------------------------
// Hover effect: project cards
// -----------------------------
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'translateY(-10px) scale(1.02)';
  });
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'translateY(0) scale(1)';
  });
});

// -----------------------------
// Custom cursor
// -----------------------------
const cursor = document.createElement('div');
const cursorDot = document.createElement('div');
cursor.className = 'cursor';
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  cursorDot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
});

// -----------------------------
// Scroll progress indicator
// -----------------------------
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progressBar.style.transform = `scaleX(${scrolled / 100})`;
});

// -----------------------------
// Glow headings
// -----------------------------
document.querySelectorAll('h1, h2').forEach(heading => {
  heading.classList.add('glow-text');
});

// -----------------------------
// 3D card effect (projects only)
// -----------------------------
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('mousemove', (e) => {
    const rect = project.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    project.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });
  project.addEventListener('mouseleave', () => {
    project.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

// -----------------------------
// Shine effect on profile image
// -----------------------------
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
  profileImage.addEventListener('mouseenter', () => {
    profileImage.style.transform = 'scale(1.05)';
    profileImage.style.boxShadow = '0 0 25px var(--accent)';
  });
  profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'scale(1)';
    profileImage.style.boxShadow = '0 0 15px var(--accent)';
  });
}
