const themeToggle = document.getElementById('themeToggle');
const logoImg = document.getElementById('logoImg');
const body = document.body;
const icon = themeToggle.querySelector('i');

const darkLogo = 'dark.png';
const lightLogo = 'light.png';

if(localStorage.getItem('theme') === 'dark'){
  body.classList.add('dark-mode');
  logoImg.src = lightLogo;
  icon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if(body.classList.contains('dark-mode')){
    logoImg.src = lightLogo;
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    logoImg.src = darkLogo;
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

   const menuToggle = document.getElementById('navMenuToggle');
  const navMenu = document.getElementById('mainNavMenu');
  const menuIcon = document.getElementById('navMenuIcon');

  function closeMobileMenu() {
    navMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'فتح القائمة');

    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }

  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'إغلاق القائمة' : 'فتح القائمة'
    );

    menuIcon.classList.toggle('fa-bars', !isOpen);
    menuIcon.classList.toggle('fa-xmark', isOpen);
  });

  // إغلاق القائمة بعد الضغط على أحد الروابط
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // إغلاق القائمة عند الضغط خارجها أو على زر Escape
  document.addEventListener('click', function (event) {
    const clickedInsideNavbar =
      event.target.closest('.navbar');

    if (!clickedInsideNavbar) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // إعادة القائمة لوضع سطح المكتب عند تكبير الشاشة
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) {
      closeMobileMenu();
    }
  });
 
// ========================================================


// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.navbar ul li a');

// function changeActiveLink(){
//   let scrollY = window.scrollY;

//   sections.forEach(section => {
//     const sectionHeight = section.offsetHeight;
//     const sectionTop = section.offsetTop - 120; // مسافة أمان بسبب الـ Navbar الـ Sticky
//     const sectionId = section.getAttribute('id');

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//       navLinks.forEach(link => {
//         link.classList.remove('active');
//         if(link.getAttribute('href') === '#' + sectionId){
//           link.classList.add('active');
//         }
//       });
//     }
//   });

//   // لو في أعلى الصفحة (الهيرو) خلي "الرئيسية" Active
//   if(scrollY < 300){
//     navLinks.forEach(link => link.classList.remove('active'));
//     document.querySelector('.navbar ul li a[href="#home"]')?.classList.add('active');
//   }
// }

// window.addEventListener('scroll', changeActiveLink);

// ========================================================

