# 🛠️ TEAM GIT WORKFLOW & AI PROMPT CHEATSHEET

> คู่มือการทำงานร่วมกัน 3 คนผ่าน GitHub (Branching Strategy & Multi-Part Master Prompts)

---

## 🌳 1. แผนภูมิการแตก Branch (GitFlow Strategy)

```text
main (เวอร์ชันสมบูรณ์ส่งอาจารย์ 100%)
  ▲
  └── Merge เมื่อทุกอย่างใน dev ผ่านการทดสอบเรียบร้อยแล้ว
  │
dev (Branch ศูนย์กลางสำหรับรวมงาน 3 คน)
  ├── 🔀 Merge PR #1: feature/animations-and-effects (คนที่ 1)
  ├── 🔀 Merge PR #2: feature/ui-layout-and-colors (คนที่ 2)
  └── 🔀 Merge PR #3: feature/interactive-ux-features (คนที่ 3)
```

---

## 📌 2. กฎการตั้งชื่อ Commit Message (Standard Commit Convention)

เวลา Commit งาน ให้ใช้รูปแบบมาตรฐานสากล:

- `feat:` เพิ่มฟีเจอร์ใหม่ เช่น `git commit -m "feat: add number counter animation"`
- `style:` ปรับแต่งความสวยงาม/CSS เช่น `git commit -m "style: polish bento grid padding"`
- `fix:` แก้ไขบั๊ก เช่น `git commit -m "fix: resolve search filter issue"`

---

## 🟢 3. MASTER PROMPT ชุดที่ 1: สำหรับคนที่ 1 (Motion & Animations)

- **Branch:** `feature/animations-and-effects`
- **คำสั่ง Git ประจำตัว:**
  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b feature/animations-and-effects
  # ทำงานเสร็จแล้ว:
  git add .
  git commit -m "feat: add scroll animations, number counter, and typing effect"
  git push origin feature/animations-and-effects
  ```

## 🔵 4. MASTER PROMPT ชุดที่ 2: สำหรับคนที่ 2 (UI, Layout & Colors)

- **Branch:** `feature/ui-layout-and-colors`
- **คำสั่ง Git ประจำตัว:**
  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b feature/ui-layout-and-colors
  # ทำงานเสร็จแล้ว:
  git add .
  git commit -m "feat: enhance dark UI layout, bento grid, and mobile responsiveness"
  git push origin feature/ui-layout-and-colors
  ```

## 🟣 5. MASTER PROMPT ชุดที่ 3: สำหรับคนที่ 3 (Interactive Features & Search UX)

- **Branch:** `feature/interactive-ux-features`
- **คำสั่ง Git ประจำตัว:**
  ```bash
  git checkout dev
  git pull origin dev
  git checkout -b feature/interactive-ux-features
  # ทำงานเสร็จแล้ว:
  git add .
  git commit -m "feat: implement real-time course search, click-to-copy, and scroll-to-top"
  git push origin feature/interactive-ux-features
  ```

## 🚀 6. ขั้นตอนการรวมงาน (Pull Request Workflow)

1. ทุกคน Push Branch ของตัวเองขึ้น GitHub
2. เข้าหน้า GitHub Repository ➡️ กด **Compare & pull request**
3. **สำคัญ:** ตรวจสอบว่า Base Branch ปลายทางคือ **`dev`** (ไม่ใช่ `main`)
4. ให้เพื่อนในกลุ่มกด Approve แล้วกด **Merge pull request**
5. เมื่อ Merge ครบทั้ง 3 คน ให้ทดสอบเปิดเว็บใน `dev`
6. เปิด PR สุดท้าย: **`dev` ➡️ `main`** แล้วกด Merge เพื่อส่งอาจารย์อย่างสมบูรณ์แบบ! 🎉
