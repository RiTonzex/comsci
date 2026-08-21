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

// 2. Render Faculty Cards (Dr. Kanittha as Top Featured Horizontal Card)
document.addEventListener('DOMContentLoaded', () => {
  const lecturersGrid = document.getElementById('lecturersGrid');
  if (lecturersGrid) {
    lecturersGrid.innerHTML = '';

    // Find Head of Department (Dr. Kanittha Inthichit)
    const headLec = lecturersData.find(l => l.role.includes('หัวหน้าสาขาวิชา') || l.id === 5);
    const otherLecs = lecturersData.filter(l => l.id !== (headLec ? headLec.id : 5));

    if (headLec) {
      const headCard = document.createElement('div');
      headCard.className = 'card-dark head-lecturer-card';
      headCard.style.cssText = `
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2rem 2.25rem;
        background: #ffffff;
        border: 1px solid rgba(186, 230, 253, 0.9);
        border-radius: var(--radius-lg);
        box-shadow: 0 10px 30px rgba(37, 99, 235, 0.08);
        margin-bottom: 2rem;
        flex-wrap: wrap;
      `;
      headCard.innerHTML = `
        <div style="position:relative;flex-shrink:0;">
          <img src="${headLec.image}" alt="${headLec.name}" style="width:135px;height:135px;border-radius:50%;object-fit:cover;border:3px solid #60a5fa;box-shadow:0 0 20px rgba(96,165,250,0.35);" onerror="this.src='images/logo.png'">
          <div style="position:absolute;bottom:2px;right:2px;width:34px;height:34px;background:var(--primary-blue);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.95rem;box-shadow:0 4px 10px rgba(0,0,0,0.4);" title="หัวหน้าสาขาวิชาฯ">
            <i class="bi bi-star-fill"></i>
          </div>
        </div>
        <div style="flex-grow:1;min-width:280px;text-align:left;">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:6px;">
            <span class="badge-tag" style="background:rgba(59,130,246,0.2);color:#60a5fa;border-color:rgba(59,130,246,0.4);font-size:0.82rem;padding:4px 12px;">
              <i class="bi bi-person-badge-fill"></i> ${headLec.role}
            </span>
          </div>
          <h3 style="font-size:1.4rem;font-weight:700;color:var(--text-title);margin-bottom:4px;">${headLec.prefix} ${headLec.name}</h3>
          <div style="font-size:0.92rem;color:#94a3b8;font-family:var(--font-heading);margin-bottom:0.75rem;">${headLec.name_en}</div>
          <p style="font-size:0.92rem;color:var(--text-body);line-height:1.6;margin-bottom:1.25rem;">
            <strong style="color:#e2e8f0;">ความเชี่ยวชาญหลัก:</strong> ${headLec.expertise}
          </p>
          <button class="btn-primary" style="font-size:0.88rem;padding:9px 20px;" onclick="openModal(${headLec.id})">
            <i class="bi bi-person-lines-fill"></i> ดูประวัติและผลงานวิชาการ
          </button>
        </div>
      `;
      lecturersGrid.appendChild(headCard);
    }

    // Grid Container for Other 4 Lecturers (Single Row of 4 Cards)
    const gridContainer = document.createElement('div');
    gridContainer.className = 'faculty-4col-grid';

    otherLecs.forEach(lec => {
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
      gridContainer.appendChild(card);
    });

    lecturersGrid.appendChild(gridContainer);
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

/* ==========================================================================
   FEATURE 1: REAL-TIME COURSE SEARCH & FILTER UX (คนที่ 3)
   ========================================================================== */
let originalCourseRows = [];

function initCourseSearch() {
  const searchInput = document.getElementById('courseSearchInput');
  const clearBtn = document.getElementById('courseSearchClear');
  const scheduleSection = document.getElementById('schedule');
  if (!searchInput || !scheduleSection) return;

  // Cache original HTML content and text of table rows
  const rows = scheduleSection.querySelectorAll('.custom-table tbody tr');
  originalCourseRows = Array.from(rows).map(row => ({
    element: row,
    table: row.closest('.custom-table'),
    card: row.closest('.card-dark'),
    originalHTML: row.innerHTML,
    code: (row.cells[0]?.textContent || '').trim(),
    name: (row.cells[1]?.textContent || '').trim(),
    category: (row.cells[2]?.textContent || '').trim()
  }));

  // Real-time Input listener
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    performCourseSearch(query);
  });

  // Clear button listener
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearCourseSearch();
      searchInput.focus();
    });
  }
}

