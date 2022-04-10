const listIngredients = document.querySelectorAll('.ingredients--list__item');
const checked = (e) => {
  e.classList.toggle('checked')
}

for (const ingredient of listIngredients) {
  ingredient.addEventListener('click', (e) => {
    const contains = e.target.classList.contains('ingredients--list__item')
    if (contains) checked(e.target)

  })
}