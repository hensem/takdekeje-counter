document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".view-count-value");
  if (!el) return;

  const postUrl = window.location.pathname;
  if (!postUrl || postUrl.length < 2) return;

  const key = postUrl.replace(/\W+/g, "_");
  const apiUrl = `https://api.countapi.xyz/hit/takdekeje_kuceng_my/${key}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      el.textContent = data.value || 0;
    })
    .catch(err => console.warn("Counter Error:", err));
});
