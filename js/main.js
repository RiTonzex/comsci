/**
 * MAIN JAVASCRIPT LOGIC
 * สาขาวิชาวิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ (CS SSKRU)
 * Theme: Sleek & Modern Dark Tech
 */

// 1. ข้อมูลคณาจารย์ประจำหลักสูตร (Faculty Data)
const lecturersData = [
  {
    id: 1,
    role: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    prefix: "ผู้ช่วยศาสตราจารย์ ดร.", 
    name: "เจษฎา โพนแก้ว",
    name_en: "Jessada Phonkaew",
    academic_position: "ผู้ช่วยศาสตราจารย์ ดร.",
    expertise: "วิทยาการคอมพิวเตอร์ / Game & Image Processing",
    image: "images/jessada_p.jpg",
    education: [
      { degree: "ปร.ด.", field: "วิทยาการคอมพิวเตอร์", institution: "มหาวิทยาลัยขอนแก่น", year: 2557 },
      { degree: "วท.ม.", field: "วิทยาการคอมพิวเตอร์", institution: "มหาวิทยาลัยขอนแก่น", year: 2548 },
      { degree: "วศ.บ.", field: "วิศวกรรมไฟฟ้าอิเล็กทรอนิกส์และคอมพิวเตอร์", institution: "มหาวิทยาลัยอุบลราชธานี", year: 2543 }
    ],
    publications: [
      {
        authors: ["เจษฎา โพนแก้ว"],
        year: 2566,
        title: "การพัฒนาแอปพลิเคชันการเขียนโปรแกรมด้วยบล็อกภาพผ่านมือถือเพื่อการควบคุมหุ่นยนต์เดินตามเส้นขนาดเล็ก",
        journal: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        volume: 10, issue: 1, pages: "32-39"
      }
    ],
    courses_taught: [
      { code: "4122706", name: "สถาปัตยกรรมคอมพิวเตอร์", credits: "3(2-2-5)" },
      { code: "4123652", name: "การออกแบบและพัฒนาเกมคอมพิวเตอร์", credits: "3(2-2-5)" },
      { code: "4124511", name: "การประมวลผลภาพ", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 2,
    role: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    prefix: "ดร.",
    name: "เจษฎา ชาตรี",
    name_en: "Jessada Chatree",
    academic_position: "ดร.",
    expertise: "Computer Science & Engineering / Data Mining",
    image: "images/jessada_c.jpg",
    education: [
      { degree: "Ph.D.", field: "Computer Science and Engineering", institution: "University of North Texas", country: "USA", year: 2014 },
      { degree: "วท.ม.", field: "การศึกษาวิทยาศาสตร์ (คอมพิวเตอร์)", institution: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", year: 2547 },
      { degree: "ค.บ.", field: "คอมพิวเตอร์ศึกษา", institution: "มหาวิทยาลัยราชภัฏสุรินทร์", year: 2538 }
    ],
    publications: [
      {
        authors: ["พิศาล สุขขี", "เจษฎา ชาตรี"],
        year: 2567,
        title: "การพัฒนาแอปพลิเคชัน \"น้องลำดวน\" ไลน์แชทบอท เพื่อแนะนำสถานที่ท่องเที่ยวในจังหวัดศรีสะเกษ",
        journal: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        volume: 10, issue: 1, pages: "32-39"
      }
    ],
    courses_taught: [
      { code: "4113501", name: "การวิจัยดำเนินงาน", credits: "3(3-0-6)" },
      { code: "4124507", name: "การทำเหมืองข้อมูล", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 3,
    role: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    prefix: "ดร.",
    name: "กริชบดินทร์ ผิวหอม",
    name_en: "Krichbodin Phewhom",
    academic_position: "ดร.",
    expertise: "วิศวกรรมคอมพิวเตอร์ / ปัญญาประดิษฐ์ (AI)",
    image: "images/krichbodin.jpg",
    education: [
      { degree: "ปร.ด.", field: "วิศวกรรมคอมพิวเตอร์", institution: "มหาวิทยาลัยขอนแก่น", year: 2564 },
      { degree: "วท.ม.", field: "วิทยาการคอมพิวเตอร์", institution: "มหาวิทยาลัยขอนแก่น", year: 2555 },
      { degree: "วท.บ.", field: "วิทยาการคอมพิวเตอร์", institution: "มหาวิทยาลัยรามคำแหง", year: 2544 }
    ],
    publications: [
      {
        authors: ["กริชบดินทร์ ผิวหอม"],
        year: 2567,
        title: "การเปรียบเทียบประสิทธิภาพอัลกอริทึม Apriori และ FP-Growth ด้วยชุดข้อมูลร้านขายของชำ",
        journal: "วารสารวิชาการการประยุกต์ใช้เทคโนโลยีสารสนเทศ",
        volume: 10, issue: 1, pages: "181-191"
      }
    ],
    courses_taught: [
      { code: "4121206", name: "การเขียนโปรแกรมคอมพิวเตอร์", credits: "3(2-2-5)" },
      { code: "4121701", name: "ดิจิตอลเบื้องต้น", credits: "3(2-2-5)" },
      { code: "4124509", name: "การสื่อสารระหว่างมนุษย์กับคอมพิวเตอร์", credits: "3(2-2-5)" },
      { code: "4124501", name: "ปัญญาประดิษฐ์", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 4,
    role: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    prefix: "ผู้ช่วยศาสตราจารย์",
    name: "พิศาล สุขขี",
    name_en: "Phisan Sukkee",
    academic_position: "ผู้ช่วยศาสตราจารย์",
    expertise: "วิทยาการคอมพิวเตอร์ / การพัฒนาเว็บและโมบายแอปพลิเคชัน",
    image: "images/phisan.jpg",
    education: [
      { degree: "วท.ม.", field: "วิทยาการคอมพิวเตอร์", institution: "มหาวิทยาลัยศิลปากร", year: 2554 },
      { degree: "วท.บ.", field: "วิทยาการคอมพิวเตอร์", institution: "มหาวิทยาลัยศิลปากร", year: 2548 }
    ],
    publications: [
      {
        authors: ["พิศาล สุขขี", "เจษฎา ชาตรี"],
        year: 2567,
        title: "การพัฒนาแอปพลิเคชัน \"น้องลำดวน\" ไลน์แชทบอท เพื่อแนะนำสถานที่ท่องเที่ยวในจังหวัดศรีสะเกษ",
        journal: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        volume: 10, issue: 1, pages: "32-39"
      }
    ],
    courses_taught: [
      { code: "4121203", name: "การเขียนโปรแกรมเชิงวัตถุ", credits: "3(2-2-5)" },
      { code: "4122104", name: "การออกแบบและพัฒนาเว็บ", credits: "3(2-2-5)" },
      { code: "4123505", name: "การเขียนโปรแกรมคอมพิวเตอร์ขั้นสูง", credits: "3(2-2-5)" },
      { code: "4122204", name: "โครงสร้างข้อมูลและอัลกอริทึม", credits: "3(2-2-5)" },
      { code: "4124614", name: "การพัฒนาแอปพลิเคชันบนมือถือ", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 5,
    role: "หัวหน้าสาขาวิชาฯ",
    prefix: "ผู้ช่วยศาสตราจารย์ ดร.",
    name: "กนิษฐา อินธิชิต",
    name_en: "Kanittha Inthichit",
    academic_position: "ผู้ช่วยศาสตราจารย์ ดร.",
    expertise: "เทคโนโลยีสารสนเทศ / ระบบฐานข้อมูล & การวิเคราะห์ระบบ",
    image: "images/kanittha.jpg",
    education: [
      { degree: "ปร.ด.", field: "การจัดการเทคโนโลยี", institution: "มหาวิทยาลัยราชภัฏมหาสารคาม", year: 2561 },
      { degree: "วท.ม.", field: "เทคโนโลยีสารสนเทศการเกษตรและพัฒนาชนบท", institution: "มหาวิทยาลัยอุบลราชธานี", year: 2550 },
      { degree: "วท.บ.", field: "วิทยาการคอมพิวเตอร์", institution: "มหาวิทยาลัยราชภัฏมหาสารคาม", year: 2546 }
    ],
    publications: [
      {
        authors: ["กนิษฐา อินธิชิต", "ภควัฒน์ ปียวงษ์", "สุภาพร สุขใส"],
        year: 2565,
        title: "การพัฒนาแอปพลิเคชันช่วยตัดสินใจในการเลือกเรียนสาขาวิชาคอมพิวเตอร์ในมหาวิทยาลัยราชภัฏศรีสะเกษบนระบบปฏิบัติการแอนดรอยด์ โดยใช้เทคนิคต้นไม้ตัดสินใจ",
        journal: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        volume: 9, issue: 2, pages: "97-107"
      }
    ],
    courses_taught: [
      { code: "4123202", name: "ระบบฐานข้อมูล", credits: "3(2-2-5)" },
      { code: "4122506", name: "การวิเคราะห์และออกแบบระบบเชิงวัตถุ", credits: "3(2-2-5)" },
      { code: "4123665", name: "เทคโนโลยีท้องถิ่น", credits: "3(2-2-5)" },
      { code: "4124920", name: "โครงงานทางวิทยาการคอมพิวเตอร์", credits: "3(2-2-5)" }
    ]
  }
];

// 2. Render Faculty Cards
document.addEventListener('DOMContentLoaded', () => {
  const lecturersGrid = document.getElementById('lecturersGrid');
  if (lecturersGrid) {
    lecturersData.forEach(lec => {
      const card = document.createElement('div');
      card.className = 'card-dark';
      card.style.textAlign = 'center';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.innerHTML = `
        <div style="position:relative;margin-bottom:1.25rem;">
          <img src="${lec.image}" alt="${lec.name}" style="width:105px;height:105px;border-radius:50%;object-fit:cover;border:2px solid var(--border-subtle);" onerror="this.src='images/logo.png'">
          <div style="position:absolute;bottom:0;right:0;width:30px;height:30px;background:var(--primary-blue);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.85rem;">
            <i class="bi bi-mortarboard-fill"></i>
          </div>
        </div>
        <h4 style="font-size:1.1rem;font-weight:600;margin-bottom:2px;color:var(--text-title);">${lec.prefix} ${lec.name}</h4>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.5rem;font-family:var(--font-heading);">${lec.name_en}</div>
        <span class="badge-tag" style="font-size:0.75rem;padding:3px 10px;margin-bottom:0.75rem;">${lec.role}</span>
        <p style="font-size:0.88rem;color:var(--text-body);margin-bottom:1.25rem;flex-grow:1;line-height:1.5;">${lec.expertise}</p>
        <button class="btn-secondary" style="width:100%;justify-content:center;font-size:0.88rem;padding:8px 14px;" onclick="openModal(${lec.id})">
          <i class="bi bi-person-lines-fill"></i> ดูประวัติและผลงาน
        </button>
      `;
      lecturersGrid.appendChild(card);
    });
  }
});

// 3. Tab Switching Handlers
function switchTab(tabId, btn) {
  document.querySelectorAll('#about .tab-content').forEach(c => c.style.display = 'none');
  document.querySelectorAll('#about .tab-btn-pill').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.style.display = 'block';
  btn.classList.add('active');
}

function switchTrack(trackId, btn) {
  document.querySelectorAll('.track-content').forEach(c => c.style.display = 'none');
  document.querySelectorAll('#curriculum .tab-btn-pill').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(trackId);
  if (target) target.style.display = 'block';
  btn.classList.add('active');
}

function switchYear(planId, btn) {
  document.querySelectorAll('.year-content').forEach(c => c.style.display = 'none');
  document.querySelectorAll('#schedule .tab-btn-pill').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(planId);
  if (target) target.style.display = 'block';
  btn.classList.add('active');
}

// 4. Modal Handlers
function openModal(id) {
  const lec = lecturersData.find(l => l.id === id);
  if (!lec) return;

  document.getElementById('modalImg').src = lec.image;
  document.getElementById('modalName').textContent = `${lec.prefix} ${lec.name}`;
  document.getElementById('modalEn').textContent = lec.name_en;
  document.getElementById('modalRole').textContent = lec.role;

  // Education Timeline
  const eduContainer = document.getElementById('modalEducation');
  eduContainer.innerHTML = lec.education.map(e => `
    <div style="position:relative;margin-bottom:1rem;padding-left:8px;">
      <strong style="color:var(--text-title);font-size:0.95rem;">${e.degree} (${e.field})</strong><br>
      <span style="font-size:0.85rem;color:var(--text-muted);">${e.institution} ${e.country ? '('+e.country+')' : ''} (พ.ศ. ${e.year})</span>
    </div>
  `).join('');

  // Primary Courses
  const coursesContainer = document.getElementById('modalCourses');
  coursesContainer.innerHTML = lec.courses_taught.map(c => `
    <span style="background:rgba(255,255,255,0.04);border:1px solid var(--border-subtle);padding:5px 10px;border-radius:6px;font-size:0.85rem;display:inline-flex;align-items:center;gap:6px;">
      <strong class="code-pill">${c.code}</strong> <span style="color:var(--text-title);">${c.name}</span> <small style="color:var(--text-muted);">(${c.credits})</small>
    </span>
  `).join('');

  // Publications
  const pubContainer = document.getElementById('modalPubs');
  pubContainer.innerHTML = lec.publications.map(p => `
    <div style="background:rgba(255,255,255,0.02);border:1px solid var(--border-subtle);border-radius:10px;padding:1.25rem;margin-bottom:0.75rem;">
      <h5 style="font-size:0.95rem;margin-bottom:4px;color:var(--text-title);line-height:1.4;">${p.title}</h5>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:6px;">ผู้เขียน: ${p.authors.join(', ')} | ปี พ.ศ. ${p.year}</p>
      <span style="background:rgba(59,130,246,0.1);color:#60a5fa;font-size:0.75rem;padding:2px 8px;border-radius:4px;display:inline-block;">
        ${p.journal} ปีที่ ${p.volume} ฉบับที่ ${p.issue} หน้า ${p.pages}
      </span>
    </div>
  `).join('');

  const modal = document.getElementById('lecturerModal');
  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
}

function closeModal(e) {
  if (e.target.id === 'lecturerModal') {
    closeModalDirect();
  }
}

function closeModalDirect() {
  const modal = document.getElementById('lecturerModal');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
}

// 5. Mobile Navigation
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// ==========================================================================
// MOTION & ANIMATIONS MODULE (ความรับผิดชอบ: คนที่ 1)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Typing Effect
  initTypingEffect();

  // 2. Initialize Mouse Tracking for Card Glow Effect
  initCardGlowEffect();

  // 3. Initialize Interactive Particle Background
  initHeroParticles();

  // 4. Initialize Magnetic Action Buttons
  initMagneticButtons();

  // 5. Initialize Scroll Reveal System & Stats Counter (delayed to ensure layout renders)
  setTimeout(() => {
    initScrollReveal();
    initStatsCounter();
  }, 100);
});

// --- 1. Typing Effect ---
function initTypingEffect() {
  const heroDesc = document.querySelector('.hero-desc');
  if (!heroDesc) return;

  const originalText = heroDesc.innerHTML;
  const targetPhrase = 'สร้างสรรค์ซอฟต์แวร์แห่งนวัตกรรม';
  
  if (originalText.includes(targetPhrase)) {
    heroDesc.innerHTML = originalText.replace(
      targetPhrase,
      `<span id="typing-target"></span>`
    );

    const words = ["สร้างสรรค์ซอฟต์แวร์", "ผู้เชี่ยวชาญ AI", "โปรแกรมเมอร์ Full-Stack"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingTarget = document.getElementById('typing-target');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 2500;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typingTarget.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTarget.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        delay = delayBetweenWords;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }

    type();
  }
}

// --- 2. Card Glow Effect (Mouse Move Tracking - Optimized) ---
function initCardGlowEffect() {
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.card-dark');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
}

// --- 3. Scroll Reveal System ---
function initScrollReveal() {
  const revealTargets = document.querySelectorAll('.card-dark, .section-header, .hero-text, .hero-visual');
  
  revealTargets.forEach(el => {
    el.classList.add('scroll-reveal');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    const groups = new Map();

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el.classList.contains('revealed')) return;

        const parent = el.parentElement || document.body;
        if (!groups.has(parent)) {
          groups.set(parent, []);
        }
        groups.get(parent).push(el);
        observer.unobserve(el);
      }
    });

    groups.forEach((elements) => {
      elements.sort((a, b) => {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top || 
               a.getBoundingClientRect().left - b.getBoundingClientRect().left;
      });

      elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 100}ms`;
        el.classList.add('revealed');
        
        el.addEventListener('transitionend', function handler() {
          el.style.transitionDelay = '';
          el.removeEventListener('transitionend', handler);
        });
      });
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(el => revealObserver.observe(el));
}

// --- 4. Stats Counter Animation ---
function initStatsCounter() {
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;

  const animateCounters = () => {
    const statElements = document.querySelectorAll('.hero-stats .stat-item h4');
    const duration = 1500; // 1.5 seconds

    statElements.forEach(el => {
      const originalText = el.textContent.trim();
      const match = originalText.match(/([\d,]+)/);
      if (!match) return;

      const rawNum = match[0];
      const target = parseInt(rawNum.replace(/,/g, ''), 10);
      const firstIndex = originalText.indexOf(rawNum);
      const prefix = originalText.substring(0, firstIndex);
      const suffix = originalText.substring(firstIndex + rawNum.length);
      const hasComma = rawNum.includes(',');

      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        
        const currentValue = Math.floor(easeProgress * target);
        
        let formattedVal = currentValue;
        if (hasComma) {
          formattedVal = currentValue.toLocaleString('en-US');
        }

        el.textContent = prefix + formattedVal + suffix;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = originalText;
        }
      };

      el.textContent = prefix + "0" + suffix;
      window.requestAnimationFrame(step);
    });
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  statsObserver.observe(statsSection);
}

// --- 5. Interactive Particle Canvas Background ---
function initHeroParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'hero-canvas';
  hero.insertBefore(canvas, hero.firstChild); // Place at the back of the hero container

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Set canvas size dynamically
  function resizeCanvas() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle configuration
  const particles = [];
  const particleCount = 60; // Sleek and professional particle count
  const connectionDistance = 120;
  const mouse = { x: null, y: null, radius: 150 };

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.size = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls and clamp bounds
      if (this.x < 0) { this.x = 0; this.vx = -this.vx; }
      else if (this.x > canvas.width) { this.x = canvas.width; this.vx = -this.vx; }
      
      if (this.y < 0) { this.y = 0; this.vy = -this.vy; }
      else if (this.y > canvas.height) { this.y = canvas.height; this.vy = -this.vy; }

      // Mouse interaction (repel particles)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.5;
          this.y += Math.sin(angle) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(96, 165, 250, 0.3)'; // Primary blue particle color
      ctx.fill();
    }
  }

  // Generate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Mouse event listeners for interaction
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  hero.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Draw connecting constellation lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`; // Indigo constellation line
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

// --- 6. Magnetic Button Effect ---
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary');

  buttons.forEach(btn => {
    // Add magnetic class to trigger transition easing
    btn.classList.add('magnetic');

    document.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const dx = mouseX - btnX;
      const dy = mouseY - btnY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const threshold = 75; // Proximity to activate the pull

      if (dist < threshold) {
        const pull = (threshold - dist) / threshold;
        const moveX = dx * pull * 0.35;
        const moveY = dy * pull * 0.35;

        btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
      } else {
        btn.style.transform = '';
      }
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

