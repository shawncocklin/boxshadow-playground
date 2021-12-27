document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', handleInput)
})

function handleInput(e) {
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  )
}