const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(){
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });















  //  js for bundels
    const WHATSAPP_NUMBER = '201554579501';

  /* ===== Main Tabs ===== */
  document.querySelectorAll('.main-tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.main-tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.pricing-group').forEach(g=>g.classList.remove('active'));
      document.getElementById(btn.dataset.tab).classList.add('active');
      window.scrollTo({top: 200, behavior: 'smooth'});
    });
  });

  /* ===== Sub Tabs (Standalone) ===== */
  document.querySelectorAll('.sub-tab-btn[data-sub]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.sub-tab-btn[data-sub]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.sub-pricing-group').forEach(g=>g.classList.remove('active'));
      document.getElementById(btn.dataset.sub).classList.add('active');
    });
  });

  /* ===== Calculator Sub Tabs ===== */
  document.querySelectorAll('.sub-tab-btn[data-calc]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.sub-tab-btn[data-calc]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('calc-design-calc').style.display = btn.dataset.calc === 'design-calc' ? 'block' : 'none';
      document.getElementById('calc-media-calc').style.display = btn.dataset.calc === 'media-calc' ? 'block' : 'none';
      calculateTotal();
    });
  });

  /* ===== Direct Order from Pricing Cards ===== */
  function orderPackage(packageName, price){
    const message = `مرحباً، أرغب في طلب:%0A%0A📦 الباقة: ${packageName}%0A💰 التكلفة: ${price} ج.م%0A%0Aأرجو تأكيد التفاصيل.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  }

  /* ===== Custom Form Submission ===== */
  function sendCustomToWhatsapp(e){
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    let message = `🌟 *طلب باقة مخصصة*%0A%0A`;
    message += `🏥 اسم المكان: ${data.get('placeName')}%0A`;
    message += `👨‍⚕️ اسم الطبيب: ${data.get('doctorName')}%0A`;
    message += `📱 رقم الجوال: ${data.get('phone')}%0A%0A`;
    message += `━━━━━━━━━━━━━━━━━%0A`;
    message += `📋 *تفاصيل الباقة المطلوبة:*%0A`;
    message += `• عدد التصميمات: ${data.get('designsCount')}%0A`;
    message += `• عدد الريلز: ${data.get('reelsCount')}%0A`;
    message += `• عدد المنصات: ${data.get('platforms')}%0A`;
    message += `• الهدف: ${data.get('goal')}%0A`;
    if(data.get('notes')){
      message += `%0A📝 ملاحظات: ${data.get('notes')}%0A`;
    }
    message += `%0A⏳ في انتظار تأكيدكم للبدء.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    return false;
  }

  /* ===== Calculator Logic ===== */
  const summaryList = document.getElementById('summaryList');
  const totalAmount = document.getElementById('totalAmount');
  const whatsappBtn = document.getElementById('whatsappCalcBtn');

  function calculateTotal(){
    const activeCalc = document.querySelector('.sub-tab-btn[data-calc].active').dataset.calc;
    const container = document.getElementById('calc-' + activeCalc);

    let total = 0;
    let items = [];
    let mediaCommission = 0;

    // Base package
    const baseSelected = container.querySelector('input[type="radio"]:checked');
    if(baseSelected){
      const baseLabel = baseSelected.closest('.radio-option');
      const baseName = baseLabel.querySelector('.option-label').textContent.trim();
      let basePrice = parseInt(baseSelected.value);
      
      // For media: if > 5000 budget selected, calculate 20% commission
      if(activeCalc === 'media-calc' && baseLabel.dataset.name && baseLabel.dataset.name.includes('أكبر من 5,000')){
        // Will be calculated after budget selection
      } else {
        total += basePrice;
        items.push({name: baseName, price: basePrice});
      }
      baseLabel.classList.add('selected');
    }

    container.querySelectorAll('.radio-option').forEach(r=>{
      if(!r.querySelector('input').checked) r.classList.remove('selected');
    });

    // Special: Media buying calculation
    if(activeCalc === 'media-calc'){
      const baseRadio = container.querySelector('input[name="media-base-calc"]:checked');
      const budgetRadio = container.querySelector('input[name="media-budget"]:checked');
      
      if(baseRadio && budgetRadio){
        const budget = parseInt(budgetRadio.value);
        const baseLabel = baseRadio.closest('.radio-option');
        
        // Reset
        total = 0;
        items = [];
        
        if(budget < 5000){
          // Fixed 1500
          total = 1500;
          items.push({name: 'رسوم إدارة الحملة', price: 1500});
        } else {
          // 20% of budget
          const commission = Math.round(budget * 0.20);
          total = commission;
          items.push({name: `رسوم إدارة (20% من ${budget.toLocaleString()})`, price: commission});
        }
        
        // Add budget as separate line (not in total)
        items.push({name: 'الميزانية الإعلانية (تُدفع لفيسبوك)', price: budget, isBudget: true});
      }
    } else {
      // Design addons
      const checkedAddons = container.querySelectorAll('.design-addon-calc:checked');
      checkedAddons.forEach(addon=>{
        const label = addon.closest('.check-option');
        const name = label.dataset.name;
        const price = parseInt(addon.value);
        total += price;
        items.push({name: name, price: price});
        label.classList.add('selected');
      });

      container.querySelectorAll('.check-option').forEach(c=>{
        if(!c.querySelector('input').checked) c.classList.remove('selected');
      });
    }

    // Update Summary
    if(items.length === 0){
      summaryList.innerHTML = '<p class="empty-msg">اختر الخدمات عشان تشوف التفاصيل هنا</p>';
    } else {
      summaryList.innerHTML = items.map(item => {
        const priceColor = item.isBudget ? '#cfd8d6' : 'var(--yellow)';
        return `
        <div class="summary-item">
          <span>${item.name}</span>
          <span style="color:${item.isBudget ? '#cfd8d6' : 'var(--yellow)'}">${item.price.toLocaleString()} ج.م</span>
        </div>`;
      }).join('');
    }

    totalAmount.innerHTML = total.toLocaleString() + ' <small>ج.م</small>';

    // Update WhatsApp link
    let serviceType = activeCalc === 'design-calc' ? 'باقة تصميم' : 'باقة إدارة حملات إعلانية';
    let message = `مرحباً، أرغب في طلب ${serviceType} مخصصة:%0A%0A`;
    
    // Filter out budget from items for message (or include it)
    items.forEach(item => {
      const label = item.isBudget ? '(ميزانية إعلانية)' : '';
      message += `• ${item.name} ${label}: ${item.price.toLocaleString()} ج.م%0A`;
    });
    message += `%0A💰 *إجمالي أتعاب الإدارة: ${total.toLocaleString()} ج.م*`;

    whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  }

  // Event listeners
  document.querySelectorAll('.calc-group input').forEach(input=>{
    input.addEventListener('change', calculateTotal);
  });

  calculateTotal();









 