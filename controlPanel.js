(function () {
  const panel = document.getElementById("topPanel");
  const openBtn = document.getElementById("controlPanelBtn");
  const closeBtn = document.getElementById("closePanel");

  // защита от ошибок
  if (!panel || !openBtn || !closeBtn) {
    console.error("ControlPanel: элементы не найдены");
    return;
  }

  // открыть / закрыть
  openBtn.onclick = () => {
    panel.classList.toggle("active");
  };

  closeBtn.onclick = () => {
    panel.classList.remove("active");
  };

  // закрытие по клику вне панели
  document.addEventListener("click", (e) => {
    if (
      panel.classList.contains("active") &&
      !panel.contains(e.target) &&
      e.target !== openBtn
    ) {
      panel.classList.remove("active");
    }
  });

  // закрытие по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      panel.classList.remove("active");
    }
  });
})();