function updateViewCounter() {
  const el = document.querySelector(".view-count-value");
  if (!el) return; // Element not ready yet

  const postUrl = window.location.pathname;
  if (!postUrl || postUrl.length < 2) return;

  const key = postUrl.replace(/\W+/g, "_");
  const apiUrl = `https://api.countapi.xyz/hit/takdekeje_kuceng_my/${key}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const v = data.value || 0;
      el.textContent = v + (v === 1 ? " time" : " times");
    })
    .catch(err => console.warn("Counter Error:", err));
}

// Retry until element exists (because Blogger loads dynamically)
let tries = 0;
const waitEl = setInterval(() => {
  tries++;
  if (document.querySelector(".view-count-value") || tries > 20) {
    clearInterval(waitEl);
    updateViewCounter();
  }
}, 300);