function performCourseSearch(query) {
  const searchInput = document.getElementById('courseSearchInput');
  const clearBtn = document.getElementById('courseSearchClear');
  const statusText = document.getElementById('searchStatusText');
  const resultBadge = document.getElementById('searchResultBadge');
  const noResultsBox = document.getElementById('searchNoResults');
  const scheduleSection = document.getElementById('schedule');

  if (!scheduleSection) return;

  // Toggle clear button
  if (clearBtn) {
    clearBtn.classList.toggle('show', query.length > 0);
  }

  // If query is empty, reset all
  if (!query) {
    originalCourseRows.forEach(item => {
      item.element.innerHTML = item.originalHTML;
      item.element.classList.remove('hidden-row', 'match-row');
    });

    // Remove any empty row placeholders
    scheduleSection.querySelectorAll('.empty-term-row').forEach(el => el.remove());

    if (statusText) statusText.textContent = 'พิมพ์คำค้นหาเพื่อกรองรายวิชาแบบเรียลไทม์';
    if (resultBadge) {
      resultBadge.style.display = 'none';
      resultBadge.textContent = '';
    }
    if (noResultsBox) noResultsBox.classList.remove('show');
    return;
  }

  const cleanQuery = query.toLowerCase();
  // Safe Regex for highlighting
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');

  let matchCount = 0;
  let matchesPerPlan = { 'plan-y1y2': 0, 'plan-y3y4': 0 };

  // Remove existing empty placeholders
  scheduleSection.querySelectorAll('.empty-term-row').forEach(el => el.remove());

  // Evaluate each row
  originalCourseRows.forEach(item => {
    const fullText = `${item.code} ${item.name} ${item.category}`.toLowerCase();
    const isMatch = fullText.includes(cleanQuery);

    const yearPlanContainer = item.element.closest('.year-content');
    const planId = yearPlanContainer ? yearPlanContainer.id : '';

    if (isMatch) {
      matchCount++;
      if (planId && matchesPerPlan[planId] !== undefined) {
        matchesPerPlan[planId]++;
      }

      item.element.classList.remove('hidden-row');
      item.element.classList.add('match-row');

      // Highlight matched terms in cells
      const highlightedCode = item.code.replace(regex, '<mark class="search-highlight">$1</mark>');
      const highlightedName = item.name.replace(regex, '<mark class="search-highlight">$1</mark>');
      const highlightedCategory = item.category.replace(regex, '<mark class="search-highlight">$1</mark>');

      item.element.innerHTML = `
        <td><span class="code-pill">${highlightedCode}</span></td>
        <td>${highlightedName}</td>
        <td>${highlightedCategory}</td>
      `;
    } else {
      item.element.classList.add('hidden-row');
      item.element.classList.remove('match-row');
      item.element.innerHTML = item.originalHTML;
    }
  });

  // Check each table for 0 visible rows and add subtle notice
  const tables = scheduleSection.querySelectorAll('.custom-table');
  tables.forEach(table => {
    const visibleRows = table.querySelectorAll('tbody tr:not(.hidden-row):not(.empty-term-row)');
    if (visibleRows.length === 0) {
      const tbody = table.querySelector('tbody');
      if (tbody) {
        const emptyRow = document.createElement('tr');
        emptyRow.className = 'empty-term-row';
        emptyRow.innerHTML = `<td colspan="3" style="text-align:center;color:var(--text-muted);font-size:0.85rem;padding:12px;font-style:italic;">ไม่มีวิชาที่ตรงกับคำค้นหาในภาคเรียนนี้</td>`;
        tbody.appendChild(emptyRow);
      }
    }
  });

  // Update Status UI
  if (matchCount > 0) {
    if (noResultsBox) noResultsBox.classList.remove('show');
    if (statusText) {
      statusText.innerHTML = `พบผลการค้นหา <strong style="color:#60a5fa;">${matchCount}</strong> รายวิชาสำหรับ "<span style="color:#fff;">${escapeHtml(query)}</span>"`;
    }
    if (resultBadge) {
      resultBadge.style.display = 'inline-flex';
      resultBadge.innerHTML = `<i class="bi bi-check2"></i> พบ ${matchCount} วิชา`;
    }

    // Auto-switch to the plan tab with matches if current tab has none
    const currentActiveTab = scheduleSection.querySelector('.year-content:not([style*="display: none"])');
    const currentActiveId = currentActiveTab ? currentActiveTab.id : 'plan-y1y2';
    if (matchesPerPlan[currentActiveId] === 0) {
      const otherPlanId = currentActiveId === 'plan-y1y2' ? 'plan-y3y4' : 'plan-y1y2';
      if (matchesPerPlan[otherPlanId] > 0) {
        const targetBtn = scheduleSection.querySelector(`.tab-btn-pill[onclick*="${otherPlanId}"]`);
        if (targetBtn) switchYear(otherPlanId, targetBtn);
      }
    }
  } else {
    if (noResultsBox) noResultsBox.classList.add('show');
    if (statusText) {
      statusText.innerHTML = `ไม่พบรายวิชาที่ตรงกับ "<span style="color:#ef4444;">${escapeHtml(query)}</span>"`;
    }
    if (resultBadge) {
      resultBadge.style.display = 'inline-flex';
      resultBadge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      resultBadge.style.color = '#ef4444';
      resultBadge.style.background = 'rgba(239, 68, 68, 0.1)';
      resultBadge.innerHTML = `<i class="bi bi-x"></i> ไม่พบวิชา`;
    }
  }
}

