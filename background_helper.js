// Background_helper.js
// این فایل حرکت موس روی لایه پشت متن رو کنترل می‌کنه

const bgText = document.getElementById("bg-text");

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;

  // نسبت موقعیت موس نسبت به مرکز صفحه (-1 تا 1)
  const xRatio = (e.clientX / innerWidth) * 2 - 1;
  const yRatio = (e.clientY / innerHeight) * 2 - 1;

  // مقدار جابجایی ماکزیمم (پیکسل)
  const maxTranslate = 10;

  // ست کردن متغیرهای CSS برای جابجایی لایه پشت متن
  bgText.style.setProperty('--tx', `${xRatio * maxTranslate}px`);
  bgText.style.setProperty('--ty', `${yRatio * maxTranslate}px`);
});
