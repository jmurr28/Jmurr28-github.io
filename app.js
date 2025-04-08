function saveState(mealId, value) {
  localStorage.setItem(mealId, value);
}
function loadState(mealId) {
  return localStorage.getItem(mealId);
}
window.onload = () => {
  const mealInputs = document.querySelectorAll(".meal-time-input");
  mealInputs.forEach(input => {
    const saved = loadState(input.dataset.mealId + '-time');
    if (saved) input.value = saved;
    input.addEventListener("change", e => {
      saveState(e.target.dataset.mealId + '-time', e.target.value);
    });
  });
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(cb => {
    const saved = loadState(cb.id);
    if (saved === "true") cb.checked = true;
    cb.addEventListener("change", () => saveState(cb.id, cb.checked));
  });
};
