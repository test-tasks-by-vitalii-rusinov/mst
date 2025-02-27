// Функция для проверки, находится ли элемент в поле зрения
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Функция для обработки всех элементов
function handleVisibility() {
  document.querySelectorAll('body *').forEach((element) => {
      if (isElementInViewport(element)) {
          element.classList.add('visible');
      }
  });
}

// Выполняем проверку сразу при загрузке и при прокрутке
document.addEventListener("DOMContentLoaded", handleVisibility);
window.addEventListener("scroll", handleVisibility);
