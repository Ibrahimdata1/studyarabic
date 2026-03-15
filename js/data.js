// ===== SHARED NODE CONTENT =====
// Nodes reused across roadmaps share content via functions
const N = {
// ---------- FOUNDATION ----------
letters: { id:"letters", titleTh:"ตัวอักษร 28 ตัว", titleAr:"الحُرُوف الهِجَائِيَّة", points:20,
  desc:"เรียนตัวอักษรอาหรับ 28 ตัว รูปร่าง ชื่อ เสียง",
  content:`<h3>ตัวอักษรอาหรับ 28 ตัว</h3><p>ภาษาอาหรับเขียนจากขวาไปซ้าย ← ตัวอักษรมี 4 รูปแบบ (ต้น กลาง ท้าย เดี่ยว) จำรูปเดี่ยวก่อน</p>
<h4>กลุ่มคู่ที่คล้ายกัน</h4>
<div class="ar-example">ب ت ث — จุด 1 ล่าง / 2 บน / 3 บน<span class="meaning">รูปเหมือนกัน ต่างแค่จำนวนจุด</span></div>
<div class="ar-example">ج ح خ — จุดล่าง / ไม่มี / จุดบน</div>
<div class="ar-example">د ذ — ر ز — ส สำเนียงต่างกัน</div>
<div class="ar-example">س ش — ص ض — ط ظ — ع غ</div>
<div class="ar-example">ف ق — ك ل م ن ه و ي<span class="meaning">กลุ่มสุดท้าย + ا (อะลิฟ) ء (ฮัมซะฮฺ)</span></div>
<div class="tip-box"><span class="tb-title">ทางลัด</span>จำเป็นคู่ ต่างกันแค่จุด ฝึกเขียนวันละ 7 ตัว 4 วันจำครบ!</div>`,
  quiz:[
    {q:"ตัวอักษรอาหรับมีกี่ตัว?",choices:["26","28","30"],answer:1},
    {q:"ภาษาอาหรับเขียนทิศทางไหน?",choices:["ซ้ายไปขวา","ขวาไปซ้าย"],answer:1},
    {q:"ب กับ ت ต่างกันอย่างไร?",choices:["รูปร่างต่าง","จำนวนจุดต่าง","เสียงเหมือนกัน"],answer:1},
    {q:"ا (อะลิฟ) มีลักษณะพิเศษอย่างไร?",choices:["เสียงดัง","ไม่มีเสียงตัวเอง ใช้รองรับสระ","ใช้จบประโยค"],answer:1}
  ]},
vowels: { id:"vowels", titleTh:"สระ (ฮะเราะกาต)", titleAr:"الحَرَكَات", points:20,
  desc:"สระสั้น สระยาว สุกูน",
  content:`<h3>สระสั้น 3 ตัว + สระยาว 3 ตัว</h3>
<table><tr><th>สระ</th><th>ชื่อ</th><th>เสียง</th><th>ตัวอย่าง</th></tr>
<tr><td class="arabic-big">بَ</td><td>ฟัตหะฮฺ</td><td>อะ</td><td>بَ = บะ</td></tr>
<tr><td class="arabic-big">بِ</td><td>กัสเราะฮฺ</td><td>อิ</td><td>بِ = บิ</td></tr>
<tr><td class="arabic-big">بُ</td><td>ฎ็อมมะฮฺ</td><td>อุ</td><td>بُ = บุ</td></tr></table>
<h4>สระยาว</h4>
<div class="ar-example">بَا = บา (ฟัตหะฮฺ+ا) | بِي = บี (กัสเราะฮฺ+ي) | بُو = บู (ฎ็อมมะฮฺ+و)</div>
<h4>สุกูน ْ = ไม่มีสระ</h4>
<div class="ar-example">مَسْجِد = มัส-ญิด (ส ไม่มีสระ)</div>
<div class="highlight-box"><span class="hb-title">สำคัญ!</span>สระ 3 ตัวนี้คือกุญแจของ "อิอฺรอบ" — สระท้ายคำบอกหน้าที่ของคำในประโยค!</div>`,
  quiz:[
    {q:"สระสั้นมีกี่ตัว?",choices:["2","3","5"],answer:1},
    {q:"بَ อ่านว่าอะไร?",choices:["บิ","บะ","บุ"],answer:1},
    {q:"ฎ็อมมะฮฺให้เสียงอะไร?",choices:["อะ","อิ","อุ"],answer:2},
    {q:"สุกูน ْ หมายถึง?",choices:["เสียงยาว","ไม่มีสระ","เสียงซ้ำ"],answer:1}
  ]},
tanwin: { id:"tanwin", titleTh:"ตันวีน & ตัชดีด", titleAr:"تَنْوِين / شَدَّة", points:20,
  desc:"ตันวีน (น ท้ายคำ) ตัชดีด (พยัญชนะซ้ำ)",
  content:`<h3>ตันวีน — เสียง น ท้ายคำ</h3>
<table><tr><th>ตันวีน</th><th>เสียง</th><th>ตัวอย่าง</th></tr>
<tr><td class="arabic-big">ـٌ</td><td>อุน</td><td>كِتَابٌ = กิตาบุน</td></tr>
<tr><td class="arabic-big">ـً</td><td>อัน</td><td>كِتَابًا = กิตาบัน</td></tr>
<tr><td class="arabic-big">ـٍ</td><td>อิน</td><td>كِتَابٍ = กิตาบิน</td></tr></table>
<h3>ตัชดีد ّ — พยัญชนะซ้ำ</h3>
<div class="ar-example">مُحَمَّد = มุ-ฮัม-มัด (م ซ้ำ)<span class="meaning">اللّٰه = อัล-ลอฮฺ (ل ซ้ำ)</span></div>
<div class="warn-box"><span class="wb-title">กฎทอง</span>ال กับ تنوين ไม่อยู่ด้วยกัน! كِتَابٌ ✅ | الكِتَابُ ✅ | الكِتَابٌ ❌</div>`,
  quiz:[
    {q:"ـٌ ออกเสียงว่า?",choices:["อุน","อัน","อิน"],answer:0},
    {q:"ตัชดีด ّ หมายถึง?",choices:["ไม่มีสระ","พยัญชนะซ้ำ","เสียงยาว"],answer:1},
    {q:"ال กับ تنوين อยู่ด้วยกันได้ไหม?",choices:["ได้","ไม่ได้"],answer:1}
  ]},
// ---------- 3 TYPES ----------
ism: { id:"ism", titleTh:"อิสมฺ (คำนาม)", titleAr:"اسم", points:25,
  desc:"คำนาม — คน สัตว์ สิ่งของ สถานที่ ลักษณะ",
  content:`<h3>اسم — คำนาม</h3>
<p>ทุกคำในภาษาอาหรับเป็น 1 ใน 3: <strong>اسم</strong> (คำนาม), فعل (กริยา), حرف (คำเชื่อม)</p>
<div class="ar-example">مُحَمَّد — كِتَاب — مَسْجِد — كَبِير — يَوْم<span class="meaning">มุฮัมมัด — หนังสือ — มัสยิด — ใหญ่ — วัน</span></div>
<h4>วิธีสังเกต اسم</h4>
<ol><li>ใส่ ال ข้างหน้าได้ → الكِتَاب ✅</li><li>มีตันวีนได้ → كِتَابٌ ✅</li></ol>
<div class="tip-box"><span class="tb-title">ทางลัด</span>ลองใส่ ال ข้างหน้า ถ้าได้ = اسم!</div>`,
  quiz:[
    {q:"اسم คืออะไร?",choices:["คำกริยา","คำนาม","คำเชื่อม"],answer:1},
    {q:"สังเกต اسم ง่ายสุด?",choices:["ผันตามเวลาได้","ใส่ ال ได้","ไม่มีความหมาย"],answer:1},
    {q:"كَبِير (ใหญ่) เป็นประเภท?",choices:["اسم","فعل","حرف"],answer:0}
  ]},
fil: { id:"fil", titleTh:"ฟิอฺลฺ (คำกริยา)", titleAr:"فعل", points:25,
  desc:"คำกริยา — การกระทำที่ผูกกับเวลา",
  content:`<h3>فعل — คำกริยา</h3>
<p>فعل บอกการกระทำที่ผูกกับเวลา (อดีต/ปัจจุบัน/คำสั่ง)</p>
<div class="ar-example">كَتَبَ (เขียนแล้ว) — يَكْتُبُ (กำลังเขียน) — اُكْتُبْ (จงเขียน!)</div>
<h4>สังเกต فعل</h4>
<ol><li>ผันตามผู้กระทำได้ → كَتَبَ / كَتَبَتْ / كَتَبُوا</li><li>ใส่ ال ไม่ได้ → الكَتَبَ ❌</li></ol>
<div class="tip-box"><span class="tb-title">ทางลัด</span>บอกได้ว่า "ทำเมื่อไหร่" = فعل!</div>`,
  quiz:[
    {q:"فعل คืออะไร?",choices:["คำนาม","คำกริยา","คำเชื่อม"],answer:1},
    {q:"ذَهَبَ (ไปแล้ว) เป็น?",choices:["اسم","فعل","حرف"],answer:1},
    {q:"กริยาอาหรับมีกี่เวลา?",choices:["2","3","4"],answer:1}
  ]},
harf: { id:"harf", titleTh:"ฮัรฟฺ (คำเชื่อม)", titleAr:"حرف", points:25,
  desc:"คำเชื่อม — ไม่มีความหมายในตัวเอง",
  content:`<h3>حرف — คำเชื่อม</h3>
<p>ไม่มีความหมายสมบูรณ์ในตัวเอง ต้องใช้คู่กับ اسم หรือ فعل</p>
<table><tr><th>حرف</th><th>ความหมาย</th></tr>
<tr><td class="arabic-big">فِي</td><td>ใน</td></tr><tr><td class="arabic-big">مِنْ</td><td>จาก</td></tr>
<tr><td class="arabic-big">إِلَى</td><td>ไปยัง</td></tr><tr><td class="arabic-big">عَلَى</td><td>บน</td></tr>
<tr><td class="arabic-big">بِـ</td><td>ด้วย</td></tr><tr><td class="arabic-big">لِـ</td><td>สำหรับ</td></tr>
<tr><td class="arabic-big">وَ</td><td>และ</td></tr></table>
<div class="highlight-box"><span class="hb-title">สรุป 3 ประเภท</span>ลอง ال ได้? → اسم | ผันตามเวลาได้? → فعل | ทั้งสองไม่ได้? → حرف</div>`,
  quiz:[
    {q:"حرف คืออะไร?",choices:["คำนาม","คำกริยา","คำเชื่อมไม่มีความหมายตัวเอง"],answer:2},
    {q:"فِي เป็นประเภท?",choices:["اسم","فعل","حرف"],answer:2},
    {q:"คำอาหรับแบ่งกี่ประเภท?",choices:["2","3","4"],answer:1}
  ]},
// ---------- NOUN PROPERTIES ----------
gender: { id:"gender", titleTh:"เพศ (มุซักกัรฺ/มุอันนัษ)", titleAr:"مُذَكَّر / مُؤَنَّث", points:25,
  content:`<h3>เพศของคำนาม</h3>
<p>ทุกคำนามมีเพศ — مُذَكَّر (ชาย) หรือ مُؤَنَّث (หญิง)</p>
<p>สังเกตเพศหญิง: ลงท้ายด้วย <span class="arabic-big">ة</span> (ตาอฺมัรบูเฏาะฮฺ)</p>
<div class="ar-example">مَدْرَسَة (โรงเรียน) — سَيَّارَة (รถ) — شَجَرَة (ต้นไม้)<span class="meaning">ลงท้าย ة → เพศหญิง</span></div>
<div class="warn-box"><span class="wb-title">ข้อยกเว้น</span>อวัยวะคู่ (يَد มือ, عَيْن ตา) เป็นเพศหญิงแม้ไม่มี ة</div>`,
  quiz:[
    {q:"مَدْرَسَة เป็นเพศ?",choices:["ชาย","หญิง"],answer:1},
    {q:"สังเกตเพศหญิงจาก?",choices:["ลงท้าย ة","ขึ้นต้น ال"],answer:0},
    {q:"كِتَاب เป็นเพศ?",choices:["ชาย","หญิง"],answer:0}
  ]},
number: { id:"number", titleTh:"จำนวน (เอกพจน์/คู่/พหูพจน์)", titleAr:"مُفْرَد / مُثَنَّى / جَمْع", points:25,
  content:`<h3>3 จำนวน</h3>
<table><tr><th>จำนวน</th><th>ตัวอย่าง</th><th>สังเกต</th></tr>
<tr><td>مُفْرَد (1)</td><td class="arabic-big">كِتَابٌ</td><td>ปกติ</td></tr>
<tr><td>مُثَنَّى (2)</td><td class="arabic-big">كِتَابَانِ</td><td>เติม انِ/يْنِ</td></tr>
<tr><td>جَمْع (3+)</td><td class="arabic-big">كُتُبٌ</td><td>เปลี่ยนรูปหรือเติม ون/ات</td></tr></table>
<div class="tip-box"><span class="tb-title">ทางลัด</span>انِ/يْنِ ท้ายคำ = คู่ | ونَ/ينَ = พหูพจน์ชาย | اتٌ = พหูพจน์หญิง</div>`,
  quiz:[
    {q:"كِتَابَانِ เป็นจำนวน?",choices:["เอกพจน์","คู่","พหูพจน์"],answer:1},
    {q:"مُسْلِمُونَ เป็นจำนวน?",choices:["เอกพจน์","คู่","พหูพจน์"],answer:2},
    {q:"كُتُب เป็นพหูพจน์แบบ?",choices:["ปกติชาย","ปกติหญิง","พหูพจน์หัก"],answer:2}
  ]},
definite: { id:"definite", titleTh:"ชี้เฉพาะ / ไม่ชี้เฉพาะ", titleAr:"مَعْرِفَة / نَكِرَة", points:25,
  content:`<h3>معرفة vs نكرة</h3>
<div class="ar-example">كِتَابٌ = หนังสือเล่มหนึ่ง (نكرة — มีตันวีน)<span class="meaning">الكِتَابُ = หนังสือเล่มนั้น (معرفة — มี ال)</span></div>
<div class="warn-box"><span class="wb-title">กฎทอง</span>ال + تنوين ไม่อยู่ด้วยกัน!</div>`,
  quiz:[
    {q:"كِتَابٌ (มีตันวีน) เป็น?",choices:["معرفة","نكرة"],answer:1},
    {q:"الكِتَابُ (มี ال) เป็น?",choices:["معرفة","نكرة"],answer:0},
    {q:"ال กับ تنوين อยู่ด้วยกันได้?",choices:["ได้","ไม่ได้"],answer:1}
  ]},
// ---------- VERB TENSES ----------
madi: { id:"madi", titleTh:"กริยาอดีต", titleAr:"فِعْل مَاضِي", points:25,
  content:`<h3>فعل ماضي — ทำแล้ว</h3>
<div class="ar-example">كَتَبَ — ذَهَبَ — قَرَأَ — قَالَ — عَلِمَ — جَلَسَ<span class="meaning">เขียนแล้ว — ไปแล้ว — อ่านแล้ว — พูดแล้ว — รู้แล้ว — นั่งแล้ว</span></div>
<h4>ผันตามผู้กระทำ</h4>
<table><tr><th>ผู้ทำ</th><th>ผัน كَتَبَ</th></tr>
<tr><td>เขา</td><td>كَتَبَ</td></tr><tr><td>เธอ</td><td>كَتَبَتْ</td></tr>
<tr><td>พวกเขา</td><td>كَتَبُوا</td></tr><tr><td>ฉัน</td><td>كَتَبْتُ</td></tr></table>
<div class="tip-box"><span class="tb-title">สังเกต</span>ลงท้ายด้วย فتحة (ـَ) ในรูปพื้นฐาน</div>`,
  quiz:[
    {q:"كَتَبَ แปลว่า?",choices:["กำลังเขียน","เขียนแล้ว","จงเขียน"],answer:1},
    {q:"كَتَبَتْ หมายถึง?",choices:["เขาเขียน","เธอเขียน","พวกเขาเขียน"],answer:1},
    {q:"كَتَبْتُ หมายถึง?",choices:["เขาเขียน","ฉันเขียน","เราเขียน"],answer:1}
  ]},
mudari: { id:"mudari", titleTh:"กริยาปัจจุบัน/อนาคต", titleAr:"فِعْل مُضَارِع", points:25,
  content:`<h3>فعل مضارع — กำลังทำ/จะทำ</h3>
<h4>สังเกต: ขึ้นต้นด้วย أَنَيْتُ (أ ن ي ت)</h4>
<table><tr><th>อักษรนำ</th><th>ผู้ทำ</th><th>ตัวอย่าง</th></tr>
<tr><td class="arabic-big">يَـ</td><td>เขา</td><td>يَكْتُبُ</td></tr>
<tr><td class="arabic-big">تَـ</td><td>เธอ/คุณ</td><td>تَكْتُبُ</td></tr>
<tr><td class="arabic-big">أَ</td><td>ฉัน</td><td>أَكْتُبُ</td></tr>
<tr><td class="arabic-big">نَـ</td><td>เรา</td><td>نَكْتُبُ</td></tr></table>
<div class="highlight-box"><span class="hb-title">จำ أَنَيْتُ!</span>ขึ้นต้นด้วย أ ن ي ت → เป็น فعل مضارع แน่นอน!</div>`,
  quiz:[
    {q:"يَكْتُبُ แปลว่า?",choices:["เขียนแล้ว","กำลังเขียน","จงเขียน"],answer:1},
    {q:"อักษรนำ مضارع คือ?",choices:["ا ب ت ث","أ ن ي ت","ح خ ع غ"],answer:1},
    {q:"أَكْتُبُ หมายถึง?",choices:["เขากำลังเขียน","ฉันกำลังเขียน","เรากำลังเขียน"],answer:1}
  ]},
amr: { id:"amr", titleTh:"กริยาคำสั่ง", titleAr:"فِعْل أَمْر", points:25,
  content:`<h3>فعل أمر — จงทำ!</h3>
<div class="ar-example">اُكْتُبْ — اِقْرَأْ — قُلْ — اِذْهَبْ<span class="meaning">จงเขียน — จงอ่าน — จงกล่าว — จงไป</span></div>
<h4>ตัวอย่างจากอัลกุรอาน</h4>
<div class="ar-example">قُلْ هُوَ اللهُ أَحَدٌ<span class="meaning">จงกล่าวเถิดว่า พระองค์คืออัลลอฮฺ ผู้ทรงเอกะ</span></div>
<div class="ar-example">اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ<span class="meaning">จงอ่าน ด้วยพระนามแห่งพระผู้อภิบาลของเจ้า ผู้ทรงสร้าง</span></div>`,
  quiz:[
    {q:"قُلْ แปลว่า?",choices:["เขาพูด","กำลังพูด","จงกล่าว"],answer:2},
    {q:"اِقْرَأْ เป็นกริยาเวลา?",choices:["ماضي","مضارع","أمر"],answer:2}
  ]},
// ---------- ROOT ----------
root: { id:"root", titleTh:"ราก 3 ตัวอักษร", titleAr:"الجَذْر الثُّلاثِي", points:30,
  content:`<h3>ระบบรากศัพท์ — รู้ราก 1 = รู้คำ 10+!</h3>
<h4>ราก ك-ت-ب (เขียน)</h4>
<table><tr><th>คำ</th><th>ความหมาย</th></tr>
<tr><td class="arabic-big">كَتَبَ</td><td>เขียนแล้ว</td></tr>
<tr><td class="arabic-big">كِتَاب</td><td>หนังสือ</td></tr>
<tr><td class="arabic-big">كَاتِب</td><td>ผู้เขียน</td></tr>
<tr><td class="arabic-big">مَكْتَبَة</td><td>ห้องสมุด</td></tr>
<tr><td class="arabic-big">مَكْتُوب</td><td>ถูกเขียน</td></tr></table>
<h4>ราก ع-ل-م (รู้)</h4>
<div class="ar-example">عَلِمَ — عِلْم — عَالِم — عُلَمَاء — تَعْلِيم — مَعْلُوم<span class="meaning">รู้แล้ว — ความรู้ — นักวิชาการ — อุละมาอฺ — การสอน — เป็นที่ทราบ</span></div>`,
  quiz:[
    {q:"รากศัพท์มีกี่ตัวอักษร?",choices:["2","3","4"],answer:1},
    {q:"مَكْتَبَة มาจากราก?",choices:["ع-ل-م","ك-ت-ب"],answer:1},
    {q:"عُلَمَاء มาจากราก?",choices:["ع-ل-م","ع-م-ل"],answer:0}
  ]},
// ---------- SENTENCES ----------
jumlah_ism: { id:"jumlah_ism", titleTh:"ประโยคนาม", titleAr:"الجُمْلَة الاسْمِيَّة", points:30,
  content:`<h3>ประโยคนาม = مبتدأ + خبر</h3>
<p>ไม่มีกริยา "เป็น/คือ" ทั้งสองเป็น مرفوع</p>
<div class="ar-example">الكِتَابُ جَدِيدٌ<span class="translit">อัลกิตาบุ ญะดีดุน</span><span class="meaning">หนังสือเล่มนั้นใหม่</span></div>
<div class="ar-example">اللهُ أَكْبَرُ<span class="meaning">อัลลอฮฺทรงยิ่งใหญ่ที่สุด</span></div>
<div class="tip-box"><span class="tb-title">กฎ</span>مبتدأ มักเป็น معرفة | خبر มักเป็น نكرة | ทั้งคู่ مرفوع (ضمة)</div>`,
  quiz:[
    {q:"ประโยคนามประกอบด้วย?",choices:["فعل+فاعل","مبتدأ+خبر"],answer:1},
    {q:"ใน الكِتَابُ جَدِيدٌ — مبتدأ คือ?",choices:["الكتاب","جديد"],answer:0},
    {q:"اللهُ أَكْبَرُ เป็นประโยคชนิด?",choices:["فعلية","اسمية"],answer:1}
  ]},
jumlah_fil: { id:"jumlah_fil", titleTh:"ประโยคกริยา", titleAr:"الجُمْلَة الفِعْلِيَّة", points:30,
  content:`<h3>ประโยคกริยา = فعل + فاعل + مفعول به</h3>
<p>ลำดับ: กริยา → ผู้ทำ → กรรม (V-S-O) ต่างจากไทย!</p>
<div class="ar-example">كَتَبَ الطَّالِبُ الدَّرْسَ<span class="meaning">นักเรียนเขียนบทเรียน — الطالبُ=فاعل(ضمة), الدرسَ=مفعول(فتحة)</span></div>
<div class="tip-box"><span class="tb-title">จำ</span>ผู้ทำ = ضمة (อุ) | กรรม = فتحة (อะ)</div>`,
  quiz:[
    {q:"ลำดับประโยคกริยา?",choices:["S-V-O","V-S-O"],answer:1},
    {q:"فاعل ต้องเป็น?",choices:["مرفوع","منصوب","مجرور"],answer:0},
    {q:"مفعول به ต้องเป็น?",choices:["مرفوع","منصوب","مجرور"],answer:1}
  ]},
// ---------- I'RAB ----------
irab: { id:"irab", titleTh:"อิอฺรอบ (ร็อฟอฺ นัศบฺ ญัรฺ)", titleAr:"الإِعْرَاب", points:35,
  content:`<h3>อิอฺรอบ — สระท้ายบอกหน้าที่คำ!</h3>
<table><tr><th>ตำแหน่ง</th><th>สระ</th><th>หน้าที่</th></tr>
<tr><td>مرفوع (ร็อฟอฺ)</td><td class="arabic-big">ـُ / ـٌ</td><td>ประธาน/ผู้ทำ</td></tr>
<tr><td>منصوب (นัศบฺ)</td><td class="arabic-big">ـَ / ـً</td><td>กรรม/หลัง إنّ</td></tr>
<tr><td>مجرور (ญัรฺ)</td><td class="arabic-big">ـِ / ـٍ</td><td>หลังบุพบท/มุฎอฟอิลัยฮฺ</td></tr></table>
<div class="ar-example">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ<span class="meaning">ทุกคำหลัง بِ เป็น مجرور — สังเกต كسرة (ـِ) ทุกคำ!</span></div>
<div class="highlight-box"><span class="hb-title">สรุป</span>ضمة=ประธาน | فتحة=กรรม | كسرة=หลังบุพบท</div>`,
  quiz:[
    {q:"ـُ (ฎ็อมมะฮฺ) บ่งบอกตำแหน่ง?",choices:["مرفوع","منصوب","مجرور"],answer:0},
    {q:"مفعول به ต้องมีสระ?",choices:["ـُ","ـَ","ـِ"],answer:1},
    {q:"หลัง حرف جر ต้องเป็น?",choices:["مرفوع","منصوب","مجرور"],answer:2}
  ]},
// ---------- STRUCTURES ----------
idafa: { id:"idafa", titleTh:"อิฎอฟะฮฺ (ของ)", titleAr:"الإِضَافَة", points:35,
  content:`<h3>الإضافة — "...ของ..."</h3>
<p>مضاف (คำแรก): ไม่มี ال ไม่มีตันวีน | مضاف إليه (คำที่สอง): ต้อง مجرور</p>
<div class="ar-example">كِتَابُ اللهِ — رَسُولُ اللهِ — بَيْتُ اللهِ — بِسْمِ اللهِ<span class="meaning">คัมภีร์ของอัลลอฮฺ — ศาสนทูตของอัลลอฮฺ — บ้านของอัลลอฮฺ — ด้วยพระนามของอัลลอฮฺ</span></div>`,
  quiz:[
    {q:"مضاف إليه ต้องเป็น?",choices:["مرفوع","منصوب","مجرور"],answer:2},
    {q:"ใน رَسُولُ اللهِ — مضاف คือ?",choices:["رسول","الله"],answer:0},
    {q:"مضاف ห้ามมี?",choices:["สระ","ال و تنوين"],answer:1}
  ]},
naat: { id:"naat", titleTh:"คำขยายนาม (นะอฺตฺ)", titleAr:"النَّعْت", points:35,
  content:`<h3>نعت — คำคุณศัพท์ตามคำนาม 4 อย่าง</h3>
<p>เพศ จำนวน ตำแหน่ง ชี้เฉพาะ — ต้องตรงกันหมด!</p>
<div class="ar-example">الكِتَابُ الكَبِيرُ — المَدْرَسَةُ الكَبِيرَةُ — فِي مَسْجِدٍ كَبِيرٍ<span class="meaning">ทุกคู่ตรงกัน: ال, ตำแหน่ง, เพศ</span></div>`,
  quiz:[
    {q:"نعت ต้องตามคำนามกี่เรื่อง?",choices:["2","3","4"],answer:2},
    {q:"ถ้าคำนามเป็น مؤنث — نعت ต้อง?",choices:["مذكر","مؤنث"],answer:1}
  ]},
huruf_jarr: { id:"huruf_jarr", titleTh:"คำบุพบท", titleAr:"حُرُوف الجَرّ", points:35,
  content:`<h3>حروف الجر — หลังนี้ต้อง مجرور เสมอ!</h3>
<table><tr><th>حرف</th><th>ความหมาย</th></tr>
<tr><td class="arabic-big">فِي</td><td>ใน</td></tr><tr><td class="arabic-big">مِنْ</td><td>จาก</td></tr>
<tr><td class="arabic-big">إِلَى</td><td>ไปยัง</td></tr><tr><td class="arabic-big">عَلَى</td><td>บน</td></tr>
<tr><td class="arabic-big">بِـ</td><td>ด้วย</td></tr><tr><td class="arabic-big">لِـ</td><td>สำหรับ</td></tr><tr><td class="arabic-big">عَنْ</td><td>เกี่ยวกับ</td></tr></table>`,
  quiz:[
    {q:"หลัง حرف جر ต้องเป็น?",choices:["مرفوع","منصوب","مجرور"],answer:2},
    {q:"فِي แปลว่า?",choices:["จาก","ใน","บน"],answer:1}
  ]},
// ---------- ADVANCED ----------
inna: { id:"inna", titleTh:"อินนะ وأخواتها", titleAr:"إِنَّ وَأَخَوَاتُهَا", points:40,
  content:`<h3>إنّ — เปลี่ยน مبتدأ เป็น منصوب!</h3>
<table><tr><th>คำ</th><th>ความหมาย</th></tr>
<tr><td class="arabic-big">إِنَّ</td><td>แท้จริง</td></tr><tr><td class="arabic-big">أَنَّ</td><td>ว่า</td></tr>
<tr><td class="arabic-big">لَكِنَّ</td><td>แต่ว่า</td></tr><tr><td class="arabic-big">كَأَنَّ</td><td>ราวกับ</td></tr></table>
<div class="ar-example">اللهُ غَفُورٌ → إِنَّ اللهَ غَفُورٌ<span class="meaning">الله เปลี่ยนจาก ـُ เป็น ـَ | غفور ยังคง مرفوع</span></div>`,
  quiz:[
    {q:"إنّ เปลี่ยน مبتدأ เป็น?",choices:["مرفوع","منصوب","مجرور"],answer:1},
    {q:"لكنّ แปลว่า?",choices:["แท้จริง","แต่ว่า","หวังว่า"],answer:1}
  ]},
kana: { id:"kana", titleTh:"กานะ وأخواتها", titleAr:"كَانَ وَأَخَوَاتُهَا", points:40,
  content:`<h3>كان — เปลี่ยน خبر เป็น منصوب! (ตรงข้ามกับ إنّ)</h3>
<table><tr><th>คำ</th><th>ความหมาย</th></tr>
<tr><td class="arabic-big">كَانَ</td><td>เคยเป็น</td></tr><tr><td class="arabic-big">لَيْسَ</td><td>ไม่เป็น</td></tr>
<tr><td class="arabic-big">أَصْبَحَ</td><td>กลายเป็น</td></tr><tr><td class="arabic-big">صَارَ</td><td>กลายเป็น</td></tr></table>
<div class="highlight-box"><span class="hb-title">เปรียบเทียบ</span>إنّ → เปลี่ยน مبتدأ | كان → เปลี่ยน خبر — ตรงข้ามกัน!</div>`,
  quiz:[
    {q:"كان เปลี่ยน خبر เป็น?",choices:["مرفوع","منصوب","مجرور"],answer:1},
    {q:"لَيْسَ แปลว่า?",choices:["เคยเป็น","ไม่เป็น","กลายเป็น"],answer:1}
  ]},
mawsul: { id:"mawsul", titleTh:"สรรพนามเชื่อม (ผู้ซึ่ง)", titleAr:"الاسْم المَوْصُول", points:40,
  content:`<h3>الاسم الموصول — ผู้ซึ่ง/ที่ซึ่ง</h3>
<table><tr><th>สรรพนาม</th><th>ใช้กับ</th></tr>
<tr><td class="arabic-big">الَّذِي</td><td>ชาย เอกพจน์</td></tr>
<tr><td class="arabic-big">الَّتِي</td><td>หญิง เอกพจน์</td></tr>
<tr><td class="arabic-big">الَّذِينَ</td><td>ชาย พหูพจน์</td></tr>
<tr><td class="arabic-big">مَنْ</td><td>ผู้ที่ (คน)</td></tr>
<tr><td class="arabic-big">مَا</td><td>สิ่งที่ (ไม่ใช่คน)</td></tr></table>
<div class="ar-example">الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ<span class="meaning">บรรดาผู้ศรัทธาและกระทำความดี — พบ 50+ ครั้งในอัลกุรอาน!</span></div>`,
  quiz:[
    {q:"الَّذِي ใช้กับ?",choices:["ชาย เอกพจน์","หญิง","พหูพจน์"],answer:0},
    {q:"الَّذِينَ آمَنُوا แปลว่า?",choices:["ผู้ปฏิเสธ","ผู้ศรัทธา"],answer:1}
  ]},
// ---------- APPLICATION ----------
app_quran: { id:"app_quran", titleTh:"วิเคราะห์อัลฟาติฮะฮฺ", titleAr:"تحليل الفاتحة", points:40,
  content:`<h3>วิเคราะห์ซูเราะฮฺอัลฟาติฮะฮฺ</h3>
<div class="ar-example">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ<span class="meaning">بِ=حرف جر → اسم=مجرور → الله=مضاف إليه → الرحمن الرحيم=نعت</span></div>
<div class="ar-example">الحَمْدُ للهِ رَبِّ العَالَمِينَ<span class="meaning">الحمدُ=مبتدأ(مرفوع) → لله=خبر → ربِّ=نعت(مجرور) → العالمين=مضاف إليه</span></div>
<div class="tip-box"><span class="tb-title">ฝึก</span>เปิดอัลกุรอาน 1 อายะฮฺ วิเคราะห์ทุกวัน: คำไหน اسم فعل حرف? ตำแหน่งอะไร?</div>`,
  quiz:[
    {q:"بِ ใน بِسْمِ เป็น?",choices:["اسم","فعل","حرف جر"],answer:2},
    {q:"الحَمْدُ เป็น?",choices:["مبتدأ(مرفوع)","مفعول به","فاعل"],answer:0}
  ]},
app_hadith: { id:"app_hadith", titleTh:"อ่านหะดีษ", titleAr:"فَهْم الحَدِيث", points:40,
  content:`<h3>สำนวนหะดีษที่พบบ่อย</h3>
<div class="ar-example">قَالَ رَسُولُ اللهِ ﷺ<span class="meaning">قال=فعل ماضي, رسولُ=فاعل(مرفوع), اللهِ=مضاف إليه</span></div>
<div class="ar-example">عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ<span class="meaning">عن=حرف جر → أبي=مجرور</span></div>
<div class="ar-example">إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ<span class="meaning">الأعمالُ=مبتدأ, بالنياتِ=خبر (حرف جر)</span></div>
<h4>แนะนำ</h4><ul><li>الأربعون النووية — หะดีษ 40 บทผู้เริ่มต้น</li><li>رياض الصالحين — หะดีษสั้นง่าย</li></ul>`,
  quiz:[
    {q:"قَالَ เป็นกริยาเวลา?",choices:["ماضي","مضارع","أمر"],answer:0},
    {q:"عَنْ เป็น?",choices:["اسم","فعل","حرف جر"],answer:2}
  ]},
app_ulama: { id:"app_ulama", titleTh:"ฟังอุละมาอฺ", titleAr:"فَهْم دُرُوس العُلَمَاء", points:40,
  content:`<h3>คำที่อุละมาอฺใช้บ่อย</h3>
<table><tr><th>คำ</th><th>ความหมาย</th></tr>
<tr><td class="arabic-big">يَعْنِي</td><td>หมายความว่า</td></tr>
<tr><td class="arabic-big">إِذَنْ</td><td>ดังนั้น</td></tr>
<tr><td class="arabic-big">لِأَنَّ</td><td>เพราะว่า</td></tr>
<tr><td class="arabic-big">مَثَلًا</td><td>ตัวอย่างเช่น</td></tr>
<tr><td class="arabic-big">وَلَكِنْ</td><td>แต่ว่า</td></tr></table>
<h4>ศัพท์วิชาการ</h4>
<div class="ar-example">عَقِيدَة — فِقْه — تَفْسِير — أُصُول — حَدِيث<span class="meaning">หลักศรัทธา — นิติศาสตร์ — อรรถาธิบาย — หลักพื้นฐาน — วจนะ</span></div>
<div class="tip-box"><span class="tb-title">ฝึก</span>ฟังคลิปอุละมาอฺวันละ 5 นาที จดคำไม่รู้ → หาความหมาย → ฟังซ้ำ 3 เดือนจับใจความ 50%+</div>`,
  quiz:[
    {q:"يَعْنِي แปลว่า?",choices:["ดังนั้น","หมายความว่า","ตัวอย่าง"],answer:1},
    {q:"فِقْه คือ?",choices:["หลักศรัทธา","นิติศาสตร์อิสลาม","การตีความ"],answer:1}
  ]}
};

