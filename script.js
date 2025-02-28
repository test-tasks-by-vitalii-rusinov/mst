// <--------------Плавное появление элементов (начало)---------------->
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function handleVisibility() {
  document.querySelectorAll('body *').forEach((element) => {
      if (isElementInViewport(element)) {
          element.classList.add('visible');
      }
  });
}

document.addEventListener("DOMContentLoaded", handleVisibility);
window.addEventListener("scroll", handleVisibility);
// <--------------Плавное появление элементов (конец)---------------->

// <--------------Событие для кнопки сабмит (начало)---------------->
const form = document.getElementById('order-form_form');
const submitBtn = document.getElementById('submitBtn');
const agreement = document.getElementById('agreement');

agreement.addEventListener('change', () => {
  submitBtn.disabled = !agreement.checked;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
  });
});
// <--------------Событие для кнопки сабмит (конец)---------------->

// <--------------Событие для кнопок Order (начало)---------------->
document.querySelectorAll(".toOrder").forEach(button => {
  button.addEventListener("click", function () {
      document.querySelector("#order").scrollIntoView();
  });
});

// <--------------Событие для кнопок Order (конец)---------------->