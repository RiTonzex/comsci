# 🎓 เว็บไซต์สาขาวิชาวิทยาการคอมพิวเตอร์ (CS SSKRU)
> **มหาวิทยาลัยราชภัฏศรีสะเกษ | คณะศิลปศาสตร์และวิทยาศาสตร์**  
> หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ (หลักสูตรปรับปรุง พ.ศ. 2568)

---

## 🌟 จุดเด่นของโปรเจกต์ (Features)
- **Modern Dark Tech Design:** คุมโทนสี Dark Slate เรียบหรู สบายตา ตามมาตรฐานเว็บไอทีสากล
- **Design System & Reusable Tokens:** จัดการตัวแปรสี ฟอนต์ และคลาสสำเร็จรูปผ่าน `:root` ใน `css/theme.css`
- **Responsive Layout:** รองรับการแสดงผลทุกขนาดหน้าจอ (Desktop, Tablet, Mobile)
- **Interactive Information:** ระบบแท็บสลับดูปรัชญา/วิสัยทัศน์/PLO, ตารางแผนการศึกษา 4 ปี, และระบบ Modal ดูประวัติ/ผลงานวิจัยของอาจารย์
- **Google Maps & Contact:** ระบบแผนที่ปักหมุดอาคารเรียนและช่องทางการติดต่อสาขาวิชาฯ

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
comsci-web/
├── css/
│   └── theme.css          # 🎨 Design System, CSS Variables (:root) และ Reusable Classes
├── js/
│   └── main.js            # ⚙️ ข้อมูลคณาจารย์, ระบบ Tabs, Modal และ Dynamic Logic
├── images/                # 🖼️ โฟลเดอร์เก็บไฟล์ภาพและโลโก้ทั้งหมด
├── index.html             # 📄 โครงสร้างหน้าเว็บหลัก
├── README.md              # 📖 รายละเอียดโปรเจกต์
└── TEAM_WORKFLOW.md       # 🛠️ คู่มือ Git Collaboration & Master Prompts 3 คน
```

---

## 👥 แผนการแบ่งงานแบบ Git Collaboration (3 Branches)

| สมาชิก | Branch Name | หน้าที่ความรับผิดชอบหลัก |
| :--- | :--- | :--- |
| **คนที่ 1** | `feature/animations-and-effects` | ระบบ Scroll Reveal, Number Counter สถิติวิ่ง, Typing Effect และ Micro-interactions |
| **คนที่ 2** | `feature/ui-layout-and-colors` | ปรับแต่ง Bento Grid Layout, คุมโทนสี Dark Theme, Typography และ Mobile Responsive |
| **คนที่ 3** | `feature/interactive-ux-features` | ระบบค้นหารายวิชาแบบเรียลไทม์ (Live Search), Click-to-Copy ข้อมูลติดต่อ และ Scroll-to-Top |

*ดูรายละเอียดคำสั่ง Git และ Prompt สั่ง AI ทั้งหมดได้ที่ไฟล์ [TEAM_WORKFLOW.md](file:///d:/T/comsci69_เทอม1/phisan/comsci-web/TEAM_WORKFLOW.md)*

---

## 💻 วิธีการเปิดใช้งาน (Getting Started)
สามารถเปิดไฟล์ `index.html` บนเว็บเบราว์เซอร์ (Google Chrome, Microsoft Edge, Safari) ได้ทันทีโดยไม่ต้องติดตั้งโปรแกรมเสริม
