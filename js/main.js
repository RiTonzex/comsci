/**
 * MAIN JAVASCRIPT LOGIC
 * สาขาวิชาวิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ (CS SSKRU)
 * Theme: Prestigious University Academic Style (Inspired by chula.ac.th)
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

// 2. Render Faculty Cards (Academic Style)
document.addEventListener('DOMContentLoaded', () => {
  const lecturersGrid = document.getElementById('lecturersGrid');
  if (lecturersGrid) {
    lecturersGrid.innerHTML = '';
    lecturersData.forEach(lec => {
      const card = document.createElement('div');
      card.className = 'card-academic';
      card.style.textAlign = 'center';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.innerHTML = `
        <div style="position:relative;margin-bottom:1.25rem;">
          <img src="${lec.image}" alt="${lec.name}" style="width:115px;height:115px;border-radius:50%;object-fit:cover;border:3px solid #ffffff;box-shadow:0 4px 15px rgba(15,43,92,0.12);" onerror="this.src='images/logo.png'">
          <div style="position:absolute;bottom:2px;right:2px;width:32px;height:32px;background:var(--accent-gradient);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.9rem;box-shadow:0 2px 6px rgba(0,0,0,0.2);">
            <i class="bi bi-mortarboard-fill"></i>
          </div>
        </div>
        <h4 style="font-size:1.15rem;font-weight:700;margin-bottom:3px;color:var(--primary-navy);">${lec.prefix} ${lec.name}</h4>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.6rem;font-family:var(--font-heading);font-weight:500;">${lec.name_en}</div>
        <span class="badge-tag" style="font-size:0.75rem;padding:3px 12px;margin-bottom:0.85rem;">${lec.role}</span>
        <p style="font-size:0.9rem;color:var(--text-body);margin-bottom:1.5rem;flex-grow:1;line-height:1.6;">${lec.expertise}</p>
        <button class="btn-secondary" style="width:100%;justify-content:center;font-size:0.88rem;padding:10px 14px;" onclick="openModal(${lec.id})">
          <i class="bi bi-person-lines-fill" style="color:var(--accent-brand);"></i> ดูประวัติและผลงาน
        </button>
      `;
      lecturersGrid.appendChild(card);
    });
  }

  // Initialize Navigation ScrollSpy & Sliding Active Indicator
  initNavScrollSpy();
  
  // Initialize Gentle Hero Parallax Motion
  initHeroParallax();
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

function switchNewsTab(tabId, btn) {
  document.querySelectorAll('.news-tab-content').forEach(c => c.style.display = 'none');
  document.querySelectorAll('#news .tab-btn-pill').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(tabId);
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
      <strong style="color:var(--primary-navy);font-size:0.95rem;">${e.degree} (${e.field})</strong><br>
      <span style="font-size:0.85rem;color:var(--text-muted);">${e.institution} ${e.country ? '('+e.country+')' : ''} (พ.ศ. ${e.year})</span>
    </div>
  `).join('');

  // Primary Courses
  const coursesContainer = document.getElementById('modalCourses');
  coursesContainer.innerHTML = lec.courses_taught.map(c => `
    <span style="background:var(--bg-surface-subtle);border:1px solid var(--border-subtle);padding:6px 12px;border-radius:6px;font-size:0.85rem;display:inline-flex;align-items:center;gap:8px;">
      <strong class="code-pill">${c.code}</strong> <span style="color:var(--primary-navy);font-weight:500;">${c.name}</span> <small style="color:var(--text-muted);">(${c.credits})</small>
    </span>
  `).join('');

  // Publications
  const pubContainer = document.getElementById('modalPubs');
  pubContainer.innerHTML = lec.publications.map(p => `
    <div style="background:var(--bg-surface-subtle);border:1px solid var(--border-subtle);border-radius:10px;padding:1.25rem;margin-bottom:0.85rem;">
      <h5 style="font-size:0.98rem;font-weight:600;margin-bottom:6px;color:var(--primary-navy);line-height:1.4;">${p.title}</h5>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;">ผู้เขียน: ${p.authors.join(', ')} | ปี พ.ศ. ${p.year}</p>
      <span style="background:var(--accent-brand-light);color:var(--accent-brand);font-size:0.75rem;padding:3px 10px;border-radius:4px;display:inline-block;font-weight:600;border:1px solid var(--accent-brand-border);">
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

// 5. Navigation ScrollSpy & Sliding Active Indicator
function initNavScrollSpy() {
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const navIndicator = document.getElementById('navIndicator');
  const navLinks = Array.from(document.querySelectorAll('.nav-menu .nav-link'));
  const navToggle = document.getElementById('navToggle');

  // Map section IDs to their corresponding nav link
  const sectionMapping = {
    'hero': 'hero',
    'about': 'about',
    'why-cs': 'about',
    'curriculum': 'curriculum',
    'schedule': 'schedule',
    'news': 'news',
    'lecturers': 'lecturers',
    'downloads': 'downloads',
    'contact': 'contact'
  };

  const sections = Array.from(document.querySelectorAll('section[id]'));

  // Move indicator to a specific nav-link element
  function moveIndicator(linkEl) {
    if (!navIndicator || !navMenu || !linkEl) return;
    
    // In mobile view (hidden indicator), do nothing
    if (window.innerWidth <= 1060) {
      navIndicator.style.opacity = '0';
      return;
    }

    const menuRect = navMenu.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    // Position indicator neatly underneath the link text
    const paddingX = 8;
    const left = (linkRect.left - menuRect.left) + paddingX;
    const width = linkRect.width - (paddingX * 2);

    if (width > 0) {
      navIndicator.style.transform = `translateX(${left}px)`;
      navIndicator.style.width = `${width}px`;
      navIndicator.style.opacity = '1';
    }
  }

  // Set active link class
  function setActiveLink(targetId) {
    const mappedId = sectionMapping[targetId] || targetId;
    let foundActive = false;

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${mappedId}`) {
        link.classList.add('active');
        foundActive = true;
        moveIndicator(link);
      } else {
        link.classList.remove('active');
      }
    });

    return foundActive;
  }

  // ScrollSpy function based on viewport position
  let isTicking = false;
  function handleScrollSpy() {
    const scrollPos = window.scrollY || window.pageYOffset;
    const navbarHeight = navbar ? navbar.offsetHeight : 76;
    const triggerOffset = navbarHeight + 90;

    // Check if scrolled near bottom of page -> highlight contact
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
      setActiveLink('contact');
      return;
    }

    // Find current active section
    let currentSectionId = 'hero';
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop - triggerOffset;

      if (scrollPos >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    }

    setActiveLink(currentSectionId);
  }

  // Scroll event with requestAnimationFrame for 60fps smoothness
  window.addEventListener('scroll', () => {
    // Sticky navbar elevation
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (!isTicking) {
      window.requestAnimationFrame(() => {
        handleScrollSpy();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // Hover and Click animations on nav menu items
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      moveIndicator(link);
    });

    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        navMenu.classList.remove('show');
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const targetOffset = targetEl.offsetTop - (navbar ? navbar.offsetHeight : 76);
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
          setActiveLink(targetId);
        }
      }
    });
  });

  // When mouse leaves menu, snap back to active item
  navMenu.addEventListener('mouseleave', () => {
    const activeLink = navMenu.querySelector('.nav-link.active');
    if (activeLink) {
      moveIndicator(activeLink);
    }
  });

  // Window resize handler
  window.addEventListener('resize', () => {
    const activeLink = navMenu.querySelector('.nav-link.active');
    if (activeLink) {
      moveIndicator(activeLink);
    }
  });

  // Mobile drawer toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Initial update
  handleScrollSpy();
  window.addEventListener('load', () => {
    handleScrollSpy();
  });
}

/* ==========================================================================
   GENTLE HERO PARALLAX MOTION (สบายตา ไม่เวียนหัว 60FPS)
   ========================================================================== */
function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  const heroBg = document.getElementById('heroBg');
  const heroContent = document.getElementById('heroContent');

  if (!heroSection || !heroBg) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroHeight = heroSection.offsetHeight;

    // Only animate while hero is visible on screen
    if (scrollY <= heroHeight + 150) {
      // Soft background movement (factor 0.22 - super smooth and non-dizzying)
      const bgOffsetY = scrollY * 0.22;
      heroBg.style.transform = `translate3d(0, ${bgOffsetY.toFixed(1)}px, 0)`;

      // Subtle float and fade out for hero content
      if (heroContent) {
        const contentOffsetY = scrollY * 0.1;
        const opacity = Math.max(0.2, 1 - (scrollY / (heroHeight * 0.9)));
        heroContent.style.transform = `translate3d(0, ${contentOffsetY.toFixed(1)}px, 0)`;
        heroContent.style.opacity = opacity.toFixed(2);
      }
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateParallax();
}
