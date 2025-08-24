@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: #0d0f1a;
  color: #ffffff;
  overflow-x: hidden;
  line-height: 1.6;
}

.background-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12rem;
  white-space: nowrap;
  z-index: 0;
  pointer-events: none;
  opacity: 0.1;
  font-weight: 900;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

.background-text .highlight {
  color: #ff00ff;
  text-shadow: 0 0 20px #ff00ff;
}

.navbar {
  position: sticky;
  top: 0;
  background-color: #0d0f1a;
  display: flex;
  justify-content: center;
  z-index: 10;
  border-bottom: 2px solid #0ff;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  margin: 0;
}

.navbar a {
  color: #0ff;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.5px;
}

.navbar a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #0ff, #ff00ff);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.navbar a:hover::after {
  transform: translateX(0);
}

.navbar a.active {
  color: #ffffff;
  text-shadow: 0 0 10px #0ff;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
  overflow: hidden;
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.05) 0%, transparent 70%);
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.05) 0%, transparent 50%);
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
}

.hero-text {
  flex: 1;
  animation: fadeInLeft 1s ease-out;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  animation: fadeInRight 1s ease-out;
}

.profile-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 
    0 0 50px rgba(0, 255, 255, 0.3),
    0 0 100px rgba(255, 0, 255, 0.2);
  border: 4px solid rgba(0, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  animation: float 6s ease-in-out infinite;
}

.profile-image::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 40px;
  background: linear-gradient(45deg, #0ff, #ff00ff);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.profile-image:hover::before {
  opacity: 0.5;
}

.profile-image:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 
    0 0 70px rgba(0, 255, 255, 0.4),
    0 0 120px rgba(255, 0, 255, 0.3);
  border-color: rgba(0, 255, 255, 0.4);
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.primary-btn {
  background: linear-gradient(45deg, #0ff, #ff00ff);
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff00ff, #0ff);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.primary-btn:hover::before {
  opacity: 1;
}

.primary-btn span {
  position: relative;
  z-index: 1;
}

.secondary-btn {
  background: transparent;
  color: #0ff;
  border: 2px solid #0ff;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 255, 255, 0.4);
}

.secondary-btn:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-3px);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #e0e0e0;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.stat-item {
  background: rgba(0, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.stat-item:hover::before {
  transform: translateX(100%);
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 8px 30px rgba(0, 255, 255, 0.15),
    0 0 40px rgba(255, 0, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
}

.stat-item i {
  font-size: 2rem;
  color: #0ff;
  margin-bottom: 1rem;
}

.stat-item h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: #0ff;
  font-size: 1.5rem;
  font-weight: bold;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media screen and (max-width: 968px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }

  .profile-image {
    width: 300px;
    height: 300px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .profile-image {
    width: 250px;
    height: 250px;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .primary-btn, .secondary-btn {
    width: 100%;
  }
}

.section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: auto;
  position: relative;
  z-index: 1;
  background: rgba(13, 15, 26, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  margin-bottom: 3rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(50px);
}

.section:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.15);
  border-color: rgba(0, 255, 255, 0.2);
  transform: translateY(-5px);
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section h1 {
  font-size: 2.5rem;
  color: #0ff;
  margin-bottom: 2rem;
  border-bottom: 3px solid #0ff;
  display: inline-block;
  padding-bottom: 0.5rem;
  text-shadow: 
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff;
  position: relative;
}

.section h1::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #0ff, #ff00ff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.section:hover h1::after {
  transform: scaleX(1);
}

.project {
  background: rgba(0, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.project::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 255, 255, 0.1),
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.project:hover::after {
  transform: translateX(100%);
}

.project:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 8px 30px rgba(0, 255, 255, 0.2),
    0 0 40px rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
}

.project h2 {
  color: #0ff;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  text-shadow: 
    0 0 5px #0ff,
    0 0 10px #0ff;
}

.project h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #0ff, #ff00ff);
  transition: width 0.4s ease;
  border-radius: 2px;
}

.project:hover h2::after {
  width: 100%;
}

.project ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.project ul li {
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #fff;
  transition: all 0.3s ease;
}

.project ul li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #0ff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.project ul li:hover {
  transform: translateX(5px);
  color: #0ff;
}

.project ul li:hover::before {
  color: #ff00ff;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.skills-grid span {
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid #0ff;
  padding: 1rem;
  border-radius: 10px;
  color: #0ff;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}

.skills-grid span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.skills-grid span:hover::before {
  transform: translateX(100%);
}

.skills-grid span:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.social-links a {
  font-size: 1.5rem;
  color: #0ff;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: #ff00ff;
  transform: scale(1.2);
}

.podcast-card {
  background: rgba(0, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 255, 255, 0.1);
}

.podcast-card h3 {
  color: #0ff;
  margin-bottom: 0.5rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.3rem;
  text-shadow: 0 0 5px #0ff;
}

.podcast-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.podcast-links a {
  padding: 0.5rem 1rem;
  border: 1px solid #0ff;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.podcast-links a:hover {
  background: #0ff;
  color: #000;
}

.project a, .btn, a {
  color: #0ff;
  text-decoration: none;
  font-weight: bold;
}

.btn {
  background-color: transparent;
  border: 2px solid #0ff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.recent-podcasts p, .recent-podcasts li {
  margin: 0.5rem 0;
  padding-left: 1rem;
  border-left: 2px solid #0ff;
  color: #ccc;
  list-style-type: none;
}

.project-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 2rem auto;
  display: block;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.project-image:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #0ff;
  transition: all 0.3s ease;
}

img:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.project-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.project-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid #0ff;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(0, 255, 255, 0.05);
  font-weight: 600;
  letter-spacing: 0.5px;
}

.project-links a:hover {
  background: #0ff;
  color: #000;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
}

.project-links a i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.project-links a:hover i {
  transform: scale(1.2);
}

.skills-category {
  margin-bottom: 2rem;
}

.skills-category h2 {
  color: #0ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  padding-bottom: 0.5rem;
}

.podcast-platforms {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.contact-info {
  text-align: center;
  margin: 2rem 0;
}

.contact-info a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: #0ff;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.contact-info a:hover {
  color: #ff00ff;
  transform: scale(1.05);
}

@media screen and (max-width: 768px) {
  .background-text {
    font-size: 6rem;
  }
  .hero-name {
    font-size: 2.5rem;
  }
  .section {
    padding: 3rem 1rem;
    border-radius: 20px;
  }
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  .navbar ul {
    flex-direction: column;
    align-items: center;
  }
  .project-links {
    flex-direction: column;
  }
  
  .podcast-platforms {
    flex-direction: column;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
  
  .project {
    padding: 1.5rem;
  }
  
  .project h2 {
    font-size: 1.5rem;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .project-links a {
    width: 100%;
    justify-content: center;
  }
}

.podcast-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  background: rgba(0, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.podcast-header:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 255, 255, 0.15);
  border-color: rgba(0, 255, 255, 0.2);
}

.podcast-logo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.podcast-logo:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.podcast-header p {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #fff;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .podcast-header {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
  
  .podcast-logo {
    width: 150px;
    height: 150px;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

/* Interactive Cursor Effect */
.cursor {
  display: none;
}

.cursor-dot {
  display: none;
}

/* Add cursor styles for interactive elements */
a:hover ~ .cursor,
button:hover ~ .cursor,
.btn:hover ~ .cursor {
  transform: scale(1.5);
  background: rgba(0, 255, 255, 0.2);
}

/* Ensure cursor is visible on all elements */
* {
  cursor: auto;
}

/* Show default cursor on mobile */
@media screen and (max-width: 768px) {
  * {
    cursor: auto;
  }
  .cursor, .cursor-dot {
    display: none;
  }
}

/* Enhanced Section Transitions */
.section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Interactive Project Cards */
.project {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.project-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.project:hover .project-inner {
  transform: rotateY(5deg) rotateX(5deg);
}

/* Animated Background */
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: 
    radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.05) 0%, transparent 50%);
  animation: bgShift 20s ease infinite;
}

/* Skill Bar Animation */
.skill-bar {
  width: 100%;
  height: 6px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #0ff, #ff00ff);
  width: 0;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Interactive Navigation */
.navbar a {
  position: relative;
  overflow: hidden;
}

.navbar a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #0ff, #ff00ff);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.navbar a:hover::after {
  transform: translateX(0);
}

/* Enhanced Button Effects */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

/* Floating Elements Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

/* Glowing Text Effect */
.glow-text {
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.8),
                 0 0 30px rgba(255, 0, 255, 0.5);
  }
}

/* Scroll Progress Indicator */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #0ff, #ff00ff);
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 1000;
}

/* Enhanced Image Hover Effects */
.profile-image {
  position: relative;
}

.profile-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-image:hover::after {
  opacity: 1;
  animation: shine 1.5s ease-in-out infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

/* Responsive Animations */
@media screen and (max-width: 768px) {
  .cursor, .cursor-dot {
    display: none;
  }
  
  .section {
    transform: translateY(30px);
  }
  
  .project:hover .project-inner {
    transform: none;
  }
}

/* Neon glow effect for the name */
.hero-name {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #0ff,
    0 0 30px #0ff,
    0 0 40px #0ff,
    0 0 55px #0ff,
    0 0 70px #0ff;
  animation: neonPulse 1.5s ease-in-out infinite alternate;
}

@keyframes neonPulse {
  from {
    text-shadow: 
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #0ff,
      0 0 30px #0ff,
      0 0 40px #0ff,
      0 0 55px #0ff,
      0 0 70px #0ff;
  }
  to {
    text-shadow: 
      0 0 5px #fff,
      0 0 15px #fff,
      0 0 25px #ff00ff,
      0 0 35px #ff00ff,
      0 0 45px #ff00ff,
      0 0 60px #ff00ff,
      0 0 75px #ff00ff;
  }
}

/* Improve text visibility */
p, li, .about-text {
  font-size: 1.1rem;
  color: #e0e0e0;
  line-height: 1.8;
}

h1, h2, h3 {
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

/* Responsive text adjustments */
@media screen and (max-width: 768px) {
  .hero-name {
    font-size: 2.5rem;
  }
  
  .section h1 {
    font-size: 2rem;
  }
  
  p, li, .about-text {
    font-size: 1rem;
  }
}