// ===== 3 ROADMAPS =====
const ROADMAPS = {
  quran: {
    heading: "ไวยากรณ์อาหรับสำหรับอ่านอัลกุรอาน",
    desc: "เรียนไวยากรณ์ที่จำเป็นเพื่อเข้าใจอัลกุรอานด้วยตัวเอง",
    sections: [
      { title: "พื้นฐานอักษรอาหรับ", rows: [
        { left: [N.letters], right: [N.vowels] },
        { center: N.tanwin }
      ]},
      { title: "3 ประเภทของคำ", rows: [
        { left: [N.ism], right: [N.fil] },
        { center: N.harf }
      ]},
      { title: "คุณสมบัติคำนาม (اسم)", rows: [
        { left: [N.gender, N.number], right: [N.definite] }
      ]},
      { title: "คุณสมบัติคำกริยา (فعل)", rows: [
        { left: [N.madi], right: [N.mudari] },
        { center: N.amr }
      ]},
      { title: "ระบบรากศัพท์", rows: [
        { center: N.root }
      ]},
      { title: "โครงสร้างประโยค", rows: [
        { left: [N.jumlah_ism], right: [N.jumlah_fil] }
      ]},
      { title: "อิอฺรอบ (ตำแหน่งคำ)", rows: [
        { center: N.irab }
      ]},
      { title: "โครงสร้างสำคัญ", rows: [
        { left: [N.idafa, N.naat], right: [N.huruf_jarr] }
      ]},
      { title: "ไวยกรณ์ขั้นสูง", rows: [
        { left: [N.inna], right: [N.kana] },
        { center: N.mawsul }
      ]},
      { title: "ประยุกต์ใช้จริง", rows: [
        { center: N.app_quran }
      ]}
    ]
  },
  hadith: {
    heading: "ไวยากรณ์อาหรับสำหรับอ่านหะดีษ",
    desc: "เรียนไวยากรณ์ที่จำเป็นเพื่ออ่านหะดีษเข้าใจด้วยตัวเอง",
    sections: [
      { title: "พื้นฐานอักษร", rows: [
        { left: [N.letters], right: [N.vowels] },
        { center: N.tanwin }
      ]},
      { title: "3 ประเภทของคำ", rows: [
        { left: [N.ism, N.harf], right: [N.fil] }
      ]},
      { title: "คุณสมบัติคำนามและกริยา", rows: [
        { left: [N.gender, N.definite], right: [N.madi, N.mudari] }
      ]},
      { title: "รากศัพท์และจำนวน", rows: [
        { left: [N.root], right: [N.number] }
      ]},
      { title: "โครงสร้างประโยค", rows: [
        { left: [N.jumlah_ism], right: [N.jumlah_fil] }
      ]},
      { title: "อิอฺรอบ", rows: [
        { center: N.irab }
      ]},
      { title: "โครงสร้างสำคัญ", rows: [
        { left: [N.idafa, N.huruf_jarr], right: [N.naat] }
      ]},
      { title: "ไวยกรณ์ขั้นสูง", rows: [
        { left: [N.inna, N.kana], right: [N.mawsul] }
      ]},
      { title: "ประยุกต์ใช้จริง", rows: [
        { center: N.app_hadith }
      ]}
    ]
  },
  ulama: {
    heading: "ไวยากรณ์อาหรับสำหรับฟัง/อ่านอุละมาอฺ",
    desc: "เรียนไวยากรณ์เพื่อฟังบรรยายอุละมาอฺและอ่านตำราศาสนา",
    sections: [
      { title: "พื้นฐานอักษร", rows: [
        { left: [N.letters, N.vowels], right: [N.tanwin] }
      ]},
      { title: "3 ประเภทของคำ", rows: [
        { left: [N.ism], right: [N.fil] },
        { center: N.harf }
      ]},
      { title: "คุณสมบัติคำ", rows: [
        { left: [N.gender, N.number, N.definite], right: [N.madi, N.mudari, N.amr] }
      ]},
      { title: "รากศัพท์", rows: [
        { center: N.root }
      ]},
      { title: "โครงสร้างประโยค", rows: [
        { left: [N.jumlah_ism], right: [N.jumlah_fil] }
      ]},
      { title: "อิอฺรอบ", rows: [
        { center: N.irab }
      ]},
      { title: "โครงสร้างสำคัญ", rows: [
        { left: [N.idafa], right: [N.huruf_jarr] },
        { center: N.naat }
      ]},
      { title: "ไวยกรณ์ขั้นสูง", rows: [
        { left: [N.inna, N.mawsul], right: [N.kana] }
      ]},
      { title: "ประยุกต์ใช้จริง", rows: [
        { center: N.app_ulama }
      ]}
    ]
  }
};
