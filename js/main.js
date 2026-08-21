/**
 * MAIN JAVASCRIPT LOGIC & BILINGUAL i18n SYSTEM (TH / EN)
 * สาขาวิชาวิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ (CS SSKRU)
 * Theme: Prestigious University Academic Style
 */

// ============================================================================
// 1. BILINGUAL TRANSLATION DICTIONARY (รองรับภาษาไทย และ ภาษาอังกฤษ 100%)
// ============================================================================
const translations = {
  th: {
    // Top Bar & Navbar
    top_sskru_web: '<i class="bi bi-bank2"></i> เว็บไซต์ มรภ.ศรีสะเกษ',
    brand_title: 'วิทยาการคอมพิวเตอร์',
    brand_sub: 'คณะศิลปศาสตร์และวิทยาศาสตร์ มรภ.ศรีสะเกษ',
    nav_home: 'หน้าแรก',
    nav_about: 'เกี่ยวกับเรา',
    nav_curriculum: 'หลักสูตร',
    nav_schedule: 'แผนการเรียน',
    nav_news: 'ข่าวสาร',
    nav_faculty: 'คณาจารย์',
    nav_downloads: 'ดาวน์โหลด',
    nav_contact: 'ติดต่อเรา',
    nav_cta: '<i class="bi bi-mortarboard-fill"></i> สมัครเรียน TCAS',

    // Hero Section
    hero_badge: '<i class="bi bi-stars"></i> หลักสูตรวิทยาศาสตรบัณฑิต (วท.บ.) ปรับปรุง พ.ศ. 2568',
    hero_title: 'สร้างผู้นำแห่งอนาคต<br><span class="text-highlight">วิทยาการคอมพิวเตอร์</span> & AI',
    hero_desc: '"เชี่ยวชาญเทคโนโลยีขั้นสูง มุ่งสู่นวัตกรรมซอฟต์แวร์แห่งอนาคต" หลักสูตรทันสมัยที่มุ่งเน้นการลงมือปฏิบัติจริง พร้อมก้าวสู่ Full-Stack Developer, AI & Data Scientist และวิศวกรซอฟต์แวร์ระดับสากล',
    hero_btn_apply: '<i class="bi bi-mortarboard-fill"></i> สมัครเข้าศึกษาต่อ (TCAS)',
    hero_btn_curriculum: '<i class="bi bi-journal-code"></i> ข้อมูลหลักสูตรการศึกษา',
    stat_years_num: '4 ปี',
    stat_years_label: 'ระยะเวลาศึกษา',
    stat_credits_num: '133',
    stat_credits_label: 'หน่วยกิตขั้นต่ำ',
    stat_job_num: '100%',
    stat_job_label: 'อัตราโอกาสได้งานทำ',
    stat_alumni_num: '1,000+',
    stat_alumni_label: 'เครือข่ายศิษย์เก่า',

    // Quick Access Bar
    qa_tcas_title: 'สมัครเรียน TCAS',
    qa_tcas_desc: 'ระเบียบการและโควตารับสมัคร',
    qa_curr_title: 'หลักสูตร วท.บ.',
    qa_curr_desc: 'โครงสร้าง 3 กลุ่มความเชี่ยวชาญ',
    qa_plan_title: 'แผนการเรียน 4 ปี',
    qa_plan_desc: 'รายวิชาและตารางเรียนทุกชั้นปี',
    qa_fac_title: 'คณาจารย์และวิจัย',
    qa_fac_desc: 'ประวัติและผลงานตีพิมพ์ระดับชาติ',
    qa_doc_title: 'ดาวน์โหลดเอกสาร',
    qa_doc_desc: 'เล่ม มคอ.2 และแบบฟอร์มสาขา',

    // About Section
    about_subtitle: '<i class="bi bi-info-circle"></i> ABOUT OUR PROGRAM',
    about_title: 'ข้อมูลรายละเอียดหลักสูตรเชิงกลยุทธ์',
    about_desc: 'โครงสร้างเชิงเป้าหมาย ผลลัพธ์การเรียนรู้ และทิศทางเพื่อสร้างบัณฑิตที่ตอบโจทย์อนาคต',
    tab_btn_philosophy: '<i class="bi bi-lightbulb"></i> ปรัชญาของหลักสูตร',
    tab_btn_vision: '<i class="bi bi-eye"></i> วิสัยทัศน์ & พันธกิจ',
    tab_btn_objectives: '<i class="bi bi-bullseye"></i> วัตถุประสงค์หลักสูตร',
    tab_btn_plo: '<i class="bi bi-trophy"></i> ผลลัพธ์การเรียนรู้ (PLOs)',
    phil_quote: '"เชี่ยวชาญด้านวิทยาการคอมพิวเตอร์ มีคุณธรรม นำนวัตกรรมเพื่อพัฒนาท้องถิ่น"',
    phil_desc: 'ปรัชญานี้สะท้อนอัตลักษณ์สำคัญ 3 ด้าน ได้แก่ ความเชี่ยวชาญในวิชาชีพคอมพิวเตอร์ การมีคุณธรรมจริยธรรมวิชาชีพ และการพัฒนานวัตกรรมนำไปใช้พัฒนาท้องถิ่น ซึ่งเชื่อมโยงโดยตรงกับวิสัยทัศน์พันธกิจเพื่อการร่วมขับเคลื่อนสังคมของมหาวิทยาลัยราชภัฏ',
    phil_c1_title: '<i class="bi bi-laptop" style="color:var(--accent-pink);"></i> เชี่ยวชาญวิชาชีพ',
    phil_c1_desc: 'ฝึกฝนทักษะการเขียนโปรแกรม โครงสร้างข้อมูล อัลกอริทึม และระบบฐานข้อมูลระดับเข้มข้น',
    phil_c2_title: '<i class="bi bi-shield-check" style="color:var(--accent-pink);"></i> คุณธรรมจริยธรรม',
    phil_c2_desc: 'ยึดมั่นในจรรยาบรรณวิชาชีพไอที เคารพกฎหมายทรัพย์สินทางปัญญา และ พ.ร.บ. คอมพิวเตอร์',
    phil_c3_title: '<i class="bi bi-rocket-takeoff" style="color:var(--accent-pink);"></i> นวัตกรรมสู่ท้องถิ่น',
    phil_c3_desc: 'สร้างสรรค์โครงงานและแอปพลิเคชันที่ช่วยแก้ปัญหาและยกระดับเศรษฐกิจชุมชนจริง',
    vision_title: 'วิสัยทัศน์ที่เกี่ยวข้อง',
    vision_desc: 'มุ่งร่วมเป็นกำลังสำคัญขับเคลื่อนมหาวิทยาลัยให้เป็น <strong>"สถาบันอุดมศึกษาแห่งการเรียนรู้ตลอดชีวิต" (Lifelong Learning)</strong>',
    mission_1_title: '1. ผลิตบัณฑิตคุณภาพ',
    mission_1_desc: 'สร้างบัณฑิตที่มีทักษะความรู้ด้านวิทยาการคอมพิวเตอร์และเทคโนโลยีขั้นสูง พร้อมทำงานจริงในทุกองค์กร',
    mission_2_title: '2. วิจัยและนวัตกรรม',
    mission_2_desc: 'ส่งเสริมวิชาการ ค้นคว้าวิจัยประยุกต์ และพัฒนานวัตกรรมซอฟต์แวร์สอดคล้องกับท้องถิ่น',
    mission_3_title: '3. บริการวิชาการท้องถิ่น',
    mission_3_desc: 'พัฒนาสมรรถนะนักศึกษาในการเรียนรู้ร่วมกับสังคม ก้าวสู่วิศวกรสังคมที่มีหัวใจบริการ',
    mission_4_title: '4. คุณธรรมและกฎหมาย',
    mission_4_desc: 'หล่อหลอมความซื่อสัตย์สุจริต และปฏิบัติตามจรรยาบรรณวิชาชีพนักไอทีอย่างมั่นคง',
    obj_1_title: 'เป้าหมาย 1',
    obj_1_desc: '<strong>ความรู้ความเชี่ยวชาญเฉพาะด้าน:</strong> มีความรู้และทักษะเฉพาะด้านในสาขาวิทยาการคอมพิวเตอร์อย่างลึกซึ้ง สามารถออกแบบ พัฒนา และบำรุงรักษาระบบซอฟต์แวร์ทั้งออนไลน์และออฟไลน์',
    obj_2_title: 'เป้าหมาย 2',
    obj_2_desc: '<strong>การประยุกต์สร้างนวัตกรรม:</strong> มีทักษะในการประยุกต์ใช้วิธีวิทยาและเทคโนโลยีในการพัฒนางานวิจัย โครงงานนวัตกรรม เพื่อสร้างมูลค่าทางเศรษฐกิจให้แก่ชุมชน',
    obj_3_title: 'เป้าหมาย 3',
    obj_3_desc: '<strong>การคิดเชิงระบบ:</strong> วิเคราะห์และประมวลองค์ความรู้ทางเทคนิคแบบบูรณาการ เพื่อวางแผนจัดสรรกระบวนการทางคอมพิวเตอร์แก้ปัญหาเชิงซ้อนได้อย่างเป็นระบบ',
    obj_4_title: 'เป้าหมาย 4',
    obj_4_desc: '<strong>คุณธรรมจริยธรรม:</strong> ยึดมั่นในการประพฤติตนเป็นคนดีมีระเบียบวินัย ปฏิบัติตามจรรยาบรรณวิชาชีพ พร้อมมนุษยสัมพันธ์และการทำงานเป็นทีม',
    plo_1: 'ประยุกต์ใช้ความรู้ด้านวิทยาการคอมพิวเตอร์เพื่อแก้ปัญหาและสนับสนุนการทำงานด้วยระบบคอมพิวเตอร์',
    plo_2: 'พัฒนาระบบด้วยภาษาโปรแกรมต่าง ๆ ในรูปแบบออฟไลน์และออนไลน์ ตามเกณฑ์มาตรฐานสากล',
    plo_3: 'พัฒนาแอปพลิเคชันบนอุปกรณ์พกพา (Mobile App) ตรงตามความต้องการของผู้ใช้งาน',
    plo_4: 'ทดสอบคุณภาพการทำงานของซอฟต์แวร์ตามกระบวนการ Software Testing ได้อย่างถูกต้อง',
    plo_5: 'พัฒนานวัตกรรมด้านเทคโนโลยีคอมพิวเตอร์ที่สอดคล้องกับความต้องการของชุมชนและหน่วยงานท้องถิ่น',
    plo_6: 'แสดงออกถึงกระบวนการคิดเชิงระบบ ความเป็นมืออาชีพ มีความอดทน มุ่งมั่น และรับผิดชอบสูง',
    plo_7: 'ตระหนักและประยุกต์ใช้หลักจรรยาบรรณวิชาชีพ คุณธรรม และจริยธรรมตาม พ.ร.บ. คอมพิวเตอร์',

    // Why CS Section
    why_subtitle: '<i class="bi bi-star"></i> WHY CHOOSE CS SSKRU',
    why_title: 'ทำไมต้องเรียนวิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ',
    why_desc: 'เตรียมพร้อมทักษะแห่งอนาคต ผสานทฤษฎีเทคโนโลยีขั้นสูงเข้ากับการลงมือปฏิบัติการจริงในห้องแล็บที่ทันสมัย',
    why_c1_title: 'งานที่ตอบโจทย์อนาคต & โตไว',
    why_c1_desc: 'โอกาสกว้างขวางในตลาดงานสายเทคโนโลยี เช่น Full-Stack Developer, AI Engineer, Data Scientist และ Cloud Architect',
    why_c2_title: 'รายได้มั่นคง & ตลาดต้องการสูง',
    why_c2_desc: 'สายอาชีพดิจิทัลและเทคโนโลยีมีอัตราเงินเดือนเริ่มต้นและอัตราการเติบโตเฉลี่ยที่สูงกว่าวิชาชีพอื่นอย่างเด่นชัด มีตำแหน่งงานรองรับทั่วประเทศ',
    why_c3_title: 'ความยืดหยุ่น & ทำงานได้ทั่วโลก',
    why_c3_desc: 'สามารถเลือกรูปแบบทำงานออนไลน์จากทุกมุมโลก (Work from Anywhere) ประกอบอาชีพฟรีแลนซ์ หรือก้าวสู่นักธุรกิจสตาร์ทอัปไอที',

    // Curriculum Section
    curr_subtitle: '<i class="bi bi-stack"></i> SPECIALIZATION TRACKS',
    curr_title: 'โครงสร้างกลุ่มวิชาความเชี่ยวชาญ',
    curr_desc: 'ออกแบบหลักสูตรให้ครอบคลุม 3 ด้านหลักที่ตลาดแรงงานไอทีระดับสากลต้องการสูงสุด',
    track_btn_core: '<i class="bi bi-pc-display-horizontal"></i> วิทยาการคอมพิวเตอร์หลัก (Core CS)',
    track_btn_software: '<i class="bi bi-terminal-split"></i> เทคโนโลยีซอฟต์แวร์ (Software Tech)',
    track_btn_ai: '<i class="bi bi-cpu"></i> ปัญญาประดิษฐ์ & ข้อมูล (AI & Data Science)',
    course_lab: 'มีห้องแล็บ',
    course_lecture: 'วิชาบรรยาย',
    course_credits: '3 หน่วยกิต',
    curr_c1_title: '<i class="bi bi-network-wired" style="color:var(--accent-pink);"></i> โครงข่ายคอมพิวเตอร์ (Networks)',
    curr_c1_desc: 'เรียนรู้การออกแบบ ติดตั้ง และบำรุงรักษาระบบเครือข่าย ทั้งแบบสายและไร้สายเพื่อการสื่อสารในองค์กร',
    curr_c2_title: '<i class="bi bi-shield-lock" style="color:var(--accent-pink);"></i> ความปลอดภัยของข้อมูล (Security)',
    curr_c2_desc: 'การป้องกันและควบคุมความปลอดภัยข้อมูล การเข้ารหัสลับ และการตรวจจับผู้บุกรุกในระบบสารสนเทศ',
    curr_c3_title: '<i class="bi bi-braces-asterisk" style="color:var(--accent-pink);"></i> นิติวิทยาศาสตร์คอมพิวเตอร์ (Forensics)',
    curr_c3_desc: 'การตรวจสอบและวิเคราะห์ข้อมูลที่ถูกโจมตีทางไซเบอร์ การสืบค้นพยานหลักฐานดิจิทัล และกฎหมายไอที',
    curr_c4_title: '<i class="bi bi-database" style="color:var(--accent-pink);"></i> ระบบฐานข้อมูล (Database Systems)',
    curr_c4_desc: 'การออกแบบ ติดตั้ง และบำรุงรักษาระบบฐานข้อมูล รวมถึง SQL ซึ่งเป็นภาษาคิวรีสำหรับฐานข้อมูล',
    curr_c5_title: '<i class="bi bi-layers-half" style="color:var(--accent-pink);"></i> วิศวกรรมซอฟต์แวร์ (Software Eng)',
    curr_c5_desc: 'กระบวนการสร้างซอฟต์แวร์ การวิเคราะห์และออกแบบระบบ การทดสอบและการบำรุงรักษาตามมาตรฐาน',
    curr_c6_title: '<i class="bi bi-file-earmark-code" style="color:var(--accent-pink);"></i> เว็บแอปพลิเคชันสมัยใหม่ (Modern Web)',
    curr_c6_desc: 'การเขียนโปรแกรมฝั่งไคลเอนต์และเซิร์ฟเวอร์ด้วยเฟรมเวิร์กยอดนิยม เช่น React, Next.js และ Node.js',
    curr_c7_title: '<i class="bi bi-image" style="color:var(--accent-pink);"></i> การประมวลผลภาพดิจิทัล (Image Processing)',
    curr_c7_desc: 'การปรับแต่งภาพ การค้นหาวัตถุ และการสกัดคุณลักษณะจากภาพด้วยอัลกอริทึมคอมพิวเตอร์',
    curr_c8_title: '<i class="bi bi-map" style="color:var(--accent-pink);"></i> สารสนเทศภูมิศาสตร์ (GIS)',
    curr_c8_desc: 'การประยุกต์ใช้เทคโนโลยีสารสนเทศในการวิเคราะห์ แสดงผลข้อมูล และแผนที่ภูมิศาสตร์ขั้นสูง',
    curr_c9_title: '<i class="bi bi-robot" style="color:var(--accent-pink);"></i> ปัญญาประดิษฐ์ (Artificial Intelligence)',
    curr_c9_desc: 'การพัฒนาเทคโนโลยีจำลองความฉลาดของมนุษย์ เช่น การประมวลผลภาษาธรรมชาติ (NLP)',
    curr_c10_title: '<i class="bi bi-terminal" style="color:var(--accent-pink);"></i> การเขียนโปรแกรมวิทยาการข้อมูล',
    curr_c10_desc: 'ปฏิบัติการเขียนโค้ดด้วยภาษา Python และ R เพื่อการสกัด ดึงข้อมูล และทำ Data Cleansing',

    // Study Plan Section
    plan_subtitle: '<i class="bi bi-calendar4-week"></i> 4-YEAR STUDY PLAN',
    plan_title: 'แผนการศึกษาและตารางวิชาเรียน 4 ปี',
    plan_desc: 'ตัวอย่างตารางวิชาหลักในการเรียนในแต่ละชั้นปีการศึกษา (หน่วยกิตรวมไม่น้อยกว่า 133 หน่วยกิต)',
    plan_tab_y1y2: '<i class="bi bi-calendar4-week"></i> แผนการเรียน ชั้นปีที่ 1 และ ปีที่ 2',
    plan_tab_y3y4: '<i class="bi bi-calendar4-range"></i> แผนการเรียน ชั้นปีที่ 3 และ ปีที่ 4',
    th_code: 'รหัสวิชา',
    th_name: 'ชื่อรายวิชา',
    th_cat: 'หมวดหมู่',
    y1_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 1 - ภาคเรียนที่ 1',
    y1_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 1 - ภาคเรียนที่ 2',
    y2_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 2 - ภาคเรียนที่ 1',
    y2_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 2 - ภาคเรียนที่ 2',
    y3_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 3 - ภาคเรียนที่ 1',
    y3_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 3 - ภาคเรียนที่ 2',
    y4_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 4 - ภาคเรียนที่ 1',
    y4_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> ชั้นปีที่ 4 - ภาคเรียนที่ 2',

    // Course Names
    c_cs101: 'พื้นฐานวิทยาการคอมพิวเตอร์',
    c_cs102: 'การเขียนโปรแกรมเบื้องต้น (Python)',
    c_ma111: 'คณิตศาสตร์ดิสครีต',
    c_ge101: 'ภาษาอังกฤษเพื่อการสื่อสาร',
    c_cs103: 'การเขียนโปรแกรมเชิงวัตถุ (Java)',
    c_cs104: 'โครงสร้างข้อมูลและอัลกอริทึม',
    c_ma112: 'สถิติและคณิตศาสตร์สัญกรณ์',
    c_ge102: 'ทักษะชีวิตและความเป็นพลเมือง',
    c_cs201: 'สถาปัตยกรรมคอมพิวเตอร์และระบบปฏิบัติการ',
    c_cs202: 'ระบบฐานข้อมูลและการออกแบบ',
    c_cs203: 'วิศวกรรมซอฟต์แวร์เบื้องต้น',
    c_cs204: 'โครงข่ายคอมพิวเตอร์และการสื่อสาร',
    c_cs205: 'การพัฒนาเว็บแอปพลิเคชัน',
    c_cs206: 'การวิเคราะห์และออกแบบระบบเชิงวัตถุ',
    c_cs207: 'ความมั่นคงปลอดภัยสารสนเทศพื้นฐาน',
    c_cs208: 'คณิตศาสตร์และเครื่องมือสถิติสำหรับ AI',
    c_cs301: 'ปัญญาประดิษฐ์เชิงทฤษฎีและการประยุกต์',
    c_cs302: 'วิทยาการข้อมูลและการวิเคราะห์ Big Data',
    c_cs303: 'ภูมิสารสนเทศศาสตร์เบื้องต้น',
    c_cs304: 'การเตรียมพร้อมฝึกประสบการณ์วิชาชีพ',
    c_cs305: 'โครงงานวิทยาการคอมพิวเตอร์ 1',
    c_cs401: 'สหกิจศึกษาทางวิทยาการคอมพิวเตอร์ / ฝึกงาน',
    c_cs402: 'สัมมนาและเทคโนโลยีไอทีเกิดใหม่',
    c_cs403: 'โครงงานวิทยาการคอมพิวเตอร์ 2 (จบการศึกษา)',
    c_elec1: 'วิชาเลือกเฉพาะทางสาขาวิชา (1)',
    c_elec2: 'วิชาเลือกเฉพาะทางสาขาวิชา (2)',
    c_free: 'วิชาเลือกเสรีองค์กรไอที',
    cat_major: 'วิชาเฉพาะสาขา',
    cat_gen: 'วิชาศึกษาทั่วไป',
    cat_skill: 'วิชาฝึกทักษะ',
    cat_proj: 'วิชาทำโครงการ',
    cat_coop: 'ปฏิบัติงานในสถานประกอบการจริง',
    cat_seminar: 'สัมมนาวิชาชีพ',
    cat_elec: 'วิชาเลือกเฉพาะสาขา',
    cat_free_type: 'วิชาเลือกเสรี',

    // Quality & Achievements Section
    achieve_subtitle: '<i class="bi bi-award-fill"></i> QUALITY & ACHIEVEMENTS',
    achieve_title: 'รายงานความสำเร็จและคุณภาพหลักสูตร',
    achieve_desc: 'เอกสารสรุปผลการประเมินคุณภาพการศึกษาระดับหลักสูตรตามมาตรฐานและการสร้างคุณค่าระดับสากล',
    achieve_c1_badge: '🏆 การรับรองมาตรฐาน AUN-QA',
    achieve_c1_title: 'ผลการประเมินคุณภาพสาขาวิชาฯ ปีการศึกษา 2568',
    achieve_c1_desc: 'ระดับคะแนนความพึงพอใจดีเยี่ยม ได้รับการประเมินคุณภาพครบทุกเกณฑ์',
    achieve_c1_date: '<i class="bi bi-calendar3" style="color:#93c5fd;"></i> ประเมินเมื่อ: 16 – 17 สิงหาคม 2568',
    achieve_c1_loc: '<i class="bi bi-geo-alt-fill" style="color:#fb7185;"></i> คณะศิลปศาสตร์และวิทยาศาสตร์ มรภ.ศรีสะเกษ',
    achieve_c1_btn: 'อ่านสรุปเล่มประเมินฉบับเต็ม <i class="bi bi-arrow-right"></i>',
    achieve_c2_badge: '🕶️ กิจกรรมเด่นเพื่อพัฒนาเยาวชน',
    achieve_c2_title: 'การแข่งขันหุ่นยนต์ศรีสะเกษโรโบติกส์',
    achieve_c2_desc: 'จัดแข่งขันหุ่นยนต์เยาวชนชิงถ้วยเกียรติยศสูงสุด รวมทั้งสิ้น 33 รายการ สำหรับระดับการศึกษาขั้นพื้นฐาน อาชีวศึกษา และอุดมศึกษาทั่วประเทศ',
    achieve_c2_date: '<i class="bi bi-calendar3" style="color:#fef08a;"></i> วันที่จัดงาน: 27 – 28 มิถุนายน 2569',
    achieve_c2_loc: '<i class="bi bi-geo-alt-fill" style="color:#fb7185;"></i> มหาวิทยาลัยราชภัฏศรีสะเกษ',
    achieve_c2_btn1: '<i class="bi bi-images" style="color:#0284c7;"></i> ภาพกิจกรรม',
    achieve_c2_btn2: '<i class="bi bi-globe"></i> เว็บไซต์กิจกรรม',

    // News Section
    news_subtitle: '<i class="bi bi-newspaper"></i> NEWS & KNOWLEDGE',
    news_title: 'สาระความรู้ ข่าวสาร และกิจกรรม',
    news_desc: 'ติดตามความเคลื่อนไหว ผลงานนวัตกรรม การจัดอบรม และกิจกรรมสร้างสรรค์ของสาขาวิชาฯ',
    news_tab_all: '<i class="bi bi-grid-fill"></i> ทั้งหมด',
    news_tab_acad: '<i class="bi bi-cpu-fill"></i> งานวิจัยและนวัตกรรม',
    news_tab_act: '<i class="bi bi-trophy-fill"></i> กิจกรรมและผลงานนักศึกษา',
    news_feat_badge: '<i class="bi bi-star-fill"></i> ข่าวเด่นประจำเดือน',
    news_feat_date: '<i class="bi bi-calendar3"></i> 15 สิงหาคม 2568',
    news_feat_tag: '<i class="bi bi-tag-fill" style="color:var(--accent-pink);"></i> ข่าวรับสมัคร',
    news_feat_title: 'เปิดรับสมัครนักศึกษาใหม่ TCAS69 หลักสูตรวิทยาการคอมพิวเตอร์ (วท.บ.) ปรับปรุงทันสมัยตอบโจทย์ตลาดแรงงาน AI',
    news_feat_desc: 'สาขาวิชาวิทยาการคอมพิวเตอร์ มรภ.ศรีสะเกษ เปิดรับสมัครนักศึกษาใหม่ระดับปริญญาตรี พร้อมทุนการศึกษาและห้องปฏิบัติการคอมพิวเตอร์ระดับมาตรฐานสำหรับนักพัฒนาซอฟต์แวร์ยุคใหม่',
    news_feat_btn: 'อ่านรายละเอียดการสมัคร <i class="bi bi-arrow-right"></i>',
    news_side1_tag: 'ผลงานวิจัย',
    news_side1_title: 'เปิดตัว LINE Chatbot "น้องลำดวน" ระบบแนะนำสถานที่ท่องเที่ยว จ.ศรีสะเกษ ด้วยปัญญาประดิษฐ์',
    news_side1_desc: 'ผลงานตีพิมพ์วารสารวิชาการ โดยคณาจารย์สาขาวิชาวิทยาการคอมพิวเตอร์',
    news_side2_tag: 'การแข่งขัน',
    news_side2_title: 'ทีมนักศึกษาวิทยาการคอมพิวเตอร์ คว้ารางวัลชนะเลิศ Hackathon นวัตกรรมซอฟต์แวร์เพื่อชุมชน',
    news_side2_desc: 'ส่งเสริมการสร้างผลงานจริงเพื่อแก้ไขปัญหาเชิงพื้นที่ด้วยเทคโนโลยีเว็บและโมบาย',
    news_side3_tag: 'หลักสูตร',
    news_side3_title: 'เผยแพร่เล่ม มคอ.2 หลักสูตร วท.บ. วิทยาการคอมพิวเตอร์ (ปรับปรุง 2568) อย่างเป็นทางการ',
    news_side3_desc: 'ดาวน์โหลดรายละเอียดโครงสร้างรายวิชา แผนการศึกษา 4 ปี และผลลัพธ์ PLOs',

    // Faculty Section
    fac_subtitle: '<i class="bi bi-people"></i> MEET OUR FACULTY',
    fac_title: 'คณาจารย์ประจำหลักสูตร',
    fac_desc: 'คณาจารย์ผู้ทรงคุณวุฒิและเชี่ยวชาญเฉพาะทาง ร่วมขับเคลื่อนการจัดการเรียนการสอนและการวิจัย',
    fac_btn_view: '<i class="bi bi-person-lines-fill" style="color:var(--accent-brand);"></i> ดูประวัติและผลงาน',
    modal_edu_title: '<i class="bi bi-mortarboard-fill" style="color:var(--accent-pink);"></i> ประวัติการศึกษา',
    modal_course_title: '<i class="bi bi-journal-check" style="color:var(--accent-pink);"></i> รายวิชาที่สอนหลัก',
    modal_pub_title: '<i class="bi bi-file-earmark-text-fill" style="color:var(--accent-pink);"></i> ผลงานวิชาการและงานวิจัย',

    // Downloads Section
    dl_subtitle: '<i class="bi bi-download"></i> DOWNLOADS & DOCUMENTS',
    dl_title: 'ดาวน์โหลดเอกสารสาขาวิชาฯ',
    dl_desc: 'รวบรวมเอกสารหลักสูตร คู่มือแนะนำการขึ้นทะเบียน และข้อมูลสำคัญสำหรับนักศึกษา',
    dl_c1_title: '<i class="bi bi-file-earmark-pdf-fill" style="color:#ef4444;"></i> เล่มหลักสูตรวิทยาศาสตรบัณฑิต วท.บ. (มคอ.2)',
    dl_c1_desc: 'รายละเอียดวิชาเรียน โครงสร้างจำนวนหน่วยกิตทั้งหมด และแผนการเรียนตลอด 4 ปี (หลักสูตรปรับปรุง พ.ศ. 2568)',
    dl_c1_btn: '<i class="bi bi-download"></i> ดาวน์โหลด PDF',
    dl_c2_title: '<i class="bi bi-person-check-fill" style="color:var(--accent-success);"></i> คู่มือการขึ้นทะเบียนและขั้นตอนรายงานตัวนักศึกษาใหม่',
    dl_c2_desc: 'คู่มือระบุการเตรียมเอกสารสำหรับการรับนักศึกษาใหม่ ทุกรอบ TCAS ของมหาวิทยาลัยราชภัฏศรีสะเกษ',
    dl_c2_btn: '<i class="bi bi-box-arrow-up-right"></i> ดูคู่มือออนไลน์',

    // Contact Section
    contact_subtitle: '<i class="bi bi-chat-left-text"></i> CONNECT WITH US',
    contact_title: 'ช่องทางการติดต่อเรา',
    contact_desc: 'มีข้อสงสัยเกี่ยวกับหลักสูตร โควตาการรับสมัคร หรือสอบถามรายละเอียดเพิ่มเติม ได้ตลอดเวลา',
    contact_phone_title: 'เบอร์โทรติดต่อสาขาวิชาฯ',
    contact_phone_sub: 'สายด่วน: 084-298-2456',
    contact_email_title: 'อีเมลติดต่อสาขาวิชาฯ',
    contact_email_sub: 'หัวหน้าสาขาวิชาฯ (ผศ.ดร.กนิษฐา อินธิชิต)',
    contact_loc_title: 'ที่ตั้งอาคารเรียน',
    contact_loc_desc: 'สาขาวิชาฯ ตั้งอยู่ที่ชั้น 5 อาคารสำนักงานคณบดี คณะศิลปศาสตร์และวิทยาศาสตร์ (LASC)<br>มรภ.ศรีสะเกษ ถ.ไทยพันทา อ.เมือง จ.ศรีสะเกษ',
    social_line_title: 'LINE Chatbot "น้องลำดวน"',
    social_line_desc: 'สอบถามรายละเอียดการรับสมัคร ทุนการศึกษา และหลักสูตรได้คำตอบรวดเร็วทันใจตลอด 24 ชั่วโมง',
    social_line_btn: '<i class="bi bi-line"></i> เพิ่มเพื่อนใน LINE',
    social_fb_title: 'Facebook Fanpage',
    social_fb_desc: 'ติดตามข่าวสารกิจกรรม ผลงานนักศึกษา ทุนการศึกษา และภาพบรรยากาศการเรียนการสอนอย่างเป็นกันเอง',
    social_fb_btn: '<i class="bi bi-facebook"></i> ติดตามแฟนเพจ',
    social_tiktok_title: 'TikTok แนะนำหลักสูตร',
    social_tiktok_desc: 'ชมคลิปสั้น แนะนำกิจกรรม ผลงานโครงงานของรุ่นพี่ และบรรยากาศในสาขาวิชาฯ สนุกและเข้าใจง่าย',
    social_tiktok_btn: '<i class="bi bi-tiktok"></i> ชมคลิปบน TikTok',

    // Footer
    footer_desc: '"เชี่ยวชาญด้านวิทยาการคอมพิวเตอร์ มีคุณธรรม นำนวัตกรรมเพื่อพัฒนาท้องถิ่น"<br>คณะศิลปศาสตร์และวิทยาศาสตร์ มหาวิทยาลัยราชภัฏศรีสะเกษ',
    footer_address: '<i class="bi bi-geo-alt-fill" style="color:var(--accent-pink);"></i> 319 ถ.ไทยพันทา ต.โพธิ์ อ.เมือง จ.ศรีสะเกษ 33000',
    footer_col1_title: 'การศึกษาและหลักสูตร',
    footer_link_tracks: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> กลุ่มวิชาความเชี่ยวชาญ',
    footer_link_schedule: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> แผนการเรียน 4 ปี',
    footer_link_tqf: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> เล่มหลักสูตร มคอ.2 (2568)',
    footer_link_tcas: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> สมัครเข้าศึกษาต่อ TCAS',
    footer_col2_title: 'ข้อมูลหน่วยงาน',
    footer_link_about: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> ปรัชญาและวิสัยทัศน์',
    footer_link_fac: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> ทำเนียบคณาจารย์',
    footer_link_news: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> ผลงานวิจัยและนวัตกรรม',
    footer_link_sskru: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> มหาวิทยาลัยราชภัฏศรีสะเกษ',
    footer_col3_title: 'ติดต่อสาขาวิชาฯ',
    footer_contact_bldg: '<i class="bi bi-building" style="color:var(--accent-pink);"></i> ชั้น 5 อาคาร 4 (LASC)',
    footer_copy: '&copy; 2026 สาขาวิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏศรีสะเกษ (CS SSKRU). All rights reserved.'
  },

  en: {
    // Top Bar & Navbar
    top_sskru_web: '<i class="bi bi-bank2"></i> SSKRU Website',
    brand_title: 'Computer Science',
    brand_sub: 'Faculty of Liberal Arts & Science, SSKRU',
    nav_home: 'Home',
    nav_about: 'About',
    nav_curriculum: 'Curriculum',
    nav_schedule: 'Study Plan',
    nav_news: 'News',
    nav_faculty: 'Faculty',
    nav_downloads: 'Downloads',
    nav_contact: 'Contact',
    nav_cta: '<i class="bi bi-mortarboard-fill"></i> TCAS Apply',

    // Hero Section
    hero_badge: '<i class="bi bi-stars"></i> Bachelor of Science (B.Sc.) Program Revised 2025',
    hero_title: 'Empowering Future Leaders in<br><span class="text-highlight">Computer Science</span> & AI',
    hero_desc: '"Master Advanced Technologies, Innovating for the Next Generation" Modern practical curriculum preparing you for Full-Stack Developer, AI & Data Scientist, and Global Software Engineer roles.',
    hero_btn_apply: '<i class="bi bi-mortarboard-fill"></i> Apply Now (TCAS)',
    hero_btn_curriculum: '<i class="bi bi-journal-code"></i> Curriculum Overview',
    stat_years_num: '4 Years',
    stat_years_label: 'Duration of Study',
    stat_credits_num: '133',
    stat_credits_label: 'Minimum Credits',
    stat_job_num: '100%',
    stat_job_label: 'Employment Rate',
    stat_alumni_num: '1,000+',
    stat_alumni_label: 'Alumni Network',

    // Quick Access Bar
    qa_tcas_title: 'Apply TCAS',
    qa_tcas_desc: 'Admission requirements & quotas',
    qa_curr_title: 'B.Sc. Curriculum',
    qa_curr_desc: '3 Specialized Career Tracks',
    qa_plan_title: '4-Year Plan',
    qa_plan_desc: 'Semester-by-semester courses',
    qa_fac_title: 'Faculty & Research',
    qa_fac_desc: 'Profiles & national publications',
    qa_doc_title: 'Downloads',
    qa_doc_desc: 'TQF.2 handbook & student forms',

    // About Section
    about_subtitle: '<i class="bi bi-info-circle"></i> ABOUT OUR PROGRAM',
    about_title: 'Strategic Curriculum Framework',
    about_desc: 'Program objectives, learning outcomes, and future-oriented graduate competencies.',
    tab_btn_philosophy: '<i class="bi bi-lightbulb"></i> Philosophy',
    tab_btn_vision: '<i class="bi bi-eye"></i> Vision & Mission',
    tab_btn_objectives: '<i class="bi bi-bullseye"></i> Objectives',
    tab_btn_plo: '<i class="bi bi-trophy"></i> Learning Outcomes (PLOs)',
    phil_quote: '"Excellence in Computer Science, Guided by Ethics, Innovating for Local Development"',
    phil_desc: 'This philosophy reflects three key pillars: computing expertise, strong professional ethics, and impactful innovations for regional development, aligning directly with Rajabhat University\'s mission for social progress.',
    phil_c1_title: '<i class="bi bi-laptop" style="color:var(--accent-pink);"></i> Professional Mastery',
    phil_c1_desc: 'Intensive practical training in software development, data structures, algorithms, and modern databases.',
    phil_c2_title: '<i class="bi bi-shield-check" style="color:var(--accent-pink);"></i> Ethics & Integrity',
    phil_c2_desc: 'Commitment to professional IT ethics, intellectual property rights, and cyber laws.',
    phil_c3_title: '<i class="bi bi-rocket-takeoff" style="color:var(--accent-pink);"></i> Local Innovation',
    phil_c3_desc: 'Developing real-world applications and projects that solve local challenges and uplift the community economy.',
    vision_title: 'Institutional Vision',
    vision_desc: 'Committed to driving the university forward as a <strong>"Lifelong Learning Higher Education Institution"</strong>',
    mission_1_title: '1. Quality Graduates',
    mission_1_desc: 'Producing graduates with high-level computing skills ready for top global tech industries.',
    mission_2_title: '2. Research & Innovation',
    mission_2_desc: 'Promoting cutting-edge applied research and innovative software solutions tailored to societal needs.',
    mission_3_title: '3. Academic Services',
    mission_3_desc: 'Fostering students\' capabilities as "Social Engineers" dedicated to community empowerment.',
    mission_4_title: '4. Morals & Cyber Law',
    mission_4_desc: 'Instilling unwavering honesty, ethical practices, and strict adherence to computer laws.',
    obj_1_title: 'Objective 1',
    obj_1_desc: '<strong>Specialized Expertise:</strong> Deep theoretical and practical knowledge in computer science to design, build, and maintain software systems.',
    obj_2_title: 'Objective 2',
    obj_2_desc: '<strong>Applied Innovation:</strong> Ability to apply methodologies and modern tech in research projects that create socio-economic value.',
    obj_3_title: 'Objective 3',
    obj_3_desc: '<strong>Systemic Thinking:</strong> Holistic analytical mindset to plan and execute computational solutions for complex problems.',
    obj_4_title: 'Objective 4',
    obj_4_desc: '<strong>Ethics & Teamwork:</strong> Exemplary discipline, adherence to professional code of conduct, and excellent teamwork.',
    plo_1: 'Apply computer science knowledge to solve complex problems and optimize computational workflows.',
    plo_2: 'Develop robust software systems in multiple programming languages conforming to global standards.',
    plo_3: 'Engineer high-performance mobile applications meeting modern user experience requirements.',
    plo_4: 'Conduct comprehensive software quality assurance and testing methodologies.',
    plo_5: 'Innovate computing technologies aligned with local community and organizational needs.',
    plo_6: 'Demonstrate systemic problem-solving, professionalism, resilience, and high responsibility.',
    plo_7: 'Uphold professional ethics, moral values, and compliance with Cybercrime Laws.',

    // Why CS Section
    why_subtitle: '<i class="bi bi-star"></i> WHY CHOOSE CS SSKRU',
    why_title: 'Why Study Computer Science at SSKRU?',
    why_desc: 'Equipping you with future-proof tech skills, combining advanced theories with hands-on practice in modern labs.',
    why_c1_title: 'High-Growth Tech Careers',
    why_c1_desc: 'Expansive opportunities in top roles: Full-Stack Developer, AI Engineer, Data Scientist, and Cloud Architect.',
    why_c2_title: 'High Demand & Strong Salary',
    why_c2_desc: 'Digital and IT professions enjoy higher starting salaries and fastest industry growth nationwide.',
    why_c3_title: 'Global Flexibility & Remote Work',
    why_c3_desc: 'Work remotely from anywhere worldwide, freelance with international clients, or launch your own tech startup.',

    // Curriculum Section
    curr_subtitle: '<i class="bi bi-stack"></i> SPECIALIZATION TRACKS',
    curr_title: 'Specialized Track Structure',
    curr_desc: 'Curriculum designed across 3 high-demand pillars for the modern global tech landscape.',
    track_btn_core: '<i class="bi bi-pc-display-horizontal"></i> Core Computer Science',
    track_btn_software: '<i class="bi bi-terminal-split"></i> Software Technology',
    track_btn_ai: '<i class="bi bi-cpu"></i> AI & Data Science',
    course_lab: 'Lab Included',
    course_lecture: 'Lecture',
    course_credits: '3 Credits',
    curr_c1_title: '<i class="bi bi-network-wired" style="color:var(--accent-pink);"></i> Computer Networks',
    curr_c1_desc: 'Design, deployment, and maintenance of enterprise wired and wireless network infrastructures.',
    curr_c2_title: '<i class="bi bi-shield-lock" style="color:var(--accent-pink);"></i> Information Security',
    curr_c2_desc: 'Data protection, cryptographic methods, and intrusion detection systems in modern enterprises.',
    curr_c3_title: '<i class="bi bi-braces-asterisk" style="color:var(--accent-pink);"></i> Computer Forensics',
    curr_c3_desc: 'Cyber attack analysis, digital evidence extraction, and information technology jurisprudence.',
    curr_c4_title: '<i class="bi bi-database" style="color:var(--accent-pink);"></i> Database Systems',
    curr_c4_desc: 'Relational & NoSQL database design, administration, optimization, and SQL querying.',
    curr_c5_title: '<i class="bi bi-layers-half" style="color:var(--accent-pink);"></i> Software Engineering',
    curr_c5_desc: 'SDLC lifecycle, system analysis and design, agile development, testing, and maintenance.',
    curr_c6_title: '<i class="bi bi-file-earmark-code" style="color:var(--accent-pink);"></i> Modern Web Applications',
    curr_c6_desc: 'Full-stack client and server development using top frameworks: React, Next.js, and Node.js.',
    curr_c7_title: '<i class="bi bi-image" style="color:var(--accent-pink);"></i> Digital Image Processing',
    curr_c7_desc: 'Image enhancement, computer vision algorithms, object detection, and feature extraction.',
    curr_c8_title: '<i class="bi bi-map" style="color:var(--accent-pink);"></i> Geographic Info Systems (GIS)',
    curr_c8_desc: 'Spatial data modeling, geo-analytics, and advanced geospatial mapping applications.',
    curr_c9_title: '<i class="bi bi-robot" style="color:var(--accent-pink);"></i> Artificial Intelligence',
    curr_c9_desc: 'Developing intelligence simulation systems, machine learning, and natural language processing.',
    curr_c10_title: '<i class="bi bi-terminal" style="color:var(--accent-pink);"></i> Data Science Programming',
    curr_c10_desc: 'Hands-on Python and R programming for data extraction, manipulation, and pipeline engineering.',

    // Study Plan Section
    plan_subtitle: '<i class="bi bi-calendar4-week"></i> 4-YEAR STUDY PLAN',
    plan_title: '4-Year Study Plan & Curriculum Schedule',
    plan_desc: 'Recommended course progression across 8 semesters (Minimum total of 133 credits).',
    plan_tab_y1y2: '<i class="bi bi-calendar4-week"></i> Year 1 & Year 2 Plan',
    plan_tab_y3y4: '<i class="bi bi-calendar4-range"></i> Year 3 & Year 4 Plan',
    th_code: 'Code',
    th_name: 'Course Title',
    th_cat: 'Category',
    y1_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 1 - Semester 1',
    y1_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 1 - Semester 2',
    y2_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 2 - Semester 1',
    y2_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 2 - Semester 2',
    y3_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 3 - Semester 1',
    y3_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 3 - Semester 2',
    y4_s1: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 4 - Semester 1',
    y4_s2: '<i class="bi bi-clock-fill" style="color:var(--accent-pink);"></i> Year 4 - Semester 2',

    // Course Names
    c_cs101: 'Introduction to Computer Science',
    c_cs102: 'Fundamental Programming (Python)',
    c_ma111: 'Discrete Mathematics',
    c_ge101: 'English for Communication',
    c_cs103: 'Object-Oriented Programming (Java)',
    c_cs104: 'Data Structures and Algorithms',
    c_ma112: 'Statistics & Mathematical Notation',
    c_ge102: 'Life Skills & Active Citizenship',
    c_cs201: 'Computer Architecture & Operating Systems',
    c_cs202: 'Database Systems & Design',
    c_cs203: 'Introduction to Software Engineering',
    c_cs204: 'Computer Networks & Communications',
    c_cs205: 'Web Application Development',
    c_cs206: 'Object-Oriented Analysis & Design',
    c_cs207: 'Fundamentals of Information Security',
    c_cs208: 'Mathematics & Statistical Tools for AI',
    c_cs301: 'Theoretical & Applied Artificial Intelligence',
    c_cs302: 'Data Science & Big Data Analytics',
    c_cs303: 'Introduction to Geographic Info Science',
    c_cs304: 'Professional Internship Preparation',
    c_cs305: 'Computer Science Senior Project I',
    c_cs401: 'Cooperative Education / Internship',
    c_cs402: 'Seminar in Emerging IT Technologies',
    c_cs403: 'Computer Science Capstone Project II',
    c_elec1: 'Specialized Major Elective (I)',
    c_elec2: 'Specialized Major Elective (II)',
    c_free: 'Free Elective Course',
    cat_major: 'Major Required',
    cat_gen: 'General Education',
    cat_skill: 'Practical Skills',
    cat_proj: 'Senior Project',
    cat_coop: 'Professional Practicum',
    cat_seminar: 'Professional Seminar',
    cat_elec: 'Major Elective',
    cat_free_type: 'Free Elective',

    // Quality & Achievements Section
    achieve_subtitle: '<i class="bi bi-award-fill"></i> QUALITY & ACHIEVEMENTS',
    achieve_title: 'Quality & Achievements Report',
    achieve_desc: 'Curriculum quality assurance reports and recognized national milestones.',
    achieve_c1_badge: '🏆 AUN-QA Accreditation',
    achieve_c1_title: 'Program Quality Assessment Results (AY 2025)',
    achieve_c1_desc: 'Achieved Excellent satisfaction ratings, fully satisfying all rigorous academic criteria.',
    achieve_c1_date: '<i class="bi bi-calendar3" style="color:#93c5fd;"></i> Assessment Date: August 16–17, 2025',
    achieve_c1_loc: '<i class="bi bi-geo-alt-fill" style="color:#fb7185;"></i> Faculty of Liberal Arts & Science, SSKRU',
    achieve_c1_btn: 'Read Full Assessment Report <i class="bi bi-arrow-right"></i>',
    achieve_c2_badge: '🕶️ Youth & Regional Highlight',
    achieve_c2_title: 'Sisaket Robotics Competition',
    achieve_c2_desc: 'National youth robotics championship featuring 33 competitive categories across primary, vocational, and university divisions.',
    achieve_c2_date: '<i class="bi bi-calendar3" style="color:#fef08a;"></i> Event Date: June 27–28, 2026',
    achieve_c2_loc: '<i class="bi bi-geo-alt-fill" style="color:#fb7185;"></i> Sisaket Rajabhat University',
    achieve_c2_btn1: '<i class="bi bi-images" style="color:#0284c7;"></i> Photo Gallery',
    achieve_c2_btn2: '<i class="bi bi-globe"></i> Event Website',

    // News Section
    news_subtitle: '<i class="bi bi-newspaper"></i> NEWS & KNOWLEDGE',
    news_title: 'News, Knowledge & Activities',
    news_desc: 'Stay informed with our department updates, student achievements, and tech articles.',
    news_tab_all: '<i class="bi bi-grid-fill"></i> All News',
    news_tab_acad: '<i class="bi bi-cpu-fill"></i> Research & Innovation',
    news_tab_act: '<i class="bi bi-trophy-fill"></i> Student Activities',
    news_feat_badge: '<i class="bi bi-star-fill"></i> Featured Story',
    news_feat_date: '<i class="bi bi-calendar3"></i> August 15, 2025',
    news_feat_tag: '<i class="bi bi-tag-fill" style="color:var(--accent-pink);"></i> Admission',
    news_feat_title: 'Now Open: TCAS69 Admission for Computer Science (B.Sc.) with AI & Modern Software Focus',
    news_feat_desc: 'Department of Computer Science SSKRU invites prospective students to apply for undergraduate studies with full scholarships and modern lab facilities.',
    news_feat_btn: 'Admission Details <i class="bi bi-arrow-right"></i>',
    news_side1_tag: 'Research',
    news_side1_title: 'Launch of "Nong Lamduan" LINE AI Chatbot for Sisaket Tourism Recommendations',
    news_side1_desc: 'Published research article developed by Computer Science faculty members.',
    news_side2_tag: 'Competition',
    news_side2_title: 'CS Student Team Wins 1st Prize at Community Software Innovation Hackathon',
    news_side2_desc: 'Empowering students to solve real local problems using web and mobile technologies.',
    news_side3_tag: 'Curriculum',
    news_side3_title: 'Official Release of B.Sc. in Computer Science TQF.2 Handbook (Revised 2025)',
    news_side3_desc: 'Download complete course descriptions, 4-year plan, and PLO learning outcomes.',

    // Faculty Section
    fac_subtitle: '<i class="bi bi-people"></i> MEET OUR FACULTY',
    fac_title: 'Department Faculty & Staff',
    fac_desc: 'Distinguished educators and researchers dedicated to excellence in computing education.',
    fac_btn_view: '<i class="bi bi-person-lines-fill" style="color:var(--accent-brand);"></i> View Profile & Research',
    modal_edu_title: '<i class="bi bi-mortarboard-fill" style="color:var(--accent-pink);"></i> Educational Background',
    modal_course_title: '<i class="bi bi-journal-check" style="color:var(--accent-pink);"></i> Primary Courses Taught',
    modal_pub_title: '<i class="bi bi-file-earmark-text-fill" style="color:var(--accent-pink);"></i> Publications & Research',

    // Downloads Section
    dl_subtitle: '<i class="bi bi-download"></i> DOWNLOADS & DOCUMENTS',
    dl_title: 'Downloads & Documents',
    dl_desc: 'Official program handbooks, student registration guides, and departmental resources.',
    dl_c1_title: '<i class="bi bi-file-earmark-pdf-fill" style="color:#ef4444;"></i> B.Sc. Curriculum Handbook (TQF.2)',
    dl_c1_desc: 'Detailed course structures, 133 total credits requirement, and 4-year progression plan (Revised 2025).',
    dl_c1_btn: '<i class="bi bi-download"></i> Download PDF',
    dl_c2_title: '<i class="bi bi-person-check-fill" style="color:var(--accent-success);"></i> Freshmen Registration & Enrollment Guide',
    dl_c2_desc: 'Comprehensive document submission guide for all admitted TCAS rounds at Sisaket Rajabhat University.',
    dl_c2_btn: '<i class="bi bi-box-arrow-up-right"></i> View Online Guide',

    // Contact Section
    contact_subtitle: '<i class="bi bi-chat-left-text"></i> CONNECT WITH US',
    contact_title: 'Contact Department',
    contact_desc: 'Have questions about programs, admission quotas, or course prerequisites? Get in touch with us anytime.',
    contact_phone_title: 'Department Phone',
    contact_phone_sub: 'Hotline: (+66) 84-298-2456',
    contact_email_title: 'Official Email',
    contact_email_sub: 'Head of Dept. (Asst. Prof. Dr. Kanittha Inthichit)',
    contact_loc_title: 'Campus Location',
    contact_loc_desc: '5th Floor, Dean Office Building, Faculty of Liberal Arts & Science (LASC)<br>Sisaket Rajabhat University, Thaipantha Rd., Mueang, Sisaket 33000 Thailand',
    social_line_title: 'LINE AI "Nong Lamduan"',
    social_line_desc: 'Get 24/7 instant answers about admissions, scholarships, and academic curriculum.',
    social_line_btn: '<i class="bi bi-line"></i> Add LINE Friend',
    social_fb_title: 'Facebook Fanpage',
    social_fb_desc: 'Stay updated with student achievements, workshops, scholarships, and lively class moments.',
    social_fb_btn: '<i class="bi bi-facebook"></i> Visit Facebook',
    social_tiktok_title: 'TikTok Department Channel',
    social_tiktok_desc: 'Watch fun short videos, senior capstone project spotlights, and campus life.',
    social_tiktok_btn: '<i class="bi bi-tiktok"></i> Watch on TikTok',

    // Footer
    footer_desc: '"Excellence in Computer Science, Guided by Ethics, Innovating for Local Development"<br>Faculty of Liberal Arts & Science, Sisaket Rajabhat University',
    footer_address: '<i class="bi bi-geo-alt-fill" style="color:var(--accent-pink);"></i> 319 Thaipantha Rd., Pho, Mueang, Sisaket 33000 Thailand',
    footer_col1_title: 'Academic Programs',
    footer_link_tracks: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> Specialization Tracks',
    footer_link_schedule: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> 4-Year Study Plan',
    footer_link_tqf: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> TQF.2 Handbook (2025)',
    footer_link_tcas: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> TCAS Admission',
    footer_col2_title: 'About University',
    footer_link_about: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> Philosophy & Vision',
    footer_link_fac: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> Faculty Directory',
    footer_link_news: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> Research & Innovation',
    footer_link_sskru: '<i class="bi bi-chevron-right" style="font-size:0.75rem;"></i> Sisaket Rajabhat Univ.',
    footer_col3_title: 'Direct Contact',
    footer_contact_bldg: '<i class="bi bi-building" style="color:var(--accent-pink);"></i> Floor 5, Building 4 (LASC)',
    footer_copy: '&copy; 2026 Department of Computer Science, Sisaket Rajabhat University (CS SSKRU). All rights reserved.'
  }
};

