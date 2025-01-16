// script.js
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scroll-to-top");
  const firstSection = document.getElementById("section1");

  // تحقق من موقع التمرير
  window.addEventListener("scroll", () => {
      const firstSectionBottom = firstSection.offsetTop + firstSection.offsetHeight;

      // إذا كنت تحت أول سيكشن
      if (window.scrollY > firstSectionBottom) {
          scrollToTopButton.classList.add("visible"); // إظهار الزرار
      } else {
          scrollToTopButton.classList.remove("visible"); // إخفاء الزرار
      }
  });

  // حدث النقر على الزرار
  scrollToTopButton.addEventListener("click", () => {
      // Scroll لأول سيكشن
      firstSection.scrollIntoView({ behavior: "smooth" });
  });
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".pizza-button");
  const tabs = document.querySelectorAll(".kiwi-tab");

  // عرض المحتوى الافتراضي (زر الفضاء) عند تحميل الصفحة
  const defaultTab = localStorage.getItem("lastActiveTab") || "mango-tab1";
  showTab(defaultTab);

  // إضافة حدث النقر على الأزرار
  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          const tabId = button.getAttribute("data-tab");
          showTab(tabId);
          localStorage.setItem("lastActiveTab", tabId); // حفظ التبويب النشط
      });
  });

  function showTab(tabId) {
      // إخفاء جميع المحتويات
      tabs.forEach((tab) => {
          tab.classList.remove("active");
      });

      // إزالة النشاط من جميع الأزرار
      buttons.forEach((button) => {
          button.classList.remove("active");
      });

      // إظهار المحتوى المحدد
      document.getElementById(tabId).classList.add("active");

      // إضافة النشاط للزر المحدد
      document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
  }
});
// مراقبة التمرير على الصفحة
window.addEventListener('scroll', function() {
    // الحصول على جميع الأقسام والروابط
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
  
    // التحقق من القسم الذي يظهر في منتصف الشاشة
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });
  
    // إضافة/إزالة الدائرة حول الرابط بناءً على القسم الحالي
    links.forEach(link => {
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active'); // إضافة الدائرة حول الرابط
      } else {
        link.classList.remove('active'); // إزالة الدائرة إذا لم يكن الرابط نشطًا
      }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // لمنع إرسال النموذج بالطريقة العادية
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        content: `> **User Name:** ${name}\n> **User Email:** ${email}\nMessage: ${message}`
    };

    fetch('https://discord.com/api/webhooks/1328338208198754345/57CMC8boIoZDjCViAtv-pt5mS3PKWpmPG83Kahrzlve3Ea1SBDwQT9KSz_wKAqYH7Iwe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("تم إرسال الرسالة بنجاح!");
        } else {
            alert("حدث خطأ في إرسال الرسالة.");
        }
    })
    .catch(error => {
        alert("حدث خطأ في الاتصال.");
        console.error('Error:', error);
    });
});