function clearCourseSearch() {
  const searchInput = document.getElementById('courseSearchInput');
  if (searchInput) {
    searchInput.value = '';
    performCourseSearch('');
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[m]);
}

/* ==========================================================================
   FEATURE 2: CLICK-TO-COPY CONTACT INFO (คนที่ 3)
   ========================================================================== */
function initClickToCopy() {
  document.addEventListener('click', (e) => {
    const copyTarget = e.target.closest('[data-copy]');
    if (!copyTarget) return;

    e.preventDefault();
    const textToCopy = copyTarget.getAttribute('data-copy') || copyTarget.textContent.trim();
    const copyType = copyTarget.getAttribute('data-copy-type') || 'ข้อมูล';

    copyToClipboard(textToCopy, () => {
      // Visual feedback on element
      copyTarget.classList.add('copied');
      const hint = copyTarget.querySelector('.copy-badge-hint');
      const originalHintText = hint ? hint.textContent : '';
      if (hint) hint.textContent = 'คัดลอกแล้ว!';

      setTimeout(() => {
        copyTarget.classList.remove('copied');
        if (hint) hint.textContent = originalHintText;
      }, 1800);

      // Toast notification
      showToast(`คัดลอก${copyType}เรียบร้อยแล้ว! (${textToCopy})`, 'bi-clipboard-check-fill');
    });
  });
}

function copyToClipboard(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => {
        if (onSuccess) onSuccess();
      })
      .catch(() => {
        fallbackCopy(text, onSuccess);
      });
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text, onSuccess) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  textArea.style.top = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand('copy');
    if (successful && onSuccess) onSuccess();
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}

/* ==========================================================================
   FEATURE 3: FLOATING SCROLL-TO-TOP BUTTON (คนที่ 3)
   ========================================================================== */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  // Show/Hide on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }, { passive: true });

  // Smooth Scroll on Click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   FEATURE 4: QUICK SHARE BUTTON (คนที่ 3)
   ========================================================================== */
function initQuickShare() {
  const shareBtn = document.getElementById('quickShareBtn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    const pageData = {
      title: 'สาขาวิชาวิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ (CS SSKRU)',
      text: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏศรีสะเกษ ก้าวสู่อนาคตทางเทคโนโลยี',
      url: window.location.href
    };

    // Use Web Share API if supported
    if (navigator.share) {
      try {
        await navigator.share(pageData);
        showToast('แชร์ลิงก์หน้าเว็บสำเร็จ!', 'bi-share-fill');
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          // Fallback to copy link on error
          copyCurrentUrl();
        }
      }
    } else {
      // Fallback: Copy URL to clipboard
      copyCurrentUrl();
    }
  });
}

function copyCurrentUrl() {
  copyToClipboard(window.location.href, () => {
    showToast('คัดลอกลิงก์เว็บไซต์แล้ว! สามารถนำไปแชร์ต่อได้ทันที', 'bi-link-45deg', 2500);
  });
}

// ==========================================================================
// MOTION & ANIMATIONS MODULE (ความรับผิดชอบ: คนที่ 1)
// ==========================================================================