// ============================================================================
// 2. FACULTY DATA (Bilingual Structured Data)
// ============================================================================
const lecturersData = [
  {
    id: 1,
    role_th: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    role_en: "Curriculum Committee Member",
    prefix_th: "ผู้ช่วยศาสตราจารย์ ดร.",
    prefix_en: "Asst. Prof. Dr.",
    name_th: "เจษฎา โพนแก้ว",
    name_en: "Jessada Phonkaew",
    expertise_th: "วิทยาการคอมพิวเตอร์ / Game & Image Processing",
    expertise_en: "Computer Science / Game & Image Processing",
    image: "images/jessada_p.jpg",
    education: [
      { degree_th: "ปร.ด.", degree_en: "Ph.D.", field_th: "วิทยาการคอมพิวเตอร์", field_en: "Computer Science", institution_th: "มหาวิทยาลัยขอนแก่น", institution_en: "Khon Kaen University", year: "2557 (2014)" },
      { degree_th: "วท.ม.", degree_en: "M.Sc.", field_th: "วิทยาการคอมพิวเตอร์", field_en: "Computer Science", institution_th: "มหาวิทยาลัยขอนแก่น", institution_en: "Khon Kaen University", year: "2548 (2005)" },
      { degree_th: "วศ.บ.", degree_en: "B.Eng.", field_th: "วิศวกรรมไฟฟ้าอิเล็กทรอนิกส์และคอมพิวเตอร์", field_en: "Electrical & Computer Engineering", institution_th: "มหาวิทยาลัยอุบลราชธานี", institution_en: "Ubon Ratchathani University", year: "2543 (2000)" }
    ],
    publications: [
      {
        authors: ["เจษฎา โพนแก้ว", "Jessada Phonkaew"],
        year: "2566 (2023)",
        title_th: "การพัฒนาแอปพลิเคชันการเขียนโปรแกรมด้วยบล็อกภาพผ่านมือถือเพื่อการควบคุมหุ่นยนต์เดินตามเส้นขนาดเล็ก",
        title_en: "Development of Mobile Visual Block Programming Application for Small Line Tracking Robot Control",
        journal_th: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        journal_en: "Journal of Technology Management, Rajabhat Maha Sarakham University",
        volume: 10, issue: 1, pages: "32-39"
      }
    ],
    courses_taught: [
      { code: "4122706", name_th: "สถาปัตยกรรมคอมพิวเตอร์", name_en: "Computer Architecture", credits: "3(2-2-5)" },
      { code: "4123652", name_th: "การออกแบบและพัฒนาเกมคอมพิวเตอร์", name_en: "Game Design & Development", credits: "3(2-2-5)" },
      { code: "4124511", name_th: "การประมวลผลภาพ", name_en: "Digital Image Processing", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 2,
    role_th: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    role_en: "Curriculum Committee Member",
    prefix_th: "ดร.",
    prefix_en: "Dr.",
    name_th: "เจษฎา ชาตรี",
    name_en: "Jessada Chatree",
    expertise_th: "Computer Science & Engineering / Data Mining",
    expertise_en: "Computer Science & Engineering / Data Mining",
    image: "images/jessada_c.jpg",
    education: [
      { degree_th: "Ph.D.", degree_en: "Ph.D.", field_th: "Computer Science and Engineering", field_en: "Computer Science and Engineering", institution_th: "University of North Texas", institution_en: "University of North Texas", country: "USA", year: "2014" },
      { degree_th: "วท.ม.", degree_en: "M.Sc.", field_th: "การศึกษาวิทยาศาสตร์ (คอมพิวเตอร์)", field_en: "Science Education (Computer)", institution_th: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", institution_en: "KMITL", year: "2547 (2004)" },
      { degree_th: "ค.บ.", degree_en: "B.Ed.", field_th: "คอมพิวเตอร์ศึกษา", field_en: "Computer Education", institution_th: "มหาวิทยาลัยราชภัฏสุรินทร์", institution_en: "Surindra Rajabhat University", year: "2538 (1995)" }
    ],
    publications: [
      {
        authors: ["พิศาล สุขขี", "เจษฎา ชาตรี"],
        year: "2567 (2024)",
        title_th: "การพัฒนาแอปพลิเคชัน \"น้องลำดวน\" ไลน์แชทบอท เพื่อแนะนำสถานที่ท่องเที่ยวในจังหวัดศรีสะเกษ",
        title_en: "Development of 'Nong Lamduan' LINE Chatbot Application for Sisaket Tourism Recommendations",
        journal_th: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        journal_en: "Journal of Technology Management, Rajabhat Maha Sarakham University",
        volume: 10, issue: 1, pages: "32-39"
      }
    ],
    courses_taught: [
      { code: "4113501", name_th: "การวิจัยดำเนินงาน", name_en: "Operations Research", credits: "3(3-0-6)" },
      { code: "4124507", name_th: "การทำเหมืองข้อมูล", name_en: "Data Mining", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 3,
    role_th: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    role_en: "Curriculum Committee Member",
    prefix_th: "ดร.",
    prefix_en: "Dr.",
    name_th: "กริชบดินทร์ ผิวหอม",
    name_en: "Krichbodin Phewhom",
    expertise_th: "วิศวกรรมคอมพิวเตอร์ / ปัญญาประดิษฐ์ (AI)",
    expertise_en: "Computer Engineering / Artificial Intelligence (AI)",
    image: "images/krichbodin.jpg",
    education: [
      { degree_th: "ปร.ด.", degree_en: "Ph.D.", field_th: "วิศวกรรมคอมพิวเตอร์", field_en: "Computer Engineering", institution_th: "มหาวิทยาลัยขอนแก่น", institution_en: "Khon Kaen University", year: "2564 (2021)" },
      { degree_th: "วท.ม.", degree_en: "M.Sc.", field_th: "วิทยาการคอมพิวเตอร์", field_en: "Computer Science", institution_th: "มหาวิทยาลัยขอนแก่น", institution_en: "Khon Kaen University", year: "2555 (2012)" },
      { degree_th: "วท.บ.", degree_en: "B.Sc.", field_th: "วิทยาการคอมพิวเตอร์", field_en: "Computer Science", institution_th: "มหาวิทยาลัยรามคำแหง", institution_en: "Ramkhamhaeng University", year: "2544 (2001)" }
    ],
    publications: [
      {
        authors: ["กริชบดินทร์ ผิวหอม", "Krichbodin Phewhom"],
        year: "2567 (2024)",
        title_th: "การเปรียบเทียบประสิทธิภาพอัลกอริทึม Apriori และ FP-Growth ด้วยชุดข้อมูลร้านขายของชำ",
        title_en: "Performance Comparison of Apriori and FP-Growth Algorithms with Grocery Dataset",
        journal_th: "วารสารวิชาการการประยุกต์ใช้เทคโนโลยีสารสนเทศ",
        journal_en: "Journal of Applied Information Technology",
        volume: 10, issue: 1, pages: "181-191"
      }
    ],
    courses_taught: [
      { code: "4121206", name_th: "การเขียนโปรแกรมคอมพิวเตอร์", name_en: "Computer Programming", credits: "3(2-2-5)" },
      { code: "4121701", name_th: "ดิจิตอลเบื้องต้น", name_en: "Introduction to Digital Systems", credits: "3(2-2-5)" },
      { code: "4124509", name_th: "การสื่อสารระหว่างมนุษย์กับคอมพิวเตอร์", name_en: "Human-Computer Interaction", credits: "3(2-2-5)" },
      { code: "4124501", name_th: "ปัญญาประดิษฐ์", name_en: "Artificial Intelligence", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 4,
    role_th: "อาจารย์ผู้รับผิดชอบหลักสูตร",
    role_en: "Curriculum Committee Member",
    prefix_th: "ผู้ช่วยศาสตราจารย์",
    prefix_en: "Asst. Prof.",
    name_th: "พิศาล สุขขี",
    name_en: "Phisan Sukkee",
    expertise_th: "วิทยาการคอมพิวเตอร์ / การพัฒนาเว็บและโมบายแอปพลิเคชัน",
    expertise_en: "Computer Science / Web & Mobile Development",
    image: "images/phisan.jpg",
    education: [
      { degree_th: "วท.ม.", degree_en: "M.Sc.", field_th: "วิทยาการคอมพิวเตอร์", field_en: "Computer Science", institution_th: "มหาวิทยาลัยศิลปากร", institution_en: "Silpakorn University", year: "2554 (2011)" },
      { degree_th: "วท.บ.", degree_en: "B.Sc.", field_th: "วิทยาการคอมพิวเตอร์", field_en: "Computer Science", institution_th: "มหาวิทยาลัยศิลปากร", institution_en: "Silpakorn University", year: "2548 (2005)" }
    ],
    publications: [
      {
        authors: ["พิศาล สุขขี", "เจษฎา ชาตรี"],
        year: "2567 (2024)",
        title_th: "การพัฒนาแอปพลิเคชัน \"น้องลำดวน\" ไลน์แชทบอท เพื่อแนะนำสถานที่ท่องเที่ยวในจังหวัดศรีสะเกษ",
        title_en: "Development of 'Nong Lamduan' LINE Chatbot Application for Sisaket Tourism Recommendations",
        journal_th: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        journal_en: "Journal of Technology Management, Rajabhat Maha Sarakham University",
        volume: 10, issue: 1, pages: "32-39"
      }
    ],
    courses_taught: [
      { code: "4121203", name_th: "การเขียนโปรแกรมเชิงวัตถุ", name_en: "Object-Oriented Programming", credits: "3(2-2-5)" },
      { code: "4122104", name_th: "การออกแบบและพัฒนาเว็บ", name_en: "Web Design & Development", credits: "3(2-2-5)" },
      { code: "4123505", name_th: "การเขียนโปรแกรมคอมพิวเตอร์ขั้นสูง", name_en: "Advanced Computer Programming", credits: "3(2-2-5)" },
      { code: "4122204", name_th: "โครงสร้างข้อมูลและอัลกอริทึม", name_en: "Data Structures & Algorithms", credits: "3(2-2-5)" },
      { code: "4124614", name_th: "การพัฒนาแอปพลิเคชันบนมือถือ", name_en: "Mobile Application Development", credits: "3(2-2-5)" }
    ]
  },
  {
    id: 5,
    role_th: "หัวหน้าสาขาวิชาฯ",
    role_en: "Head of Department",
    prefix_th: "ผู้ช่วยศาสตราจารย์ ดร.",
    prefix_en: "Asst. Prof. Dr.",
    name_th: "กนิษฐา อินธิชิต",
    name_en: "Kanittha Inthichit",
    expertise_th: "เทคโนโลยีสารสนเทศ / ระบบฐานข้อมูล & การวิเคราะห์ระบบ",
    expertise_en: "Information Technology / Database & Systems Analysis",
    image: "images/kanittha.jpg",
    education: [
      { degree_th: "ปร.ด.", degree_en: "Ph.D.", field_th: "การจัดการเทคโนโลยี", field_en: "Technology Management", institution_th: "มหาวิทยาลัยราชภัฏมหาสารคาม", institution_en: "Rajabhat Maha Sarakham University", year: "2561 (2018)" },
      { degree_th: "วท.ม.", degree_en: "M.Sc.", field_th: "เทคโนโลยีสารสนเทศการเกษตรและพัฒนาชนบท", field_en: "Agri-IT & Rural Development", institution_th: "มหาวิทยาลัยอุบลราชธานี", institution_en: "Ubon Ratchathani University", year: "2550 (2007)" },
      { degree_th: "วท.บ.", degree_en: "B.Sc.", field_th: "วิทยาการคอมพิวเตอร์", field_en: "Computer Science", institution_th: "มหาวิทยาลัยราชภัฏมหาสารคาม", institution_en: "Rajabhat Maha Sarakham University", year: "2546 (2003)" }
    ],
    publications: [
      {
        authors: ["กนิษฐา อินธิชิต", "ภควัฒน์ ปียวงษ์", "สุภาพร สุขใส"],
        year: "2565 (2022)",
        title_th: "การพัฒนาแอปพลิเคชันช่วยตัดสินใจในการเลือกเรียนสาขาวิชาคอมพิวเตอร์ในมหาวิทยาลัยราชภัฏศรีสะเกษบนระบบปฏิบัติการแอนดรอยด์ โดยใช้เทคนิคต้นไม้ตัดสินใจ",
        title_en: "Development of Decision Support Application for Selecting Computer Major at Sisaket Rajabhat University on Android Using Decision Tree",
        journal_th: "วารสารวิชาการการจัดการเทคโนโลยี มหาวิทยาลัยราชภัฏมหาสารคาม",
        journal_en: "Journal of Technology Management, Rajabhat Maha Sarakham University",
        volume: 9, issue: 2, pages: "97-107"
      }
    ],
    courses_taught: [
      { code: "4123202", name_th: "ระบบฐานข้อมูล", name_en: "Database Systems", credits: "3(2-2-5)" },
      { code: "4122506", name_th: "การวิเคราะห์และออกแบบระบบเชิงวัตถุ", name_en: "Object-Oriented Analysis & Design", credits: "3(2-2-5)" },
      { code: "4123665", name_th: "เทคโนโลยีท้องถิ่น", name_en: "Local Community Technology", credits: "3(2-2-5)" },
      { code: "4124920", name_th: "โครงงานทางวิทยาการคอมพิวเตอร์", name_en: "Computer Science Project", credits: "3(2-2-5)" }
    ]
  }
];

// ============================================================================
// 3. i18n LANGUAGE SWITCHER ENGINE (Bulletproof & Synchronous)
// ============================================================================
function getCurrentLanguage() {
  try {
    return localStorage.getItem('cs_sskru_lang') || 'th';
  } catch (e) {
    return 'th';
  }
}

function setLanguage(lang) {
  if (lang !== 'th' && lang !== 'en') lang = 'th';
  
  // Save preference
  try {
    localStorage.setItem('cs_sskru_lang', lang);
  } catch (e) {
    console.warn('LocalStorage not accessible', e);
  }
  document.documentElement.lang = lang;

  // Toggle active class on all TH buttons
  document.querySelectorAll('.lang-btn-th, #langTh, #navLangTh').forEach(btn => {
    if (lang === 'th') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Toggle active class on all EN buttons
  document.querySelectorAll('.lang-btn-en, #langEn, #navLangEn').forEach(btn => {
    if (lang === 'en') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update text content with data-i18n
  const dict = translations[lang] || translations.th;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update HTML content with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Re-render faculty cards in selected language
  renderLecturers(lang);
}

// Bind to window for direct inline accessibility
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;

// ============================================================================
// 4. RENDER FACULTY CARDS (Academic Style with Bilingual Support)
// ============================================================================
function renderLecturers(lang) {
  const lecturersGrid = document.getElementById('lecturersGrid');
  if (!lecturersGrid) return;

  const isEn = lang === 'en';
  const dict = translations[lang] || translations.th;

  lecturersGrid.innerHTML = '';
  lecturersData.forEach(lec => {
    const roleText = isEn ? lec.role_en : lec.role_th;
    const nameText = isEn ? `${lec.prefix_en} ${lec.name_en}` : `${lec.prefix_th} ${lec.name_th}`;
    const subText = isEn ? lec.name_th : lec.name_en;
    const expertiseText = isEn ? lec.expertise_en : lec.expertise_th;

    const card = document.createElement('div');
    card.className = 'card-academic';
    card.style.textAlign = 'center';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.innerHTML = `
      <div style="position:relative;margin-bottom:1.25rem;">
        <img src="${lec.image}" alt="${nameText}" style="width:115px;height:115px;border-radius:50%;object-fit:cover;border:3px solid #ffffff;box-shadow:0 4px 15px rgba(15,43,92,0.12);" onerror="this.src='images/logo.png'">
        <div style="position:absolute;bottom:2px;right:2px;width:32px;height:32px;background:var(--accent-gradient);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.9rem;box-shadow:0 2px 6px rgba(0,0,0,0.2);">
          <i class="bi bi-mortarboard-fill"></i>
        </div>
      </div>
      <h4 style="font-size:1.15rem;font-weight:700;margin-bottom:3px;color:var(--primary-navy);">${nameText}</h4>
      <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.6rem;font-family:var(--font-heading);font-weight:500;">${subText}</div>
      <span class="badge-tag" style="font-size:0.75rem;padding:3px 12px;margin-bottom:0.85rem;">${roleText}</span>
      <p style="font-size:0.9rem;color:var(--text-body);margin-bottom:1.5rem;flex-grow:1;line-height:1.6;">${expertiseText}</p>
      <button type="button" class="btn-secondary" style="width:100%;justify-content:center;font-size:0.88rem;padding:10px 14px;" onclick="openModal(${lec.id})">
        ${dict.fac_btn_view || '<i class="bi bi-person-lines-fill" style="color:var(--accent-brand);"></i> ดูประวัติและผลงาน'}
      </button>
    `;
    lecturersGrid.appendChild(card);
  });
}
window.renderLecturers = renderLecturers;

// ============================================================================
// 5. MODAL HANDLERS (Bilingual Support)
// ============================================================================
function openModal(id) {
  const lec = lecturersData.find(l => l.id === id);
  if (!lec) return;

  const lang = getCurrentLanguage();
  const isEn = lang === 'en';
  const dict = translations[lang] || translations.th;

  const nameText = isEn ? `${lec.prefix_en} ${lec.name_en}` : `${lec.prefix_th} ${lec.name_th}`;
  const subText = isEn ? lec.name_th : lec.name_en;
  const roleText = isEn ? lec.role_en : lec.role_th;

  document.getElementById('modalImg').src = lec.image;
  document.getElementById('modalName').textContent = nameText;
  document.getElementById('modalEn').textContent = subText;
  document.getElementById('modalRole').textContent = roleText;

  // Education Timeline
  const eduContainer = document.getElementById('modalEducation');
  eduContainer.innerHTML = lec.education.map(e => {
    const degree = isEn ? e.degree_en : e.degree_th;
    const field = isEn ? e.field_en : e.field_th;
    const inst = isEn ? e.institution_en : e.institution_th;
    return `
      <div style="position:relative;margin-bottom:1rem;padding-left:8px;">
        <strong style="color:var(--primary-navy);font-size:0.95rem;">${degree} (${field})</strong><br>
        <span style="font-size:0.85rem;color:var(--text-muted);">${inst} ${e.country ? '('+e.country+')' : ''} (${e.year})</span>
      </div>
    `;
  }).join('');

  // Primary Courses
  const coursesContainer = document.getElementById('modalCourses');
  coursesContainer.innerHTML = lec.courses_taught.map(c => {
    const courseName = isEn ? c.name_en : c.name_th;
    return `
      <span style="background:var(--bg-surface-subtle);border:1px solid var(--border-subtle);padding:6px 12px;border-radius:6px;font-size:0.85rem;display:inline-flex;align-items:center;gap:8px;">
        <strong class="code-pill">${c.code}</strong> <span style="color:var(--primary-navy);font-weight:500;">${courseName}</span> <small style="color:var(--text-muted);">(${c.credits})</small>
      </span>
    `;
  }).join('');

  // Publications
  const pubContainer = document.getElementById('modalPubs');
  pubContainer.innerHTML = lec.publications.map(p => {
    const title = isEn ? (p.title_en || p.title_th) : p.title_th;
    const journal = isEn ? (p.journal_en || p.journal_th) : p.journal_th;
    const authorLabel = isEn ? 'Authors' : 'ผู้เขียน';
    const yearLabel = isEn ? 'Year' : 'ปี';
    const volLabel = isEn ? 'Vol.' : 'ปีที่';
    const noLabel = isEn ? 'No.' : 'ฉบับที่';
    const pageLabel = isEn ? 'pp.' : 'หน้า';

    return `
      <div style="background:var(--bg-surface-subtle);border:1px solid var(--border-subtle);border-radius:10px;padding:1.25rem;margin-bottom:0.85rem;">
        <h5 style="font-size:0.98rem;font-weight:600;margin-bottom:6px;color:var(--primary-navy);line-height:1.4;">${title}</h5>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;">${authorLabel}: ${p.authors.join(', ')} | ${yearLabel}: ${p.year}</p>
        <span style="background:var(--accent-brand-light);color:var(--accent-brand);font-size:0.75rem;padding:3px 10px;border-radius:4px;display:inline-block;font-weight:600;border:1px solid var(--accent-brand-border);">
          ${journal} ${volLabel} ${p.volume} ${noLabel} ${p.issue} ${pageLabel} ${p.pages}
        </span>
      </div>
    `;
  }).join('');

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

window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalDirect = closeModalDirect;

// ============================================================================
// 6. TAB SWITCHING HANDLERS
// ============================================================================
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

window.switchTab = switchTab;
window.switchTrack = switchTrack;
window.switchYear = switchYear;
window.switchNewsTab = switchNewsTab;

// ============================================================================
// 7. NAVIGATION SCROLLSPY & SLIDING ACTIVE INDICATOR
// ============================================================================
function initNavScrollSpy() {
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const navIndicator = document.getElementById('navIndicator');
  const navLinks = Array.from(document.querySelectorAll('.nav-menu .nav-link'));
  const navToggle = document.getElementById('navToggle');

  const sectionMapping = {
    'hero': 'hero',
    'about': 'about',
    'why-cs': 'about',
    'curriculum': 'curriculum',
    'schedule': 'schedule',
    'quality-reports': 'curriculum',
    'news': 'news',
    'lecturers': 'lecturers',
    'downloads': 'downloads',
    'contact': 'contact'
  };

  const sections = Array.from(document.querySelectorAll('section[id]'));

  function moveIndicator(linkEl) {
    if (!navIndicator || !navMenu || !linkEl) return;
    if (window.innerWidth <= 1060) {
      navIndicator.style.opacity = '0';
      return;
    }

    const menuRect = navMenu.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    const paddingX = 8;
    const left = (linkRect.left - menuRect.left) + paddingX;
    const width = linkRect.width - (paddingX * 2);

    if (width > 0) {
      navIndicator.style.transform = `translateX(${left}px)`;
      navIndicator.style.width = `${width}px`;
      navIndicator.style.opacity = '1';
    }
  }

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

  let isTicking = false;
  function handleScrollSpy() {
    const scrollPos = window.scrollY || window.pageYOffset;
    const navbarHeight = navbar ? navbar.offsetHeight : 76;
    const triggerOffset = navbarHeight + 90;

    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
      setActiveLink('contact');
      return;
    }

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

  window.addEventListener('scroll', () => {
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

  navMenu.addEventListener('mouseleave', () => {
    const activeLink = navMenu.querySelector('.nav-link.active');
    if (activeLink) {
      moveIndicator(activeLink);
    }
  });

  window.addEventListener('resize', () => {
    const activeLink = navMenu.querySelector('.nav-link.active');
    if (activeLink) {
      moveIndicator(activeLink);
    }
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  handleScrollSpy();
  window.addEventListener('load', () => {
    handleScrollSpy();
  });
}

// ============================================================================
// 8. GENTLE HERO PARALLAX MOTION (60FPS)
// ============================================================================
function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  const heroBg = document.getElementById('heroBg');
  const heroContent = document.getElementById('heroContent');

  if (!heroSection || !heroBg) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY <= heroHeight + 150) {
      const bgOffsetY = scrollY * 0.22;
      heroBg.style.transform = `translate3d(0, ${bgOffsetY.toFixed(1)}px, 0)`;

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

  updateParallax();
}

// ============================================================================
// 9. INITIALIZATION ON DOM READY & EVENT ATTACHMENTS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Bind all buttons with [data-lang]
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Apply saved language or default to Thai
  const savedLang = getCurrentLanguage();
  setLanguage(savedLang);

  // Initialize ScrollSpy & Parallax
  initNavScrollSpy();
  initHeroParallax();
});