// --- 1. Card Glow Effect (Mouse Move Tracking - Optimized) ---
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

// --- 2. Stats Counter Animation ---
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

// --- 3. Interactive Particle Canvas Background ---
function initHeroParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  // Create canvas
  let canvas = document.getElementById('hero-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'hero-canvas';
    hero.insertBefore(canvas, hero.firstChild);
  }

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

// --- 4. Magnetic Button Effect ---
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary');

  buttons.forEach(btn => {
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

// --- 5. Aurora Background Orbs Injector ---
function initAuroraBackground() {
  const container = document.createElement('div');
  container.className = 'bg-glow-container';
  
  const orb1 = document.createElement('div');
  orb1.className = 'bg-glow-orb bg-glow-orb-1';
  
  const orb2 = document.createElement('div');
  orb2.className = 'bg-glow-orb bg-glow-orb-2';
  
  container.appendChild(orb1);
  container.appendChild(orb2);
  document.body.insertBefore(container, document.body.firstChild);
}

// --- 6. Dynamic Robot Backdrop Injector ---
function initRobotBackdrop() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  
  const img = document.createElement('img');
  img.src = 'images/robot_background.png';
  img.className = 'bg-robot';
  img.alt = 'Robot Hologram';
  
  hero.appendChild(img);
}

// --- 7. Dynamic Downloads Robot Backdrop Injector ---
function initDownloadsBackdrop() {
  const downloadsSection = document.getElementById('downloads');
  if (!downloadsSection) return;

  const img = document.createElement('img');
  img.src = 'images/robot_head_background.png';
  img.className = 'bg-robot-head';
  img.alt = 'Robot Brain Blueprint';

  downloadsSection.appendChild(img);
}

/* ==========================================================================
   PREMIUM FEATURE: LIVE TCAS COUNTDOWN BANNER
   ========================================================================== */
function initTcasCountdown() {
  const daysEl = document.getElementById('tcasDays');
  const hoursEl = document.getElementById('tcasHours');
  const minutesEl = document.getElementById('tcasMinutes');
  const secondsEl = document.getElementById('tcasSeconds');

  if (!daysEl || !hoursEl) return;

  // Set target deadline: Next admission milestone
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth() + 2, 28, 23, 59, 59);

  function updateTimer() {
    const currentTime = new Date().getTime();
    const diff = targetDate.getTime() - currentTime;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   PREMIUM FEATURE: COMMAND PALETTE (CTRL + K)
   ========================================================================== */
const commandList = [
  { title: "หน้าแรก (Hero Section)", icon: "bi-house-door-fill", section: "#hero", category: "นำทาง" },
  { title: "เกี่ยวกับหลักสูตรและวิสัยทัศน์", icon: "bi-info-circle-fill", section: "#about", category: "นำทาง" },
  { title: "กลุ่มวิชาความเชี่ยวชาญ (Specialization Tracks)", icon: "bi-stack", section: "#curriculum", category: "หลักสูตร" },
  { title: "รายงานความสำเร็จและคุณภาพหลักสูตร (AUN-QA & Robotics)", icon: "bi-patch-check-fill", section: "#reports", category: "คุณภาพ" },
  { title: "แผนการเรียน 4 ปี (Study Plan)", icon: "bi-calendar4-week", section: "#schedule", category: "หลักสูตร" },
  { title: "ทำเนียบคณาจารย์ผู้สอน", icon: "bi-people-fill", section: "#lecturers", category: "ข้อมูล" },
  { title: "ดาวน์โหลดเล่มหลักสูตร มคอ.2", icon: "bi-file-earmark-pdf-fill", section: "#downloads", category: "เอกสาร" },
  { title: "เครื่องมือคำนวณเกรด (GPA Calculator)", icon: "bi-calculator-fill", action: "openGpaModal", category: "เครื่องมือ" },
  { title: "คำถามที่พบบ่อย (FAQ)", icon: "bi-question-circle-fill", section: "#faq", category: "แนะนำ" },
  { title: "ช่องทางการติดต่อ & แผนที่", icon: "bi-telephone-fill", section: "#contact", category: "ติดต่อ" },
  { title: "ระบบรับสมัครนักศึกษาใหม่ (TCAS Online)", icon: "bi-mortarboard-fill", url: "https://www.oass.sskru.ac.th/std.sskru/s17.html", category: "รับสมัคร" }
];

function initCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  const input = document.getElementById('cmdPaletteInput');
  const list = document.getElementById('cmdPaletteList');
  if (!modal || !input || !list) return;

  // Keyboard shortcut Ctrl+K or Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCmdPalette();
    } else if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeCmdPaletteDirect();
    }
  });

  input.addEventListener('input', (e) => {
    renderCommandList(e.target.value.trim().toLowerCase());
  });

  renderCommandList('');
}

function renderCommandList(query) {
  const list = document.getElementById('cmdPaletteList');
  if (!list) return;

  const filtered = commandList.filter(item => 
    !query || item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    list.innerHTML = `<li style="padding:1.5rem;text-align:center;color:var(--text-muted);font-size:0.9rem;">ไม่พบเมนูหรือคำสั่งที่ค้นหา</li>`;
    return;
  }

  list.innerHTML = filtered.map((item, idx) => `
    <li class="cmd-palette-item ${idx === 0 ? 'active' : ''}" onclick="executeCmdItem(${JSON.stringify(item).replace(/"/g, '&quot;')})">
      <div class="item-title">
        <i class="bi ${item.icon}"></i>
        <span>${item.title}</span>
      </div>
      <span class="cmd-palette-shortcut">${item.category}</span>
    </li>
  `).join('');
}

function openCmdPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  const input = document.getElementById('cmdPaletteInput');
  if (modal) {
    modal.classList.add('show');
    if (input) {
      input.value = '';
      renderCommandList('');
      setTimeout(() => input.focus(), 100);
    }
  }
}

function closeCmdPalette(e) {
  if (e.target.id === 'cmdPaletteModal') {
    closeCmdPaletteDirect();
  }
}

function closeCmdPaletteDirect() {
  const modal = document.getElementById('cmdPaletteModal');
  if (modal) modal.classList.remove('show');
}

function executeCmdItem(item) {
  closeCmdPaletteDirect();
  if (item.action === 'openGpaModal') {
    openGpaModal();
  } else if (item.section) {
    const el = document.querySelector(item.section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (item.url) {
    window.open(item.url, '_blank');
  }
}

/* ==========================================================================
   PREMIUM FEATURE: STUDENT PROJECT SHOWCASE FILTERING
   ========================================================================== */
function filterProjects(category, btn) {
  const cards = document.querySelectorAll('.showcase-card');
  const buttons = document.querySelectorAll('.showcase-filter-wrapper .tab-btn-pill');

  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category') || '';
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.35s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ==========================================================================
   PREMIUM FEATURE: INTERACTIVE FAQ ACCORDION & SEARCH
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-accordion-item');
  const searchInput = document.getElementById('faqSearchInput');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        items.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherAns = other.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
        } else {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        }
      });
    }
  });

  // Real-time FAQ Search Filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          item.style.display = 'block';
          if (q) {
            item.classList.add('active');
            const ans = item.querySelector('.faq-answer');
            if (ans) ans.style.maxHeight = ans.scrollHeight + 30 + 'px';
          }
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

/* ==========================================================================
   PREMIUM FEATURE: GPA & CREDIT PLANNER CALCULATOR
   ========================================================================== */
const sampleGpaCourses = [
  { name: "CS101 พื้นฐานวิทยาการคอมพิวเตอร์", credits: 3, grade: "4.0" },
  { name: "CS102 การเขียนโปรแกรมเบื้องต้น (Python)", credits: 3, grade: "4.0" },
  { name: "MA111 คณิตศาสตร์ดิสครีต", credits: 3, grade: "3.5" },
  { name: "GE101 ภาษาอังกฤษเพื่อการสื่อสาร", credits: 3, grade: "3.5" }
];

function initGpaCalculator() {
  const container = document.getElementById('gpaCourseRowsContainer');
  if (!container) return;

  container.innerHTML = '';
  sampleGpaCourses.forEach(c => {
    addGpaCourseRow(c.name, c.credits, c.grade);
  });
  calculateGpa();
}

function addGpaCourseRow(name = "", credits = 3, grade = "4.0") {
  const container = document.getElementById('gpaCourseRowsContainer');
  if (!container) return;

  const row = document.createElement('div');
  row.className = 'gpa-input-row';
  row.innerHTML = `
    <input type="text" class="gpa-input-field gpa-cname" placeholder="ชื่อรายวิชา" value="${name}">
    <select class="gpa-select gpa-ccredits" onchange="calculateGpa()">
      <option value="1" ${credits === 1 ? 'selected' : ''}>1 หน่วยกิต</option>
      <option value="2" ${credits === 2 ? 'selected' : ''}>2 หน่วยกิต</option>
      <option value="3" ${credits === 3 ? 'selected' : ''}>3 หน่วยกิต</option>
      <option value="4" ${credits === 4 ? 'selected' : ''}>4 หน่วยกิต</option>
      <option value="6" ${credits === 6 ? 'selected' : ''}>6 หน่วยกิต</option>
    </select>
    <select class="gpa-select gpa-cgrade" onchange="calculateGpa()">
      <option value="4.0" ${grade === "4.0" ? 'selected' : ''}>A (4.0)</option>
      <option value="3.5" ${grade === "3.5" ? 'selected' : ''}>B+ (3.5)</option>
      <option value="3.0" ${grade === "3.0" ? 'selected' : ''}>B (3.0)</option>
      <option value="2.5" ${grade === "2.5" ? 'selected' : ''}>C+ (2.5)</option>
      <option value="2.0" ${grade === "2.0" ? 'selected' : ''}>C (2.0)</option>
      <option value="1.5" ${grade === "1.5" ? 'selected' : ''}>D+ (1.5)</option>
      <option value="1.0" ${grade === "1.0" ? 'selected' : ''}>D (1.0)</option>
      <option value="0.0" ${grade === "0.0" ? 'selected' : ''}>F (0.0)</option>
    </select>
    <button type="button" style="background:rgba(239,68,68,0.15);border:none;color:#ef4444;width:30px;height:30px;border-radius:6px;cursor:pointer;" onclick="removeGpaCourseRow(this)">
      <i class="bi bi-trash"></i>
    </button>
  `;
  container.appendChild(row);
  calculateGpa();
}

function removeGpaCourseRow(btn) {
  const row = btn.closest('.gpa-input-row');
  if (row) {
    row.remove();
    calculateGpa();
  }
}

function calculateGpa() {
  const rows = document.querySelectorAll('.gpa-input-row');
  let totalCredits = 0;
  let totalPoints = 0;

  rows.forEach(row => {
    const cred = parseFloat(row.querySelector('.gpa-ccredits').value) || 0;
    const grade = parseFloat(row.querySelector('.gpa-cgrade').value) || 0;
    totalCredits += cred;
    totalPoints += (cred * grade);
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  
  const gpaEl = document.getElementById('gpaResultNumber');
  const credEl = document.getElementById('gpaTotalCredits');
  const pointEl = document.getElementById('gpaTotalPoints');
  const badgeEl = document.getElementById('gpaStatusBadge');

  if (gpaEl) gpaEl.textContent = gpa;
  if (credEl) credEl.textContent = `${totalCredits} หน่วยกิต`;
  if (pointEl) pointEl.textContent = totalPoints.toFixed(2);

  if (badgeEl) {
    if (parseFloat(gpa) >= 3.50) {
      badgeEl.textContent = 'เกียรตินิยมอันดับ 1';
      badgeEl.style.color = '#10b981';
    } else if (parseFloat(gpa) >= 3.25) {
      badgeEl.textContent = 'เกียรตินิยมอันดับ 2';
      badgeEl.style.color = '#60a5fa';
    } else if (parseFloat(gpa) >= 2.00) {
      badgeEl.textContent = 'สถานะ: ปกติ (ผ่านเกณฑ์)';
      badgeEl.style.color = '#f8fafc';
    } else {
      badgeEl.textContent = 'ต้องปรับปรุงผลการเรียน';
      badgeEl.style.color = '#ef4444';
    }
  }
}

function openGpaModal() {
  const modal = document.getElementById('gpaModal');
  if (modal) {
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
  }
}

function closeGpaModal(e) {
  if (e.target.id === 'gpaModal') {
    closeGpaModalDirect();
  }
}

function closeGpaModalDirect() {
  const modal = document.getElementById('gpaModal');
  if (modal) {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
  }
}

/* ==========================================================================
   GLOBAL FEATURE: BILINGUAL TRANSLATION ENGINE (TH / EN)
   ========================================================================== */
const i18nDictionary = {
  th: {
    nav_brand: "วิทยาการคอมพิวเตอร์",
    nav_brand_sub: "มรภ.ศรีสะเกษ",
    nav_home: "หน้าแรก",
    nav_about: "เกี่ยวกับเรา",
    nav_why: "จุดเด่น",
    nav_curriculum: "หลักสูตร",
    nav_certs: "มาตรฐานสากล",
    nav_showcase: "ผลงาน",
    nav_schedule: "แผนการเรียน",
    nav_faq: "คำถามพบบ่อย",
    nav_lecturers: "คณาจารย์",
    nav_downloads: "ดาวน์โหลด",
    nav_contact: "ติดต่อเรา",
    hero_title: "ก้าวสู่อนาคตทางเทคโนโลยี สร้างสรรค์ซอฟต์แวร์แห่งนวัตกรรม",
    hero_desc: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏศรีสะเกษ มุ่งผลิตบัณฑิตนักพัฒนาระดับสากล เชี่ยวชาญทั้ง Full-Stack, AI และ Cloud Computing",
    btn_curriculum: "ดูรายละเอียดหลักสูตร",
    btn_apply: "สมัครเรียน TCAS ออนไลน์"
  },
  en: {
    nav_brand: "Computer Science",
    nav_brand_sub: "SSKRU",
    nav_home: "Home",
    nav_about: "About",
    nav_why: "Highlights",
    nav_quiz: "Career Quiz",
    nav_curriculum: "Curriculum",
    nav_certs: "Certifications",
    nav_showcase: "Showcase",
    nav_schedule: "Study Plan",
    nav_faq: "FAQ",
    nav_lecturers: "Faculty",
    nav_downloads: "Downloads",
    nav_contact: "Contact",
    hero_title: "Shape the Future of Tech with Global Innovation & Code",
    hero_desc: "Bachelor of Science in Computer Science, Sisaket Rajabhat University. Empowering next-generation engineers in Full-Stack, AI, Data Science & Cloud Systems.",
    btn_curriculum: "Explore Curriculum",
    btn_apply: "Apply TCAS Online"
  }
};

let currentLanguage = 'th';

function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('cs_lang') || 'th';
  setLanguage(savedLang, false);
}

function toggleLanguage() {
  const nextLang = currentLanguage === 'th' ? 'en' : 'th';
  setLanguage(nextLang, true);
}

function setLanguage(lang, notify = true) {
  currentLanguage = lang;
  localStorage.setItem('cs_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update toggle button UI
  const thBtn = document.getElementById('langTh');
  const enBtn = document.getElementById('langEn');
  if (thBtn && enBtn) {
    if (lang === 'en') {
      thBtn.classList.remove('active');
      enBtn.classList.add('active');
    } else {
      thBtn.classList.add('active');
      enBtn.classList.remove('active');
    }
  }

  // Update elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nDictionary[lang] && i18nDictionary[lang][key]) {
      el.textContent = i18nDictionary[lang][key];
    }
  });

  if (notify) {
    const msg = lang === 'en' ? 'Switched to English interface' : 'เปลี่ยนเป็นเมนูภาษาไทยแล้ว';
    showToast(msg, 'bi-translate', 1800);
  }
}

/* ==========================================================================
   GLOBAL FEATURE: PROGRESSIVE WEB APP (PWA) & SERVICE WORKER
   ========================================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('CS SSKRU Service Worker Registered:', reg.scope);
      })
      .catch((err) => {
        console.log('Service Worker Registration Skipped:', err);
      });
  }
}

/* ==========================================================================
   GLOBAL FEATURE: SILKY-SMOOTH SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  const animateTargets = document.querySelectorAll('section, .card-dark, .section-header, .head-lecturer-card, .faq-accordion-item');
  animateTargets.forEach(el => {
    if (!el.hasAttribute('data-animate')) {
      el.setAttribute('data-animate', '');
    }
    observer.observe(el);
  });
}

// Global Initialization for All Features
document.addEventListener('DOMContentLoaded', () => {
  // Visual Effects & Animations
  initCardGlowEffect();
  initHeroParticles();
  initMagneticButtons();
  initAuroraBackground();
  initRobotBackdrop();
  initDownloadsBackdrop();
  initStatsCounter();
  initScrollReveal();

  // Interactive UX Features
  initCourseSearch();
  initClickToCopy();
  initScrollToTop();
  initQuickShare();
  initTcasCountdown();
  initCommandPalette();
  initFaqAccordion();
  initGpaCalculator();
  initLanguageSwitcher();
  initServiceWorker();
});


